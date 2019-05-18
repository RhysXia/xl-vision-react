import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-subscript`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M272 32h-67.8c-5.5 0-10.7 2.9-13.6 7.6l-40.3 65c-2.3 3.6-4.5 7.3-6.2 10.5-1.7-3.2-3.7-6.8-5.7-10.4L98.5 39.6c-2.9-4.7-8.1-7.6-13.6-7.6H16C7.2 32 0 39.2 0 48v32c0 8.8 7.2 16 16 16h30.1l52.8 77.3L42.3 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c5.5 0 10.7-2.9 13.6-7.6l44.7-72.1c2.2-3.6 4.2-7.3 5.9-10.6 1.8 3.2 3.9 6.9 6.2 10.2l45.7 72.6c2.9 4.7 8 7.5 13.5 7.5H272c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-22l-58.6-84.3L244 96h28c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm224 384H395.2c3.5-10.5 18.8-21.3 36.3-32.4 16.6-10.6 35.5-22.6 50.3-38.9 17.5-19.1 25.9-40.2 25.9-64.6 0-60.6-50.7-88.1-97.8-88.1-42.5 0-76.4 22-94.4 50.4-4.7 7.3-2.6 17 4.6 21.9l30.3 20.3c7 4.7 16.5 3.1 21.6-3.6 8-10.4 18.8-18.2 31.7-18.2 19.4 0 26.3 12.9 26.3 23.9 0 36.2-119.4 57-119.4 160 0 6.7.6 13 1.4 19.3 1.1 8 7.8 13.9 15.9 13.9H496c8.8 0 16-7.2 16-16v-32c0-8.7-7.2-15.9-16-15.9z'/>
    </svg>
)

const FasSubscript = createIcon(svgElement)

FasSubscript.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasSubscript
