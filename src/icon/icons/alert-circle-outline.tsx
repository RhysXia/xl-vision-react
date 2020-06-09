/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z'/><path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'/>
    </svg>
)

const AlertCircleOutline = createIcon(svgElement)

AlertCircleOutline.displayName = 'AlertCircleOutline'

export { IconProps } from '../base/createIcon'

export default AlertCircleOutline
