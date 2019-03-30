import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M479.93 317.12a37.33 37.33 0 0 0-28.28-36.19L416 272v-49.59c0-11.44-9.69-21.29-23.15-23.54l-38.4-6.4C336.63 189.5 320 200.86 320 216v32a8 8 0 0 1-16 0V50c0-26.28-20.25-49.2-46.52-50A48 48 0 0 0 208 48v200a8 8 0 0 1-16 0v-32c0-15.15-16.63-26.51-34.45-23.54l-30.68 5.12c-18 3-30.87 16.12-30.87 31.38V376a8 8 0 0 1-16 0v-76l-27.36 15A37.34 37.34 0 0 0 32 348.4v73.47a37.31 37.31 0 0 0 10.93 26.39l30.93 30.93A112 112 0 0 0 153.05 512h215A112 112 0 0 0 480 400z'/>
    </svg>
)

const FasHandMiddleFinger = createIcon(svgElement)

export { IconProps } from '../base/base-icon'

export default FasHandMiddleFinger
