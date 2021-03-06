import React from 'react'
import PropTypes from 'prop-types'
import CSSTransition, {
  CSSTransitionProps,
  CSSTransitionClassesObject,
  TransitionElement,
  CSSTransitionClasses
} from '../CSSTransition'
import fillRef from '../commons/utils/fillRef'
import { addClass, removeClass } from '../commons/utils/class'
import { onTransitionEnd, getTransitionInfo, forceReflow } from '../commons/utils/transition'
import computeQueue, { Data } from './computeQueue'
import useLayoutEffect from '../commons/hooks/useLayoutEffect'
import useEventCallback from '../commons/hooks/useEventCallback'
import { warning } from '../commons/utils/logger'
import { omit } from '../commons/utils/function'

export interface TransitionGroupClassesObject
  extends Omit<
    CSSTransitionClassesObject,
    'appear' | 'appearActive' | 'appearTo' | 'disappear' | 'disappearActive' | 'disappearTo'
  > {
  move?: string
}

export type TransitionGroupClasses = string | TransitionGroupClassesObject

export interface TransitionGroupProps
  extends Omit<
    CSSTransitionProps,
    | 'beforeAppear'
    | 'appear'
    | 'afterAppear'
    | 'appearCancelled'
    | 'beforeDisappear'
    | 'disappear'
    | 'afterDisappear'
    | 'disappearCancelled'
    | 'children'
    | 'transitionOnFirst'
    | 'in'
    | 'classNames'
    | 'mountOnEnter'
    | 'unmountOnLeave'
  > {
  children: Array<CSSTransitionProps['children']>
  transitionClasses?: TransitionGroupClasses
}

type TransitionGroupElement = TransitionElement & {
  _move?: () => void
  _oldPos?: DOMRect
  _newPos?: DOMRect
  _NEED_LEAVE_CANCEL?: boolean
}

const TransitionGroup: React.FunctionComponent<TransitionGroupProps> = (props) => {
  const { children, transitionClasses, ..._others } = props

  // 阻止用户故意传入appear和disappear钩子
  const others = omit(
    _others as CSSTransitionProps,
    'beforeAppear',
    'appear',
    'afterAppear',
    'appearCancelled',
    'beforeDisappear',
    'disappear',
    'afterDisappear',
    'disappearCancelled'
  )

  const transitionClassesObj = React.useMemo(() => {
    let obj: CSSTransitionClassesObject & { move?: string } = {}

    if (!transitionClasses) {
      return {}
    }
    // 组件实际上是使用CSSTransition的appear和disappear钩子实现动画，但是向用户隐藏实现细节，
    // 所以这里需要将enter和leave的class设置到appear和disappear上
    if (typeof transitionClasses === 'object') {
      obj = { ...transitionClasses }
      obj.appear = obj.enter
      obj.appearActive = obj.enterActive
      obj.appearTo = obj.enterTo

      obj.disappear = obj.leave
      obj.disappearActive = obj.leaveActive
      obj.disappearTo = obj.leaveTo
    } else {
      obj.appear = obj.enter = `${transitionClasses}-enter`
      obj.appearTo = obj.enterTo = `${transitionClasses}-enter-to`
      obj.appearActive = obj.enterActive = `${transitionClasses}-enter-active`
      obj.disappear = obj.leave = `${transitionClasses}-leave`
      obj.disappearTo = obj.leaveTo = `${transitionClasses}-leave-to`
      obj.disappearActive = obj.leaveActive = `${transitionClasses}-leave-active`
      obj.move = `${transitionClasses}-move`
    }

    return obj
  }, [transitionClasses])

  const [elements, setElements] = React.useState<Array<React.ReactElement>>([])

  const queneRef = React.useRef<Array<Data<React.ReactElement>>>([])

  const [flag, setFlag] = React.useState(false)

  const computedRef = React.useRef(false)

  const nodeMapRef = React.useRef<Map<string | number, TransitionGroupElement>>()

  const fillRefForElement = React.useCallback((element: React.ReactElement) => {
    const nodeMap = (nodeMapRef.current =
      nodeMapRef.current || new Map<string | number, TransitionGroupElement>())
    const { key } = element
    warning(!key, '<TransitioGroup> must has a key')

    const cb = (node: HTMLElement) => {
      if (!node) {
        nodeMap.delete(key!)
      } else {
        nodeMap.set(key!, node)
      }
    }
    return fillRef(element, cb)
  }, [])

  const prevChildrenRef = React.useRef<Array<React.ReactElement>>(
    children.filter(Boolean).map(fillRefForElement)
  )

  const childrenTrigger = useEventCallback((_children: Array<React.ReactElement>) => {
    const nodeMap = nodeMapRef.current
    if (nodeMap) {
      nodeMap.forEach((node) => {
        node._oldPos = node.getBoundingClientRect()
      })
    }

    const prevChildren = prevChildrenRef.current

    const refChildren = _children.map(fillRefForElement)

    const quene = (queneRef.current = computeQueue(prevChildren, refChildren))
    const arr: Array<React.ReactElement> = []

    for (let i = 0; i < quene.length; i++) {
      const data = quene[i]
      if (data.same) {
        let prev = data.prev[0]

        // 如果删除后立即添加同一个元素，由于会对same中的元素执行clearTransition操作，
        // 间接执行了afterLeave，会会导致元素被添加后又删除了。
        // 这里在dom上添加标记，提示自定义的afterLeave方法取消执行
        // 为什么不直接将in=false？因为这里添加的，是在下一次循环才会真正渲染到dom tree，
        // 在那之前可能afterLeave执行了，删除了节点
        if (prev.type === CSSTransition && !(prev.props as CSSTransitionProps).in) {
          const node = nodeMap?.get(prev.key!)
          node && (node._NEED_LEAVE_CANCEL = true)

          const { beforeEnter } = others

          // beforeEnter可能先执行，此时不用考虑afterLeave
          const beforeEnterWrap = (el: TransitionGroupElement) => {
            el._NEED_LEAVE_CANCEL = false
            beforeEnter && beforeEnter(el)
          }

          prev = React.cloneElement(prev, {
            in: true,
            beforeEnter: beforeEnterWrap
          })
        }

        arr.push(prev)
        data.prev[0] = prev
      } else {
        const prev = data.prev.map((it) => {
          const isTransition = it.type === CSSTransition
          if (isTransition && !(it.props as CSSTransitionProps).in) {
            return it
          }

          const child = isTransition ? (it.props as CSSTransitionProps).children : it
          const { afterLeave, ...others2 } = others

          const afterLeaveWrap = (el: TransitionGroupElement) => {
            // 如果标记取消leave
            // 触发leaveCancelled
            if (el._NEED_LEAVE_CANCEL) {
              others2.leaveCancelled && others2.leaveCancelled(el)
              el._NEED_LEAVE_CANCEL = false
              return
            }
            afterLeave && afterLeave(el)
            prevChildrenRef.current = prevChildrenRef.current.filter(
              (_prev) => _prev.key !== it.key
            )
          }

          return (
            <CSSTransition
              {...others2}
              transitionOnFirst={true}
              afterLeave={afterLeaveWrap}
              transitionClasses={transitionClassesObj}
              in={false}
              key={it.key!}
            >
              {child}
            </CSSTransition>
          )
        })
        data.prev = prev
        arr.push(...prev)
        const { next } = data
        arr.push(...next)
      }
    }
    setElements(arr)

    computedRef.current = true
  })

  React.useEffect(() => {
    childrenTrigger(children)
  }, [children, childrenTrigger])

  // Transition中需要触发两次layoutEffect才能正确调用hook
  // 这里等待Transition逻辑执行完毕
  useLayoutEffect(() => {
    if (computedRef.current) {
      setFlag((prev) => !prev)
    }
  }, [elements])

  const elementsTrigger = useEventCallback(() => {
    if (!computedRef.current) {
      return
    }
    computedRef.current = false

    const nodeMap = nodeMapRef.current

    const quene = queneRef.current
    const arr: Array<React.ReactElement> = []
    const sameNodes: Array<TransitionGroupElement> = []

    for (let i = 0; i < quene.length; i++) {
      const data = quene[i]
      if (data.same) {
        const ele = data.prev[0]
        arr.push(ele)
        if (nodeMap) {
          const node = nodeMap.get(ele.key!)
          if (node) {
            sameNodes.push(node)
          }
        }
      } else {
        const { prev } = data

        const next = data.next.map((it) => {
          return (
            <CSSTransition
              {...others}
              transitionOnFirst={true}
              key={it.key!}
              transitionClasses={transitionClassesObj}
              in={true}
            >
              {it}
            </CSSTransition>
          )
        })

        arr.push(...prev)
        arr.push(...next)
      }
    }
    prevChildrenRef.current = arr
    setElements(arr)

    const moveClass = transitionClassesObj.move

    const hasMove = sameNodes.length > 0 && moveClass && hasCSSTransform(sameNodes[0], moveClass)

    if (!hasMove) {
      return
    }

    // 使元素尽快归位，防止插入元素动画太突兀
    sameNodes.forEach(clearTransition)
    sameNodes.forEach((node) => {
      node._newPos = node.getBoundingClientRect()
    })
    const moveNodes = sameNodes.filter(applyTransition)

    forceReflow()
    moveNodes.forEach((node) => {
      const { style } = node
      addClass(node, moveClass!)
      style.transform = style.webkitTransform = style.transitionDuration = ''
      const cb = onTransitionEnd(node, () => {
        removeClass(node, moveClass!)
      })
      node._move = () => {
        cb()
        node._move = undefined
        removeClass(node, moveClass!)
      }
    })
  })

  // 同步执行，避免闪烁
  useLayoutEffect(() => {
    elementsTrigger()
  }, [flag, elementsTrigger])

  return <>{elements}</>
}

TransitionGroup.displayName = 'TransitionGroup'

TransitionGroup.propTypes = {
  transitionClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
}

export default TransitionGroup

const hasCSSTransform = (_el: HTMLElement, moveClass: string) => {
  const el = _el as TransitionElement
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  const clone = el.cloneNode() as HTMLElement
  if (el._ctc) {
    Object.keys(el._ctc).forEach((key: keyof CSSTransitionClasses) => {
      const clazz = el._ctc![key]
      clazz && clone.classList.remove(clazz)
    })
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c))
  clone.style.display = 'none'
  const container = (el.nodeType === 1 ? el : el.parentNode) as HTMLElement
  container.appendChild(clone)
  const { hasTransform } = getTransitionInfo(clone)
  container.removeChild(clone)
  return hasTransform
}

const clearTransition = (el: TransitionGroupElement) => {
  const done = el._done
  const move = el._move
  done && done()
  move && move()
}

const applyTransition = (el: TransitionGroupElement) => {
  const oldPos = el._oldPos
  const newPos = el._newPos
  if (!oldPos || !newPos) {
    return false
  }
  const dx = oldPos.left - newPos.left
  const dy = oldPos.top - newPos.top
  if (!dx && !dy) {
    return false
  }
  const s = el.style
  s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`
  s.transitionDuration = '0s'
  return true
}
