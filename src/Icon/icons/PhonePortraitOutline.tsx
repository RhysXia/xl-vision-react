/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <rect width='256' height='480' x='128' y='16' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='48' ry='48'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24'/>
    </svg>
)

const PhonePortraitOutline = createIcon(svgElement)

PhonePortraitOutline.displayName = 'PhonePortraitOutline'

export { IconProps } from '../base/createIcon'

export default PhonePortraitOutline
