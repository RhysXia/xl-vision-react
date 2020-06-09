/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M330 16L287.32 58.7 453.3 224.68 496 182 330 16z'/><ellipse cx='224.68' cy='287.3' fill='none' rx='20.03' ry='19.96'/><path d='M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z'/>
    </svg>
)

const FlashlightSharp = createIcon(svgElement)

FlashlightSharp.displayName = 'FlashlightSharp'

export { IconProps } from '../base/createIcon'

export default FlashlightSharp
