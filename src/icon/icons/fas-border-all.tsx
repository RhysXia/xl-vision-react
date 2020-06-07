/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z'/>
    </svg>
)

const FasBorderAll = createIcon(svgElement)

FasBorderAll.displayName = 'FasBorderAll'

export { IconProps } from '../base/createIcon'

export default FasBorderAll
