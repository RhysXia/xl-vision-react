import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-level-down-alt`
const svgElement = (
    <svg viewBox='0 0 320 512'>
        <path d='M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a11.996 11.996 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331z'/>
    </svg>
)

const FasLevelDownAlt = createIcon(svgElement)

FasLevelDownAlt.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasLevelDownAlt
