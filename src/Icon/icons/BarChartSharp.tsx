/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M496 496L16 496 16 16 48 16 48 464 496 464 496 496z'/><path d='M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z'/>
    </svg>
)

const BarChartSharp = createIcon(svgElement)

BarChartSharp.displayName = 'BarChartSharp'

export { IconProps } from '../base/createIcon'

export default BarChartSharp
