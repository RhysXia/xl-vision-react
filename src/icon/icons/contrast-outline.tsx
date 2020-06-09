/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <circle cx='256' cy='256' r='208' fill='none' strokeLinejoin='round' strokeWidth='32'/><path d='M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z'/>
    </svg>
)

const ContrastOutline = createIcon(svgElement)

ContrastOutline.displayName = 'ContrastOutline'

export { IconProps } from '../base/createIcon'

export default ContrastOutline
