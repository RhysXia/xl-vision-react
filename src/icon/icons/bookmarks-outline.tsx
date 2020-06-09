/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinejoin='round' strokeWidth='32' d='M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64'/><path fill='none' strokeLinejoin='round' strokeWidth='32' d='M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z'/>
    </svg>
)

const BookmarksOutline = createIcon(svgElement)

BookmarksOutline.displayName = 'BookmarksOutline'

export { IconProps } from '../base/createIcon'

export default BookmarksOutline
