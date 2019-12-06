/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M0 160c0-53 114.6-96 256-96s256 43 256 96-114.6 96-256 96S0 213 0 160zm0 82.2V352c0 53 114.6 96 256 96s256-43 256-96V242.2c-113.4 82.3-398.5 82.4-512 0z'/>
    </svg>
)

const FasHockeyPuck = createIcon(svgElement)

FasHockeyPuck.displayName = 'FasHockeyPuck'

export { IconProps } from '../base/createIcon'

export default FasHockeyPuck
