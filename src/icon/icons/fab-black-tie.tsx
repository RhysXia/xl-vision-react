/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z'/>
    </svg>
)

const FabBlackTie = createIcon(svgElement)

FabBlackTie.displayName = 'FabBlackTie'

export { IconProps } from '../base/createIcon'

export default FabBlackTie
