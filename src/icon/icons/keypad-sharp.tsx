/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='96' height='96' x='80' y='16' rx='8' ry='8'/><rect width='96' height='96' x='208' y='16' rx='8' ry='8'/><rect width='96' height='96' x='336' y='16' rx='8' ry='8'/><rect width='96' height='96' x='80' y='144' rx='8' ry='8'/><rect width='96' height='96' x='208' y='144' rx='8' ry='8'/><rect width='96' height='96' x='336' y='144' rx='8' ry='8'/><rect width='96' height='96' x='80' y='272' rx='8' ry='8'/><rect width='96' height='96' x='208' y='272' rx='8' ry='8'/><rect width='96' height='96' x='208' y='400' rx='8' ry='8'/><rect width='96' height='96' x='336' y='272' rx='8' ry='8'/>
    </svg>
)

const KeypadSharp = createIcon(svgElement)

KeypadSharp.displayName = 'KeypadSharp'

export { IconProps } from '../base/createIcon'

export default KeypadSharp
