/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='44' d='M358.62 129.28L86.49 402.08 70 442 109.92 425.51 382.72 153.38 358.62 129.28z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='44' d='M413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z'/>
    </svg>
)

const Pencil = createIcon(svgElement)

Pencil.displayName = 'Pencil'

export { IconProps } from '../base/createIcon'

export default Pencil
