/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M80 480a16 16 0 01-16-16V68.13a24 24 0 0111.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0071-14.5 18 18 0 0125 16.58v219.36a20 20 0 01-12 18.31c-8.71 3.81-40.51 16.25-84 16.25-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 01-16 16z'/>
    </svg>
)

const Flag = createIcon(svgElement)

Flag.displayName = 'Flag'

export { IconProps } from '../base/createIcon'

export default Flag
