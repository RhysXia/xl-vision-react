/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='448' height='80' x='32' y='48' rx='12' ry='12'/><path d='M64 160v280a24 24 0 0024 24h336a24 24 0 0024-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z'/>
    </svg>
)

const ArchiveSharp = createIcon(svgElement)

ArchiveSharp.displayName = 'ArchiveSharp'

export { IconProps } from '../base/createIcon'

export default ArchiveSharp
