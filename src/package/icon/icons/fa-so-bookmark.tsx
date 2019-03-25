import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 384 512'>
        <path d='M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z'/>
    </svg>
)

const FaSoBookmark = createIcon(svgElement)

export default FaSoBookmark