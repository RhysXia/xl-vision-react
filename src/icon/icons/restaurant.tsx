/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M357.57 223.94a79.48 79.48 0 0056.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 00-23.17-.56l-68.63 68.58a12.29 12.29 0 01-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 00-.56-23.16A15.62 15.62 0 00440.27 56a16.71 16.71 0 00-11.81 4.9l-68.27 68.26a12.29 12.29 0 01-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 00-.56-23.16A15.62 15.62 0 00400.26 16a16.73 16.73 0 00-11.81 4.9L311.5 97.85a79.49 79.49 0 00-23.44 56.59v8.23a16 16 0 01-4.69 11.33l-35.61 35.62a4 4 0 01-5.66 0L68.82 36.33a16 16 0 00-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 00211 326a64 64 0 0016.21-2.08 16.24 16.24 0 014.07-.53 15.93 15.93 0 0110.83 4.25l11.39 10.52a16.12 16.12 0 014.6 11.23v5.54a47.73 47.73 0 0013.77 33.65l90.05 91.57.09.1a53.29 53.29 0 0075.36-75.37L302.39 269.9a4 4 0 010-5.66L338 228.63a16 16 0 0111.32-4.69z'/><path d='M211 358a97.32 97.32 0 01-68.36-28.25l-13.86-13.86a8 8 0 00-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a30.63 30.63 0 001.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0039.64-16.44L225 365.66a4.69 4.69 0 001.32-3.72v-.26a4.63 4.63 0 00-5.15-4.27A97.09 97.09 0 01211 358z'/>
    </svg>
)

const Restaurant = createIcon(svgElement)

Restaurant.displayName = 'Restaurant'

export { IconProps } from '../base/createIcon'

export default Restaurant
