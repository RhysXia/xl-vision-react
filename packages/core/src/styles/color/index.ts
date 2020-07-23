import { isDevelopment } from '@xl-vision/commons'
import { dark as defaultDark, light as defaultLight, BaseColor } from './baseColor'
import defaultThemes, { ThemeColors } from './themeColor'
import { getContrastRatio } from '../../commons/utils/color'

export type Color = Partial<{
  types: {
    dark: BaseColor
    light: BaseColor
  }
  themes: ThemeColors
  contrastThreshold: number
  background: string
}>

const createColors = (color: Color = {}) => {
  const {
    types = {
      dark: defaultDark,
      light: defaultLight
    },
    background = '#fff',
    contrastThreshold = 3,
    themes = defaultThemes
  } = color

  const { dark, light } = types

  const getContrastType = (baseColor: string) => {
    let ratio = getContrastRatio(baseColor, dark.text.primary)

    if (ratio >= contrastThreshold) {
      if (isDevelopment) {
        if (ratio < 3) {
          console.error(
            [
              `The contrast ratio of ${ratio}:1 for ${dark.text.primary} on ${baseColor}`,
              'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
              'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
            ].join('\n')
          )
        }
      }
      return 'dark'
    }
    if (isDevelopment) {
      ratio = getContrastRatio(baseColor, light.text.primary)
      if (ratio < 3) {
        console.error(
          [
            `The contrast ratio of ${ratio}:1 for ${light.text.primary} on ${baseColor}`,
            'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
            'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
          ].join('\n')
        )
      }
    }

    return 'light'
  }

  const getContrastColor = (back = background) => {
    return getContrastType(back) === 'light' ? light : dark
  }

  return {
    types,
    themes,
    background,
    contrastThreshold,
    getContrastType,
    getContrastColor
  } as const
}

export default createColors
