/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z'/>
    </svg>
)

const PlayCircleSharp = createIcon(svgElement)

PlayCircleSharp.displayName = 'PlayCircleSharp'

export { IconProps } from '../base/createIcon'

export default PlayCircleSharp
