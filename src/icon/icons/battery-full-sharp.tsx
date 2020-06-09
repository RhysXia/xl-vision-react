/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M17 384h432V128H17zm32-224h368v192H49z'/><path d='M70.69 182.94H395.32V329.07H70.69z'/><path d='M465 202.67H497V309.34H465z'/>
    </svg>
)

const BatteryFullSharp = createIcon(svgElement)

BatteryFullSharp.displayName = 'BatteryFullSharp'

export { IconProps } from '../base/createIcon'

export default BatteryFullSharp
