import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z'/>
    </svg>
)

const FarWindowMinimize = createIcon(svgElement)

export { IconProps } from '../base/base-icon'

export default FarWindowMinimize
