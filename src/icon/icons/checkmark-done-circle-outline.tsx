/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 192L256.13 320 208.18 272'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M191.95 320L144 272'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M305.71 192L254.16 251'/>
    </svg>
)

const CheckmarkDoneCircleOutline = createIcon(svgElement)

CheckmarkDoneCircleOutline.displayName = 'CheckmarkDoneCircleOutline'

export { IconProps } from '../base/createIcon'

export default CheckmarkDoneCircleOutline
