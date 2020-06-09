/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <circle cx='129' cy='96' r='48' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><circle cx='129' cy='416' r='48' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M129 144L129 368'/><circle cx='385' cy='288' r='48' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M129 144c0 96 112 144 208 144'/>
    </svg>
)

const GitMergeOutline = createIcon(svgElement)

GitMergeOutline.displayName = 'GitMergeOutline'

export { IconProps } from '../base/createIcon'

export default GitMergeOutline
