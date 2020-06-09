/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/>
    </svg>
)

const EllipsisHorizontalSharp = createIcon(svgElement)

EllipsisHorizontalSharp.displayName = 'EllipsisHorizontalSharp'

export { IconProps } from '../base/createIcon'

export default EllipsisHorizontalSharp
