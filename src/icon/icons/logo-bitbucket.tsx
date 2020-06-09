/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M483.13 32.23a19.81 19.81 0 00-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.52 11.52 0 00.23 2.8l65.3 411.25a22.54 22.54 0 007 12.95 20 20 0 0013.5 5.25h313.15a15.46 15.46 0 0015.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44z'/>
    </svg>
)

const LogoBitbucket = createIcon(svgElement)

LogoBitbucket.displayName = 'LogoBitbucket'

export { IconProps } from '../base/createIcon'

export default LogoBitbucket
