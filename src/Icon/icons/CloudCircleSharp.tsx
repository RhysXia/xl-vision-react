/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm70 280H196c-33 0-60-23-60-56 0-34.21 26-53 56-56 7.28-23.9 29.5-48 64-48 36.5 0 67.55 27.23 72 72 21.49 1.12 48 14.09 48 44 0 30.28-22.5 44-50 44z'/>
    </svg>
)

const CloudCircleSharp = createIcon(svgElement)

CloudCircleSharp.displayName = 'CloudCircleSharp'

export { IconProps } from '../base/createIcon'

export default CloudCircleSharp
