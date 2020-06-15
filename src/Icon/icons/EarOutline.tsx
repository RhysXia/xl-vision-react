/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 00-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40 14.77-19.81 41.71-81.56 82.43-109.24z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 239c25-18 79.82-15 79.82-15 26 0 41.17 29.42 26 50.6 0 0-36.86 42.4-41.86 61.4'/>
    </svg>
)

const EarOutline = createIcon(svgElement)

EarOutline.displayName = 'EarOutline'

export { IconProps } from '../base/createIcon'

export default EarOutline
