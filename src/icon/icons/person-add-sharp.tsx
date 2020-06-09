/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M106 304L106 250 160 250 160 214 106 214 106 160 70 160 70 214 16 214 16 250 70 250 70 304 106 304z'/><circle cx='288' cy='144' r='112'/><path d='M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z'/>
    </svg>
)

const PersonAddSharp = createIcon(svgElement)

PersonAddSharp.displayName = 'PersonAddSharp'

export { IconProps } from '../base/createIcon'

export default PersonAddSharp
