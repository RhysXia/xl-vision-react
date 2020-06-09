/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M268 112L412 256 268 400'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M392 256L100 256'/>
    </svg>
)

const ArrowForward = createIcon(svgElement)

ArrowForward.displayName = 'ArrowForward'

export { IconProps } from '../base/createIcon'

export default ArrowForward
