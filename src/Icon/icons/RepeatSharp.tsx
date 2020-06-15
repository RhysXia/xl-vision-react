/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M320 120L368 168 320 216'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M352 168L64 168 64 264'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M192 392L144 344 192 296'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M160 344L448 344 448 248'/>
    </svg>
)

const RepeatSharp = createIcon(svgElement)

RepeatSharp.displayName = 'RepeatSharp'

export { IconProps } from '../base/createIcon'

export default RepeatSharp
