/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <circle cx='256' cy='256' r='208' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M461.43 271.44c-5.09.37-8.24.56-13.43.56-114.88 0-208-93.12-208-208 0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208 0 5.38-.61 14-.61 14'/>
    </svg>
)

const TennisballOutline = createIcon(svgElement)

TennisballOutline.displayName = 'TennisballOutline'

export { IconProps } from '../base/createIcon'

export default TennisballOutline
