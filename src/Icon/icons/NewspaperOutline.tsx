/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinejoin='round' strokeWidth='32' d='M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328'/><path fill='none' strokeLinejoin='round' strokeWidth='32' d='M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M240 128L304 128'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M240 192L304 192'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 256L304 256'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 320L304 320'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 384L304 384'/><path d='M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z'/>
    </svg>
)

const NewspaperOutline = createIcon(svgElement)

NewspaperOutline.displayName = 'NewspaperOutline'

export { IconProps } from '../base/createIcon'

export default NewspaperOutline
