/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M391.12 341.48l-28.6-14.36 7.18-14.3c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73L362.48 185 391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18z'/><path d='M189.65 176.1L96 176.1 96 335.9 189.65 335.9 320 440 320 72 189.65 176.1z'/>
    </svg>
)

const VolumeLowSharp = createIcon(svgElement)

VolumeLowSharp.displayName = 'VolumeLowSharp'

export { IconProps } from '../base/createIcon'

export default VolumeLowSharp
