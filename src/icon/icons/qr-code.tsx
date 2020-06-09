/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='80' height='80' x='336' y='336' rx='8' ry='8'/><rect width='64' height='64' x='272' y='272' rx='8' ry='8'/><rect width='64' height='64' x='416' y='416' rx='8' ry='8'/><rect width='48' height='48' x='432' y='272' rx='8' ry='8'/><rect width='48' height='48' x='272' y='432' rx='8' ry='8'/><path d='M448 32H304a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 32H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 272H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V304a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8z'/>
    </svg>
)

const QrCode = createIcon(svgElement)

QrCode.displayName = 'QrCode'

export { IconProps } from '../base/createIcon'

export default QrCode
