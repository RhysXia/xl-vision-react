import PropTypes from 'prop-types'
import React from 'react'
import { createPopper, Placement, Modifier, Options, Instance } from '@popperjs/core'
import Portal, { ContainerType } from '../Portal'
import useUpdate from '../commons/hooks/useUpdate'
import useMountStateCallback from '../commons/hooks/useMountStateCallback'
import PopperContext from './popper-context'
import { mergeEvents } from '../commons/utils/event'
import CSSTransition, { CSSTransitionProps } from '../CSSTransition'
import useClickOutside from '../commons/hooks/useClickOutside'
import { increaseZIndex, getCurrentIndex } from '../commons/utils/zIndex-manager'
import fillRef from '../commons/utils/fillRef'
import useConstantCallback from '../commons/hooks/useConstantCallback'

export { Placement }
export { Modifier }

export type ActualPlacement = Omit<Placement, 'auto' | 'auto-start' | 'auto-end'>

export interface PopperProps {
  placement?: Placement
  getPopupContainer?: ContainerType
  popup: React.ReactElement | ((placement: ActualPlacement) => React.ReactElement)
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  delayHide?: number
  delayShow?: number
  trigger?: 'hover' | 'focus' | 'click' | 'contextMenu' | 'custom'
  disablePopupEnter?: boolean
  transitionClasses?: CSSTransitionProps['transitionClasses']
  forceRender?: boolean
  arrow?: React.ReactElement | ((placement: ActualPlacement) => React.ReactElement)
  offset?: number | string
  overlayStyle?: React.CSSProperties | ((placement: ActualPlacement) => React.CSSProperties)
  overlayClassName?: string | ((placement: ActualPlacement) => string)
}

const defaultGetContainer = () => document.body

const defaultPopperModifiers = [
  {
    name: 'preventOverflow',
    options: {
      boundariesElement: 'window'
    }
  }
]

// 约等于1帧的时间
const TIME_DELAY = 1000 / 60

/**
 * 此组件是所有弹出框组件的基础组件
 * 为组件添加了很多事件，并且将popup和reference进行分开处理而不是在最外层添加一个div，利用React的事件冒泡统一处理的原因是：
 * 添加div固然减少了组件的复杂度，但是也影响了需要被添加popper的组件或者dom元素。
 * 本组件的优点在于对children零干扰，不影响原来组件的样式和结构。
 * @param props
 */
const Popper: React.FunctionComponent<PopperProps> = (props) => {
  const {
    placement = 'auto',
    getPopupContainer = defaultGetContainer,
    popup,
    children,
    visible = false,
    onVisibleChange,
    delayHide = 0,
    delayShow = 0,
    trigger = 'hover',
    disablePopupEnter,
    transitionClasses,
    forceRender,
    arrow,
    offset = 0,
    overlayStyle,
    overlayClassName
  } = props

  const popperJsRef = React.useRef<Instance>()

  const referenceNodeRef = React.useRef<HTMLDivElement>(null)
  const popupNodeRef = React.useRef<HTMLDivElement>(null)

  const delayTimerRef = React.useRef<NodeJS.Timeout>()

  const [actualVisible, setActualVisible] = React.useState(visible)

  // 实际的placement，可能和传入的placement不同
  const [actualPlacement, setActualPlacement] = React.useState(placement)

  // 弹出框zIndex，保证后弹出的弹出框zIndex更大
  const [zIndex, setZIndex] = React.useState(getCurrentIndex)

  // popper是否需要挂载的状态
  // visible为true时就直接挂载
  const [needMount, setNeedMount] = React.useState(visible)

  const mountedCallback = useMountStateCallback()

  // 子popper关闭函数集合
  const closeHandlerRef = React.useRef<Array<() => void>>([])

  // 子popper函数，将子popper的关闭函数传递给当前组件，这样在当前popper关闭时，可以一同关闭子popper
  const addCloseHandler = React.useCallback((handler: () => void) => {
    closeHandlerRef.current.push(handler)
  }, [])

  // 子组件销毁时移除
  const removeCloseHandler = React.useCallback((handler: () => void) => {
    const arr = closeHandlerRef.current
    closeHandlerRef.current = arr.slice(arr.indexOf(handler), 1)
  }, [])

  /**
   * 设置popper显示状态，处理特殊情况。
   * 通常需要调用这个方法进行状态设置
   */
  const setActualWrapper = useConstantCallback((isVisible: boolean) => {
    // 第一次显示时需要设置popper为可挂载状态
    if (isVisible) {
      setNeedMount(true)
    }
    // 取消上次定时器的执行
    clearTimeout(delayTimerRef.current!)
    // 重设定时器，最少需要等待TIME_DELAY时间
    delayTimerRef.current = setTimeout(
      () => {
        // 判断组件是否已经被卸载
        // 由于setTimeout在组件卸载后可能才执行，必须进行必要的判断
        if (mountedCallback()) {
          // 关闭popper时需要关闭所有子popper
          if (!isVisible) {
            closeHandlerRef.current.forEach((it) => it())
          }
          setActualVisible(isVisible)
        }
      },
      isVisible ? Math.max(delayShow, TIME_DELAY) : Math.max(delayHide, TIME_DELAY)
    )
  })

  /**
   * 处理父popper
   */
  const {
    addCloseHandler: addParentCloseHandler,
    removeCloseHandler: removeParentCloseHandler
  } = React.useContext(PopperContext)

  // 将本popper的关闭函数加入父popper中
  React.useEffect(() => {
    const handler = () => setActualWrapper(false)
    addParentCloseHandler(handler)
    return () => {
      removeParentCloseHandler(handler)
    }
  }, [addParentCloseHandler, removeParentCloseHandler, setActualWrapper])

  const modifiers = React.useMemo(() => {
    return defaultPopperModifiers.concat([])
  }, [])

  const createPopperJs = useConstantCallback(() => {
    let popperJs = popperJsRef.current
    if (popperJs) {
      popperJs.destroy()
      popperJsRef.current = undefined
    }

    const reference = referenceNodeRef.current
    const popup = popupNodeRef.current

    if (!reference || !popup) {
      return
    }

    const options: Partial<Options> = {
      placement,
      modifiers
    }
    popperJs = createPopper(reference, popup, options)

    popperJsRef.current = popperJs
  })

  const updatePopperJs = useConstantCallback(() => {
    if (popperJsRef.current) {
      popperJsRef.current.setOptions({
        placement
      })
    }
  })

  const actualVisibleTrigger = useConstantCallback((actualVisible: boolean) => {
    onVisibleChange && onVisibleChange(actualVisible)
  })

  // 更新actualVisible时触发onVisibleChange函数
  useUpdate(() => {
    actualVisibleTrigger(actualVisible)
  }, [actualVisible, actualVisibleTrigger])

  const visibleTrigger = useConstantCallback((visible: boolean) => {
    setTimeout(() => {
      setActualWrapper(visible)
      // 增加延时保证这个方法最后调用,时间不能大于TIME_DELAY,否则上一个任务就执行完了
    }, TIME_DELAY * 0.5)
  })

  // visible修改时触发actualVisible更新
  React.useEffect(() => {
    visibleTrigger(visible)
  }, [
    visible,
    // 常量
    visibleTrigger
  ])

  const updatePopper = useConstantCallback(() => {
    if (actualVisible) {
      // 更新zIndex
      setZIndex(increaseZIndex())
      if (!popperJsRef.current) {
        createPopperJs()
      } else {
        updatePopperJs()
      }
    }
    if (popperJsRef.current) {
      // 只有显示时才监听事件
      popperJsRef.current
        .setOptions({
          modifiers: [
            ...modifiers,
            {
              name: 'eventListeners',
              enabled: actualVisible
            }
          ]
        })
        .then((state) => {
          setActualPlacement(state.placement!)
        })
    }
  })

  // 弹出框显示时更新位置
  React.useEffect(() => {
    updatePopper()
  }, [
    placement,
    // 常量
    updatePopper
  ])

  // 组件销毁时销毁popperJs
  React.useEffect(() => {
    return () => {
      const popperJs = popperJsRef.current
      if (popperJs) {
        popperJs.destroy()
      }
    }
  }, [])

  /**
   * 进入popup区域时触发。
   * 鼠标有可能从reference区域出来，此时需要清除定时器，否则reference的鼠标移出事件会关闭popper
   */
  const onPopupMouseEnter = useConstantCallback(() => {
    // 取消定时器
    clearTimeout(delayTimerRef.current!)
    if (disablePopupEnter) {
      setActualWrapper(false)
    }
  })

  /**
   * 如果触发器是hover，则移出popup需要关闭popup
   */
  const onPopupMouseLeave = useConstantCallback(() => {
    if (trigger === 'hover') {
      setActualWrapper(false)
    }
  })

  /**
   * popup点击事件,
   * 由于此方法可能会在onClickoutside之前执行，但是需要取消onClickoutside的执行。
   *
   * 让clickoutside先触发，此方法会取消onClickoutside
   * 延迟时间必须小于TIME_DELAY,否则onClickOutside就执行了.也要小于TIME_DELAY * 0.5.
   * 即使频繁触发此方法，也不需要清除此定时器，因为在setActualWrapper中已经清除了相关定时器
   */
  const onPopupClick = useConstantCallback(() => {
    if (trigger === 'click' || trigger === 'contextMenu') {
      setTimeout(() => setActualWrapper(true), TIME_DELAY * 0.3)
    }
  })

  const onMouseEnter = useConstantCallback(() => {
    // 如果是从popup移动过来，需要先清除popup的定时关闭
    clearTimeout(delayTimerRef.current!)
    if (trigger === 'hover') {
      setActualWrapper(true)
    }
  })

  const onMouseLeave = useConstantCallback(() => {
    if (trigger === 'hover') {
      setActualWrapper(false)
    }
  })

  const onFocus = useConstantCallback(() => {
    if (trigger === 'focus') {
      setActualWrapper(true)
    }
  })

  const onBlur = useConstantCallback(() => {
    if (trigger === 'focus') {
      setActualWrapper(false)
    }
  })

  const onContextMenu = useConstantCallback(() => {
    if (trigger === 'contextMenu') {
      setActualWrapper(true)
    }
  })

  const onReferenceClick = useConstantCallback(() => {
    if (trigger === 'click') {
      setActualWrapper(true)
    }
  })

  const onClickOutside = useConstantCallback(() => {
    if (trigger === 'click' || trigger === 'contextMenu') {
      setActualWrapper(false)
    }
  })

  // 在reference外点击时触发
  useClickOutside(referenceNodeRef, onClickOutside)

  // popup
  const popupNode = typeof popup === 'function' ? popup(actualPlacement) : popup

  // arrow
  let arrowNode = typeof arrow === 'function' ? arrow(actualPlacement) : arrow

  if (arrowNode) {
    arrowNode = React.cloneElement(arrowNode, {
      'data-popper-arrow': ''
    })
  }

  const popupStyle: React.CSSProperties = {
    zIndex,
    position: 'absolute'
  }
  const direction = actualPlacement.split('-')[0]
  if (direction === 'top') {
    popupStyle.paddingBottom = offset
  } else if (direction === 'bottom') {
    popupStyle.paddingTop = offset
  } else if (direction === 'left') {
    popupStyle.paddingRight = offset
  } else {
    popupStyle.paddingLeft = offset
  }

  /**
   * 提供介入popup弹出框弹出动画的操作，比如根据位置进行动画定位。可以参见tooltip
   */
  const overlayStyleWrapper =
    typeof overlayStyle === 'function' ? overlayStyle(actualPlacement) : overlayStyle || {}

  overlayStyleWrapper.position = 'relative'

  const overlayClassNameWrapper =
    typeof overlayClassName === 'function' ? overlayClassName(actualPlacement) : overlayClassName

  const portal = (
    <Portal getContainer={getPopupContainer}>
      <PopperContext.Provider
        value={{
          addCloseHandler,
          removeCloseHandler
        }}
      >
        <div
          style={popupStyle}
          onMouseEnter={onPopupMouseEnter}
          onMouseLeave={onPopupMouseLeave}
          onClick={onPopupClick}
          ref={popupNodeRef}
        >
          <CSSTransition
            in={actualVisible}
            transitionClasses={transitionClasses}
            beforeEnter={updatePopper}
            afterLeave={updatePopper}
          >
            <div style={overlayStyleWrapper} className={overlayClassNameWrapper}>
              {arrowNode}
              {popupNode}
            </div>
          </CSSTransition>
        </div>
      </PopperContext.Provider>
    </Portal>
  )
  /**
   * 添加事件到children中，但是不能妨碍children中原来的事件，
   * 所以对于相同的事件需要合并
   */
  const {
    onBlur: _onBlur,
    onClick: _onClick,
    onContextMenu: _onContextMenu,
    onFocus: _onFocus,
    onMouseEnter: _onMouseEnter,
    onMouseLeave: _onMouseLeave,
    ...others
  } = children.props
  const childrenNode = React.cloneElement(children, {
    ...others,
    onBlur: mergeEvents(onBlur, _onBlur),
    onClick: mergeEvents(onReferenceClick, _onClick),
    onContextMenu: mergeEvents(onContextMenu, _onContextMenu),
    onFocus: mergeEvents(onFocus, _onFocus),
    onMouseEnter: mergeEvents(onMouseEnter, _onMouseEnter),
    onMouseLeave: mergeEvents(onMouseLeave, _onMouseLeave)
  })

  return (
    <>
      {(forceRender || needMount) && portal}
      {/* 保证children上原有的ref能够触发 */}
      {fillRef(childrenNode, referenceNodeRef)}
    </>
  )
}

Popper.propTypes = {
  getPopupContainer: PropTypes.func,
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'left',
    'right',
    'bottom',
    'auto-start',
    'auto-end',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
    'right-start',
    'right-end'
  ]),
  transitionClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  popup: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  delayHide: PropTypes.number,
  delayShow: PropTypes.number,
  trigger: PropTypes.oneOf(['hover', 'focus', 'click', 'contextMenu', 'custom']),
  disablePopupEnter: PropTypes.bool,
  forceRender: PropTypes.bool,
  arrow: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overlayStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  overlayClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default Popper