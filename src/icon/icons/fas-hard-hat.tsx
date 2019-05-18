import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-hard-hat`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'/>
    </svg>
)

const FasHardHat = createIcon(svgElement)

FasHardHat.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasHardHat
