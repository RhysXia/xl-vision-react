/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='448' height='272' x='32' y='96' fill='none' strokeLinejoin='round' strokeWidth='32' rx='32.14' ry='32.14'/><path strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M128 416L384 416'/>
    </svg>
)

const TvOutline = createIcon(svgElement)

TvOutline.displayName = 'TvOutline'

export { IconProps } from '../base/createIcon'

export default TvOutline
