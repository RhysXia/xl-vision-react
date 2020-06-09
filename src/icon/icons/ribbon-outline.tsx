/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <circle cx='256' cy='160' r='128' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8'/><circle cx='256' cy='160' r='64' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
    </svg>
)

const RibbonOutline = createIcon(svgElement)

RibbonOutline.displayName = 'RibbonOutline'

export { IconProps } from '../base/createIcon'

export default RibbonOutline
