import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fab-rockrms`
const svgElement = (
    <svg viewBox='0 0 496 512'>
        <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm157.4 419.5h-90l-112-131.3c-17.9-20.4-3.9-56.1 26.6-56.1h75.3l-84.6-99.3-84.3 98.9h-90L193.5 67.2c14.4-18.4 41.3-17.3 54.5 0l157.7 185.1c19 22.8 2 57.2-27.6 56.1-.6 0-74.2.2-74.2.2l101.5 118.9z'/>
    </svg>
)

const FabRockrms = createIcon(svgElement)

FabRockrms.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabRockrms
