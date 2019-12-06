/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 320 512'>
        <path d='M320 48v32a16 16 0 01-16 16h-62.76l-80 320H208a16 16 0 0116 16v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h62.76l80-320H112a16 16 0 01-16-16V48a16 16 0 0116-16h192a16 16 0 0116 16z'/>
    </svg>
)

const FasItalic = createIcon(svgElement)

FasItalic.displayName = 'FasItalic'

export { IconProps } from '../base/createIcon'

export default FasItalic
