/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <path d='M416 48a16 16 0 00-16-16H112a16 16 0 00-16 16v416a16 16 0 0016 16h288a16 16 0 0016-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z'/>
    </svg>
)

const CalculatorSharp = createIcon(svgElement)

CalculatorSharp.displayName = 'CalculatorSharp'

export { IconProps } from '../base/createIcon'

export default CalculatorSharp
