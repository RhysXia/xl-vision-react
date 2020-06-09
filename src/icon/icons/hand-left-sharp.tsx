/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M429.58 209.08c-15.06-6.62-32.38 1.31-38.5 17.62L356 312h-11.27V80c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v151.75l-14.78.25V32c0-17.6-13.3-32-29.55-32s-29.55 14.4-29.55 32v199.75L197 232V64c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v183.75l-14.8.25V128c0-17.6-13.3-32-29.55-32S64 110.4 64 128v216c0 75.8 37.13 168 169 168 40.8 0 79.42-7 100.66-21a121.41 121.41 0 0033.72-33.31 138 138 0 0016-31.78l62.45-175.14c6.17-16.31-1.19-35.06-16.25-41.69z'/>
    </svg>
)

const HandLeftSharp = createIcon(svgElement)

HandLeftSharp.displayName = 'HandLeftSharp'

export { IconProps } from '../base/createIcon'

export default HandLeftSharp
