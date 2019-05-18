import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-x-ray`
const svgElement = (
    <svg viewBox='0 0 640 512'>
        <path d='M240 384c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm160 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM624 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zm0 448h-48V96H64v352H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM480 248c0 4.4-3.6 8-8 8H336v32h104c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H336v32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48v-16h-64v16c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48h64v-32H200c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h104v-32H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h136v-32H200c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h104v-24c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v24h104c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H336v32h136c4.4 0 8 3.6 8 8v16z'/>
    </svg>
)

const FasXRay = createIcon(svgElement)

FasXRay.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasXRay
