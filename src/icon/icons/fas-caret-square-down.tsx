import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-caret-square-down`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z'/>
    </svg>
)

const FasCaretSquareDown = createIcon(svgElement)

FasCaretSquareDown.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasCaretSquareDown
