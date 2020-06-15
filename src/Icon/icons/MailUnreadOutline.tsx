/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 160L256 272 343 206.33'/><circle cx='431.95' cy='128.05' r='47.95'/><path d='M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z'/>
    </svg>
)

const MailUnreadOutline = createIcon(svgElement)

MailUnreadOutline.displayName = 'MailUnreadOutline'

export { IconProps } from '../base/createIcon'

export default MailUnreadOutline
