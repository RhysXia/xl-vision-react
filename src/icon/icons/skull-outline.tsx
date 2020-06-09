/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z'/><circle cx='168' cy='280' r='40' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/><circle cx='344' cy='280' r='40' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 336L240 384 272 384 256 336z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 448L256 480'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 448L208 480'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M304 448L304 480'/>
    </svg>
)

const SkullOutline = createIcon(svgElement)

SkullOutline.displayName = 'SkullOutline'

export { IconProps } from '../base/createIcon'

export default SkullOutline
