/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M256 400a48 48 0 1048 48 48 48 0 00-48-48zM256 272a48 48 0 1048 48 48 48 0 00-48-48zM256 144a48 48 0 1048 48 48 48 0 00-48-48zM256 16a48 48 0 1048 48 48 48 0 00-48-48zM384 272a48 48 0 1048 48 48 48 0 00-48-48zM384 144a48 48 0 1048 48 48 48 0 00-48-48zM384 16a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zM128 144a48 48 0 1048 48 48 48 0 00-48-48zM128 16a48 48 0 1048 48 48 48 0 00-48-48z'/>
    </svg>
)

const Keypad = createIcon(svgElement)

Keypad.displayName = 'Keypad'

export { IconProps } from '../base/createIcon'

export default Keypad
