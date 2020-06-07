/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0133.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 010 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'/>
    </svg>
)

const FasTag = createIcon(svgElement)

FasTag.displayName = 'FasTag'

export { IconProps } from '../base/createIcon'

export default FasTag
