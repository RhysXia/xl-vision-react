import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fab-dyalog`
const svgElement = (
    <svg viewBox='0 0 416 512'>
        <path d='M0 32v119.2h64V96h107.2C284.6 96 352 176.2 352 255.9 352 332 293.4 416 171.2 416H0v64h171.2C331.9 480 416 367.3 416 255.9c0-58.7-22.1-113.4-62.3-154.3C308.9 56 245.7 32 171.2 32H0z'/>
    </svg>
)

const FabDyalog = createIcon(svgElement)

FabDyalog.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabDyalog
