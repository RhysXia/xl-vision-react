/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-100.69-28.69l-96 96a16 16 0 01-22.62 0l-96-96a16 16 0 0122.62-22.62L256 289.37l84.69-84.68a16 16 0 0122.62 22.62z'/>
    </svg>
)

const ChevronDownCircle = createIcon(svgElement)

ChevronDownCircle.displayName = 'ChevronDownCircle'

export { IconProps } from '../base/createIcon'

export default ChevronDownCircle
