/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 010 .15 15.42 15.42 0 00-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z'/>
    </svg>
)

const AirplaneSharp = createIcon(svgElement)

AirplaneSharp.displayName = 'AirplaneSharp'

export { IconProps } from '../base/createIcon'

export default AirplaneSharp
