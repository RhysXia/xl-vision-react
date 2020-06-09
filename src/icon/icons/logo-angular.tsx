/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M213.57 256L298.42 256 255.99 166.64 213.57 256z'/><path d='M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z'/>
    </svg>
)

const LogoAngular = createIcon(svgElement)

LogoAngular.displayName = 'LogoAngular'

export { IconProps } from '../base/createIcon'

export default LogoAngular
