/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M400 304L448 352 400 400'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M400 112L448 160 400 208'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M64 352h85.19a80 80 0 0066.56-35.62L256 256'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208'/>
    </svg>
)

const Shuffle = createIcon(svgElement)

Shuffle.displayName = 'Shuffle'

export { IconProps } from '../base/createIcon'

export default Shuffle
