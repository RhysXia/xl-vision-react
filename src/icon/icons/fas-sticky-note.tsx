import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-sticky-note`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z'/>
    </svg>
)

const FasStickyNote = createIcon(svgElement)

FasStickyNote.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasStickyNote
