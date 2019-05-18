import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-star-half`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z'/>
    </svg>
)

const FasStarHalf = createIcon(svgElement)

FasStarHalf.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasStarHalf
