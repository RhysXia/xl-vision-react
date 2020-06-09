/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M224 432h-80V80h80zM368 432h-80V80h80z'/>
    </svg>
)

const PauseSharp = createIcon(svgElement)

PauseSharp.displayName = 'PauseSharp'

export { IconProps } from '../base/createIcon'

export default PauseSharp
