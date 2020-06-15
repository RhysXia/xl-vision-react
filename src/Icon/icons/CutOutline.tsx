/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <circle cx='104' cy='152' r='56' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><circle cx='104' cy='360' r='56' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path fill='none' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='32' d='M157 175l-11 15 37 15s3.46-6.42 7-10z'/><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M154.17 334.43L460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82zM344.47 278.24L295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6z'/><circle cx='256' cy='240' r='32' fill='none' strokeMiterlimit='10' strokeWidth='32'/>
    </svg>
)

const CutOutline = createIcon(svgElement)

CutOutline.displayName = 'CutOutline'

export { IconProps } from '../base/createIcon'

export default CutOutline
