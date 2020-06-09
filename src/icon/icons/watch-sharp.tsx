/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='240' height='240' x='136' y='136' rx='8' ry='8'/><path d='M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z'/>
    </svg>
)

const WatchSharp = createIcon(svgElement)

WatchSharp.displayName = 'WatchSharp'

export { IconProps } from '../base/createIcon'

export default WatchSharp
