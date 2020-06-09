/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z'/><path strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M128 416L384 416'/>
    </svg>
)

const Tv = createIcon(svgElement)

Tv.displayName = 'Tv'

export { IconProps } from '../base/createIcon'

export default Tv
