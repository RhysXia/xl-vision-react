/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinejoin='round' strokeWidth='32' d='M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M336.67 192.33L206.66 322.34'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M336.67 322.34L206.66 192.33'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M336.67 192.33L206.66 322.34'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M336.67 322.34L206.66 192.33'/>
    </svg>
)

const BackspaceOutline = createIcon(svgElement)

BackspaceOutline.displayName = 'BackspaceOutline'

export { IconProps } from '../base/createIcon'

export default BackspaceOutline
