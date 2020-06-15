/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M436 176a28 28 0 00-28 28v128a28 28 0 0056 0V204a28 28 0 00-28-28zM76 176a28 28 0 00-28 28v128a28 28 0 0056 0V204a28 28 0 00-28-28zM124 176v192a32 32 0 0032 32h20v68a28 28 0 0056 0v-68h48v68a28 28 0 0056 0v-68h20a32 32 0 0032-32V176z'/><circle cx='196' cy='108' r='12' fill='none'/><circle cx='316' cy='108' r='12' fill='none'/><path d='M384.22 136C376 106.71 356.42 81.69 330 65.23q-2.22-1.38-4.5-2.68T320.92 60l5.08-9.08 15.89-28.66a4.21 4.21 0 00-1.65-5.73 4.14 4.14 0 00-2-.53 4.21 4.21 0 00-3.69 2.17l-16.1 29.05-5.08 9.15c-1.6-.71-3.22-1.38-4.86-2s-3.28-1.27-4.95-1.86a143.1 143.1 0 00-95 0q-2.5.89-4.95 1.86c-1.64.66-3.26 1.33-4.86 2l-5.08-9.15-16.1-29a4.22 4.22 0 00-7.38 4.09L186 50.92l5.08 9.08q-2.33 1.22-4.6 2.51T182 65.23c-26.4 16.46-46 41.48-54.2 70.74a94.46 94.46 0 00-3.72 24h263.86a94.46 94.46 0 00-3.72-23.97zM196 120a12 12 0 1112-12 12 12 0 01-12 12zm120 0a12 12 0 1112-12 12 12 0 01-12 12z'/>
    </svg>
)

const LogoAndroid = createIcon(svgElement)

LogoAndroid.displayName = 'LogoAndroid'

export { IconProps } from '../base/createIcon'

export default LogoAndroid
