/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M256 370.43L96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43z'/><path d='M512.25 192L256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192z'/>
    </svg>
)

const SchoolSharp = createIcon(svgElement)

SchoolSharp.displayName = 'SchoolSharp'

export { IconProps } from '../base/createIcon'

export default SchoolSharp
