/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z'/>
    </svg>
)

const ChatboxEllipsesSharp = createIcon(svgElement)

ChatboxEllipsesSharp.displayName = 'ChatboxEllipsesSharp'

export { IconProps } from '../base/createIcon'

export default ChatboxEllipsesSharp
