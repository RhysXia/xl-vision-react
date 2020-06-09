/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <rect width='400' height='224' x='32' y='144' fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' rx='45.7' ry='45.7'/><rect width='292.63' height='114.14' x='85.69' y='198.93' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' rx='4' ry='4'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M480 218.67L480 293.33'/>
    </svg>
)

const BatteryFull = createIcon(svgElement)

BatteryFull.displayName = 'BatteryFull'

export { IconProps } from '../base/createIcon'

export default BatteryFull
