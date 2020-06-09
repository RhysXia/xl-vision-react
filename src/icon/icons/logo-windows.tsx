/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z'/>
    </svg>
)

const LogoWindows = createIcon(svgElement)

LogoWindows.displayName = 'LogoWindows'

export { IconProps } from '../base/createIcon'

export default LogoWindows
