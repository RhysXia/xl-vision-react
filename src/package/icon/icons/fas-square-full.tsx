import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M512 512H0V0h512v512z'/>
    </svg>
)

const FasSquareFull = createIcon(svgElement)

export { IconProps } from '../base/base-icon'

export default FasSquareFull
