/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinejoin='round' strokeWidth='32' d='M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z'/>
    </svg>
)

const ArrowUndoOutline = createIcon(svgElement)

ArrowUndoOutline.displayName = 'ArrowUndoOutline'

export { IconProps } from '../base/createIcon'

export default ArrowUndoOutline
