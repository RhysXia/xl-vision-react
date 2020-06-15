/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeMiterlimit='10' strokeWidth='32' d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M400 80L400 432'/>
    </svg>
)

const PlaySkipForwardOutline = createIcon(svgElement)

PlaySkipForwardOutline.displayName = 'PlaySkipForwardOutline'

export { IconProps } from '../base/createIcon'

export default PlaySkipForwardOutline
