/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 262.4a25.62 25.62 0 01-25.6 25.6H201.6a25.62 25.62 0 01-25.6-25.6V201.6a25.62 25.62 0 0125.6-25.6h108.8a25.62 25.62 0 0125.6 25.6z'/>
    </svg>
)

const StopCircle = createIcon(svgElement)

StopCircle.displayName = 'StopCircle'

export { IconProps } from '../base/createIcon'

export default StopCircle
