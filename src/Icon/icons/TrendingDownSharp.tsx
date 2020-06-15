/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M352 368L464 368 464 256'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M48 144L192 288 288 192 448 352'/>
    </svg>
)

const TrendingDownSharp = createIcon(svgElement)

TrendingDownSharp.displayName = 'TrendingDownSharp'

export { IconProps } from '../base/createIcon'

export default TrendingDownSharp
