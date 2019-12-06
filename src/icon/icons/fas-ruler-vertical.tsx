/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 256 512'>
        <path d='M168 416c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64h-88z'/>
    </svg>
)

const FasRulerVertical = createIcon(svgElement)

FasRulerVertical.displayName = 'FasRulerVertical'

export { IconProps } from '../base/createIcon'

export default FasRulerVertical
