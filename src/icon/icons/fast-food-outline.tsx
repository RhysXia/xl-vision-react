/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M241 112L248.44 175.97'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M256 480h139.31a32 32 0 0031.91-29.61L463 112'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 112L384 48 431 32'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M224 112L480 112'/>
    </svg>
)

const FastFoodOutline = createIcon(svgElement)

FastFoodOutline.displayName = 'FastFoodOutline'

export { IconProps } from '../base/createIcon'

export default FastFoodOutline
