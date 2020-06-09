/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/>
    </svg>
)

const MenuSharp = createIcon(svgElement)

MenuSharp.displayName = 'MenuSharp'

export { IconProps } from '../base/createIcon'

export default MenuSharp
