/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M176 176v-40a40 40 0 0140-40h208a40 40 0 0140 40v240a40 40 0 01-40 40H216a40 40 0 01-40-40v-40'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M272 336L352 256 272 176'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M48 256L336 256'/>
    </svg>
)

const EnterOutline = createIcon(svgElement)

EnterOutline.displayName = 'EnterOutline'

export { IconProps } from '../base/createIcon'

export default EnterOutline
