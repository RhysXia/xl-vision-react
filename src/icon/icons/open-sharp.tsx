/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M201.37 288L377.37 112 48 112 48 464 400 464 400 134.63 224 310.63 201.37 288z'/><path d='M320 48L320 80 409.37 80 377.37 112 400 134.63 432 102.63 432 192 464 192 464 48 320 48z'/>
    </svg>
)

const OpenSharp = createIcon(svgElement)

OpenSharp.displayName = 'OpenSharp'

export { IconProps } from '../base/createIcon'

export default OpenSharp
