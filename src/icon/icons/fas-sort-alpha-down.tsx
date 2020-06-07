/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M176 352h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 00-16 16v32a16 16 0 0016 16h56l-61.26 70.45A32 32 0 00272 446.37V464a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16h-56l61.26-70.45A32 32 0 00432 321.63V304a16 16 0 00-16-16zm31.06-85.38l-59.27-160A16 16 0 00372.72 32h-41.44a16 16 0 00-15.07 10.62l-59.27 160A16 16 0 00272 224h24.83a16 16 0 0015.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 00407.16 224H432a16 16 0 0015.06-21.38zM335.61 144L352 96l16.39 48z'/>
    </svg>
)

const FasSortAlphaDown = createIcon(svgElement)

FasSortAlphaDown.displayName = 'FasSortAlphaDown'

export { IconProps } from '../base/createIcon'

export default FasSortAlphaDown
