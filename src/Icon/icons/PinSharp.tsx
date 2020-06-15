/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M339 99a83 83 0 10-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 00339 99zm-59-6a21 21 0 1121-21 21 21 0 01-21 21z'/>
    </svg>
)

const PinSharp = createIcon(svgElement)

PinSharp.displayName = 'PinSharp'

export { IconProps } from '../base/createIcon'

export default PinSharp
