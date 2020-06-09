/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88'/><circle cx='256' cy='56' r='40' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/>
    </svg>
)

const ManOutline = createIcon(svgElement)

ManOutline.displayName = 'ManOutline'

export { IconProps } from '../base/createIcon'

export default ManOutline
