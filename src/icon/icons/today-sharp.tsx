/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='128' height='128' x='112' y='208' rx='9.14' ry='9.14'/><path d='M448 64h-48V32h-40v32H152V32h-40v32H64a32 32 0 00-32 32v352a32 32 0 0032 32h384a32 32 0 0032-32V96a32 32 0 00-32-32zm-12 372H76V176h360z'/>
    </svg>
)

const TodaySharp = createIcon(svgElement)

TodaySharp.displayName = 'TodaySharp'

export { IconProps } from '../base/createIcon'

export default TodaySharp
