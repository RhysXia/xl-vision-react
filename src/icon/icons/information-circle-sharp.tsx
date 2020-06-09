/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z'/>
    </svg>
)

const InformationCircleSharp = createIcon(svgElement)

InformationCircleSharp.displayName = 'InformationCircleSharp'

export { IconProps } from '../base/createIcon'

export default InformationCircleSharp
