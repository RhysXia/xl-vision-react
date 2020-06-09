/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z'/>
    </svg>
)

const GridSharp = createIcon(svgElement)

GridSharp.displayName = 'GridSharp'

export { IconProps } from '../base/createIcon'

export default GridSharp
