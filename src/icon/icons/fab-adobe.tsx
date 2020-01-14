/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M315.5 64h170.9v384L315.5 64zm-119 0H25.6v384L196.5 64zM256 206.1L363.5 448h-73l-30.7-76.8h-78.7L256 206.1z'/>
    </svg>
)

const FabAdobe = createIcon(svgElement)

FabAdobe.displayName = 'FabAdobe'

export { IconProps } from '../base/createIcon'

export default FabAdobe