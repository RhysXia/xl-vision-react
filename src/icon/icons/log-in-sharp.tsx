/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M432 80H192a16 16 0 00-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 010 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0016 16h240a16 16 0 0016-16V96a16 16 0 00-16-16z'/><path d='M64 240H176V272H64z'/>
    </svg>
)

const LogInSharp = createIcon(svgElement)

LogInSharp.displayName = 'LogInSharp'

export { IconProps } from '../base/createIcon'

export default LogInSharp
