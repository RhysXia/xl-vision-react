/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 160L256 448'/>
    </svg>
)

const BookOutline = createIcon(svgElement)

BookOutline.displayName = 'BookOutline'

export { IconProps } from '../base/createIcon'

export default BookOutline
