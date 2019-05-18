import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fab-uikit`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z'/>
    </svg>
)

const FabUikit = createIcon(svgElement)

FabUikit.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabUikit
