import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-meh-blank`
const svgElement = (
    <svg viewBox='0 0 496 512'>
        <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 232c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'/>
    </svg>
)

const FasMehBlank = createIcon(svgElement)

FasMehBlank.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasMehBlank
