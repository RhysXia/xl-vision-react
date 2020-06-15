/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 144L448 144'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 256L448 256'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 368L448 368'/><circle cx='80' cy='144' r='16' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><circle cx='80' cy='256' r='16' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><circle cx='80' cy='368' r='16' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
    </svg>
)

const ListOutline = createIcon(svgElement)

ListOutline.displayName = 'ListOutline'

export { IconProps } from '../base/createIcon'

export default ListOutline
