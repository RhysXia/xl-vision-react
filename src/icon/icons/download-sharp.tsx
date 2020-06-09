/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 00-12 12v296a12 12 0 0012 12h328a12 12 0 0012-12V172a12 12 0 00-12-12z'/><path d='M240 32H272V160H240z'/>
    </svg>
)

const DownloadSharp = createIcon(svgElement)

DownloadSharp.displayName = 'DownloadSharp'

export { IconProps } from '../base/createIcon'

export default DownloadSharp
