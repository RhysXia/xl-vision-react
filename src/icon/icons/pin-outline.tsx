/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <circle cx='256' cy='96' r='64' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path d='M272 164a9 9 0 00-9-9h-14a9 9 0 00-9 9v293.56a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38z'/><circle cx='280' cy='72' r='24'/>
    </svg>
)

const PinOutline = createIcon(svgElement)

PinOutline.displayName = 'PinOutline'

export { IconProps } from '../base/createIcon'

export default PinOutline
