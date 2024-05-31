import '@emotion/react'
import {Theme} from 'styles'

type DefaultTheme = typeof Theme

declare module '@emotion/react' {
  interface Theme extends DefaultTheme {}
}