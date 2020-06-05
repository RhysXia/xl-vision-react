declare module '*.md'
declare module '*.mdx'
declare module '*.scss'
declare module '*.png'

declare module '*.json' {
  const value: any
  export const version: string
  export default value
}
