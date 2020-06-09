/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M314.21 482.32l-56.77-114.74-44.89-57.39a72.82 72.82 0 01-10.13-37.05V144h15.67a40.22 40.22 0 0140.23 40.22v183.36M127.9 293.05v-74.52S165.16 144 202.42 144'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M370.1 274.42L304 231'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M170.53 478.36L224 400'/><circle cx='258.32' cy='69.48' r='37.26' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
    </svg>
)

const WalkOutline = createIcon(svgElement)

WalkOutline.displayName = 'WalkOutline'

export { IconProps } from '../base/createIcon'

export default WalkOutline
