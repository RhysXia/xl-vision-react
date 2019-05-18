import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fab-product-hunt`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z'/>
    </svg>
)

const FabProductHunt = createIcon(svgElement)

FabProductHunt.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabProductHunt
