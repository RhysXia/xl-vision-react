import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-jedi`
const svgElement = (
    <svg viewBox='0 0 544 512'>
        <path d='M479.99 352l58.88-58.87c3.29-16.8 5.13-34.12 5.13-51.86 0-5.81-.68-11.51-1.05-17.27H496l41.25-41.24c-14.5-64.79-52.43-123.05-107.91-162.27-2.77-1.96-5.97-2.99-9.25-2.99-5.37 0-10.41 2.71-13.49 7.24-3.05 4.49-3.64 9.99-1.61 15.09 6.55 16.46 9.86 33.73 9.86 51.31 0 45.12-21.03 86.57-57.69 113.73-4.02 2.98-6.46 7.5-6.7 12.4-.24 4.92 1.76 9.66 5.49 13.03 32.93 29.75 47.35 73.51 38.57 117.07-9.74 48.35-48.84 87.1-97.31 96.5l-2.5-65.34L321.88 397c2.98 2.06 7.39 1.69 10.02-.8a8.002 8.002 0 0 0 1.34-9.92l-20.11-33.73 42.07-8.72c3.7-.75 6.38-4.05 6.38-7.83 0-3.77-2.69-7.06-6.38-7.83l-42.07-8.73 20.13-33.77c1.92-3.23 1.34-7.31-1.38-9.91-2.7-2.55-6.97-2.89-10-.8l-30.39 20.67L279.96 7.7a7.964 7.964 0 0 0-8-7.7c-4.33 0-7.84 3.38-8 7.67l-11.52 287.97-30.39-20.66c-3.14-2.12-7.27-1.83-10 .78-2.72 2.59-3.3 6.67-1.36 9.94l20.11 33.73-42.07 8.73c-3.7.75-6.38 4.05-6.38 7.83s2.67 7.08 6.38 7.83l42.07 8.72-20.13 33.77c-1.92 3.23-1.34 7.33 1.39 9.94 2.59 2.45 7.03 2.75 10 .75l27.16-18.48-2.5 65.26c-56.94-11.64-99.89-61.89-99.89-121.92 0-35.08 14.62-67.6 41.17-91.58 3.72-3.36 5.72-8.11 5.48-13.01-.24-4.9-2.68-9.41-6.69-12.38-36.67-27.16-57.71-68.62-57.71-113.74 0-17.56 3.31-34.81 9.84-51.26 2.02-5.09 1.43-10.59-1.62-15.09-3.08-4.54-8.13-7.25-13.51-7.25-3.3 0-6.5 1.04-9.27 3-55.87 39.52-93.6 97.37-107.97 162.07L47.93 224H.72c-.63 9.92-.97 19.91-.5 29.99.62 13.43 2.54 26.53 5.11 39.41l58.6 58.6H24.02c41.25 90.23 131.13 154.94 235.1 159.71 4.3.2 8.59.29 12.85.29 110.34 0 205.35-65.83 247.98-160h-39.96z'/>
    </svg>
)

const FasJedi = createIcon(svgElement)

FasJedi.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasJedi
