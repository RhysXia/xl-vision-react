/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M32 464a48 48 0 0048 48h288a48 48 0 0048-48V128H32zm91.31-172.8l89.38-94.26a15.41 15.41 0 0122.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z'/>
    </svg>
)

const FasTrashRestoreAlt = createIcon(svgElement)

FasTrashRestoreAlt.displayName = 'FasTrashRestoreAlt'

export { IconProps } from '../base/createIcon'

export default FasTrashRestoreAlt
