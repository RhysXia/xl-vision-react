/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <circle cx='256' cy='256' r='26'/><circle cx='256' cy='346' r='26'/><circle cx='256' cy='166' r='26'/><path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'/>
    </svg>
)

const EllipsisVerticalCircleOutline = createIcon(svgElement)

EllipsisVerticalCircleOutline.displayName = 'EllipsisVerticalCircleOutline'

export { IconProps } from '../base/createIcon'

export default EllipsisVerticalCircleOutline
