/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='416' height='320' x='48' y='96' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='56' ry='56'/><path fill='none' strokeLinejoin='round' strokeWidth='60' d='M48 192L464 192'/><path fill='none' strokeLinejoin='round' strokeWidth='60' d='M128 300H176V320H128z'/>
    </svg>
)

const CardOutline = createIcon(svgElement)

CardOutline.displayName = 'CardOutline'

export { IconProps } from '../base/createIcon'

export default CardOutline
