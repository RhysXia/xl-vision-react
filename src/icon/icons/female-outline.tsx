/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <circle cx='256' cy='184' r='152' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 336L256 480'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M314 416L198 416'/>
    </svg>
)

const FemaleOutline = createIcon(svgElement)

FemaleOutline.displayName = 'FemaleOutline'

export { IconProps } from '../base/createIcon'

export default FemaleOutline
