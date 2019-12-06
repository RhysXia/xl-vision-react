/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M251.64 354.55c-1.4 0-88 119.9-88.7 119.9S76.34 414 76 413.25s86.6-125.7 86.6-127.4c0-2.2-129.6-44-137.6-47.1-1.3-.5 31.4-101.8 31.7-102.1.6-.7 144.4 47 145.5 47 .4 0 .9-.6 1-1.3.4-2 1-148.6 1.7-149.6.8-1.2 104.5-.7 105.1-.3 1.5 1 3.5 156.1 6.1 156.1 1.4 0 138.7-47 139.3-46.3.8.9 31.9 102.2 31.5 102.6-.9.9-140.2 47.1-140.6 48.8-.3 1.4 82.8 122.1 82.5 122.9s-85.5 63.5-86.3 63.5c-1-.2-89-125.5-90.9-125.5z'/>
    </svg>
)

const FabDiaspora = createIcon(svgElement)

FabDiaspora.displayName = 'FabDiaspora'

export { IconProps } from '../base/createIcon'

export default FabDiaspora
