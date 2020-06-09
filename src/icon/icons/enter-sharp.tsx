/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0012 12h296a12 12 0 0012-12V92a12 12 0 00-12-12H172a12 12 0 00-12 12z'/><path d='M32 240H160V272H32z'/>
    </svg>
)

const EnterSharp = createIcon(svgElement)

EnterSharp.displayName = 'EnterSharp'

export { IconProps } from '../base/createIcon'

export default EnterSharp
