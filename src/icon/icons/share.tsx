/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M376 176H272v145a16 16 0 01-32 0V176H136a56.06 56.06 0 00-56 56v192a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V232a56.06 56.06 0 00-56-56zM272 86.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 86.63V176h32z'/>
    </svg>
)

const Share = createIcon(svgElement)

Share.displayName = 'Share'

export { IconProps } from '../base/createIcon'

export default Share
