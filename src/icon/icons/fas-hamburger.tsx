/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M464 256H48a48 48 0 000 96h416a48 48 0 000-96zm16 128H32a16 16 0 00-16 16v16a64 64 0 0064 64h352a64 64 0 0064-64v-16a16 16 0 00-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 11-16 16 16 16 0 0116-16zM256 80a16 16 0 11-16 16 16 16 0 0116-16zm-128 32a16 16 0 11-16 16 16 16 0 0116-16z'/>
    </svg>
)

const FasHamburger = createIcon(svgElement)

FasHamburger.displayName = 'FasHamburger'

export { IconProps } from '../base/createIcon'

export default FasHamburger
