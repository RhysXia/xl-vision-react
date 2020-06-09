/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' d='M240 304L272 304 278 144 234 144 240 304z'/><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z'/>
    </svg>
)

const AlertCircleSharp = createIcon(svgElement)

AlertCircleSharp.displayName = 'AlertCircleSharp'

export { IconProps } from '../base/createIcon'

export default AlertCircleSharp
