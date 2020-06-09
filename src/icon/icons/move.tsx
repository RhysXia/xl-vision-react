/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M176 112L256 32 336 112'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M255.98 32L256 480'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M176 400L256 480 336 400'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M400 176L480 256 400 336'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 176L32 256 112 336'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M32 256L480 256'/>
    </svg>
)

const Move = createIcon(svgElement)

Move.displayName = 'Move'

export { IconProps } from '../base/createIcon'

export default Move
