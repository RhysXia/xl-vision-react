/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M400 256L112 256'/>
    </svg>
)

const Remove = createIcon(svgElement)

Remove.displayName = 'Remove'

export { IconProps } from '../base/createIcon'

export default Remove
