/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M296 352L200 256 296 160'/>
    </svg>
)

const ChevronBackCircleOutline = createIcon(svgElement)

ChevronBackCircleOutline.displayName = 'ChevronBackCircleOutline'

export { IconProps } from '../base/createIcon'

export default ChevronBackCircleOutline
