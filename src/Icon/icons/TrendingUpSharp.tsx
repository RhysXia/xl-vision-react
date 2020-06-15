/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M352 144L464 144 464 256'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M48 368L192 224 288 320 448 160'/>
    </svg>
)

const TrendingUpSharp = createIcon(svgElement)

TrendingUpSharp.displayName = 'TrendingUpSharp'

export { IconProps } from '../base/createIcon'

export default TrendingUpSharp
