/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M479.07 111.36a16 16 0 00-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 00-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 00-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 00129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0012 0c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0071.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-131 75.11l-110.8 128a16 16 0 01-11.41 5.53h-.66a16 16 0 01-11.2-4.57l-49.2-48.2a16 16 0 1122.4-22.86l37 36.29 99.7-115.13a16 16 0 0124.2 20.94z'/>
    </svg>
)

const ShieldCheckmark = createIcon(svgElement)

ShieldCheckmark.displayName = 'ShieldCheckmark'

export { IconProps } from '../base/createIcon'

export default ShieldCheckmark
