/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M48 256L464 256'/><rect width='32' height='256' x='384' y='128' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='16' ry='16'/><rect width='32' height='256' x='96' y='128' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='16' ry='16'/><rect width='16' height='128' x='32' y='192' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='8' ry='8'/><rect width='16' height='128' x='464' y='192' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='8' ry='8'/>
    </svg>
)

const BarbellOutline = createIcon(svgElement)

BarbellOutline.displayName = 'BarbellOutline'

export { IconProps } from '../base/createIcon'

export default BarbellOutline
