import React from 'react'
import type {Preview} from '@storybook/react'
import Providers from 'app/providers'
import {Theme, DarkTheme, GlobalStyle} from '@src/styles'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen',
    darkMode: {
      dark: DarkTheme,
      light: Theme
    }
  },
  decorators: [
    (Story) => (
      <Providers>
        <GlobalStyle />
        <Story />
      </Providers>
    )
  ]
}

export default preview
