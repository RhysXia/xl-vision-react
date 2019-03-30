import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M510.9 152.3l-5.9-14.5c-3.3-8-12.6-11.9-20.8-8.7L456 140.6v-29c0-8.6-7.2-15.6-16-15.6h-16c-8.8 0-16 7-16 15.6v46.9c0 .5.3 1 .3 1.5l-56.4 23c-5.9-10-13.3-18.9-22-26.6 13.6-16.6 22-37.4 22-60.5 0-53-43-96-96-96s-96 43-96 96c0 23.1 8.5 43.9 22 60.5-8.7 7.7-16 16.6-22 26.6l-56.4-23c.1-.5.3-1 .3-1.5v-46.9C104 103 96.8 96 88 96H72c-8.8 0-16 7-16 15.6v29l-28.1-11.5c-8.2-3.2-17.5.7-20.8 8.7l-5.9 14.5c-3.3 8 .7 17.1 8.9 20.3l135.2 55.2c-.4 4-1.2 8-1.2 12.2 0 10.1 1.7 19.6 4.2 28.9C120.9 296.4 104 334.2 104 376c0 54 28.4 100.9 70.8 127.8 9.3 5.9 20.3 8.2 31.3 8.2h99.2c13.3 0 26.3-4.1 37.2-11.7 46.5-32.3 74.4-89.4 62.9-152.6-5.5-30.2-20.5-57.6-41.6-79 2.5-9.2 4.2-18.7 4.2-28.7 0-4.2-.8-8.1-1.2-12.2L502 172.6c8.1-3.1 12.1-12.2 8.9-20.3zM224 96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-88s-16-23.2-16-32 7.2-16 16-16 16 7.2 16 16-16 32-16 32zm32-56c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z'/>
    </svg>
)

const FasSnowman = createIcon(svgElement)

export { IconProps } from '../base/base-icon'

export default FasSnowman
