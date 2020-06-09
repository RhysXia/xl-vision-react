/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinejoin='round' strokeWidth='32' d='M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M317 208L209.2 336 163 284.8'/>
    </svg>
)

const CloudDoneOutline = createIcon(svgElement)

CloudDoneOutline.displayName = 'CloudDoneOutline'

export { IconProps } from '../base/createIcon'

export default CloudDoneOutline
