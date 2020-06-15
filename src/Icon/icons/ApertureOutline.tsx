/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M360 94.59L360 296'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M443.13 212.87L296 360'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M417.41 360L216 360'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M299.13 443.13L155.13 299.13'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M152 416L152 216'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M68.87 299.13L212.87 155.13'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M94.59 152L288 152'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M212.87 68.87L360 216'/>
    </svg>
)

const ApertureOutline = createIcon(svgElement)

ApertureOutline.displayName = 'ApertureOutline'

export { IconProps } from '../base/createIcon'

export default ApertureOutline
