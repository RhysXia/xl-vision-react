import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-allergies`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M416 112c-17.6 0-32 14.4-32 32v72c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V64c0-17.6-14.4-32-32-32s-32 14.4-32 32v152c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V32c0-17.6-14.4-32-32-32s-32 14.4-32 32v184c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V64c0-17.6-14.4-32-32-32S96 46.4 96 64v241l-23.6-32.5c-13-17.9-38-21.8-55.9-8.8s-21.8 38-8.8 55.9l125.6 172.7c9 12.4 23.5 19.8 38.8 19.8h197.6c22.3 0 41.6-15.3 46.7-37l26.5-112.7c3.2-13.7 4.9-28.3 5.1-42.3V144c0-17.6-14.4-32-32-32zM176 416c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm64 128c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm64 32c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm32 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm32-128c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z'/>
    </svg>
)

const FasAllergies = createIcon(svgElement)

FasAllergies.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasAllergies
