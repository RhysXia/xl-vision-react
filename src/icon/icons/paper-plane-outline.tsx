/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M460 52L227 285'/>
    </svg>
)

const PaperPlaneOutline = createIcon(svgElement)

PaperPlaneOutline.displayName = 'PaperPlaneOutline'

export { IconProps } from '../base/createIcon'

export default PaperPlaneOutline
