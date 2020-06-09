/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M256 128L256 160'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M416 288L384 288'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M128 288L96 288'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M165.49 197.49L142.86 174.86'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M346.51 197.49L369.14 174.86'/>
    </svg>
)

const SpeedometerOutline = createIcon(svgElement)

SpeedometerOutline.displayName = 'SpeedometerOutline'

export { IconProps } from '../base/createIcon'

export default SpeedometerOutline
