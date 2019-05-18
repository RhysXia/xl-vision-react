import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fab-patreon`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z'/>
    </svg>
)

const FabPatreon = createIcon(svgElement)

FabPatreon.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabPatreon
