'use client'

import React from 'react'

import {ThemeProvider} from '@emotion/react'
import {GlobalStyle, Theme, DarkTheme} from 'styles'

import {useDarkStore} from 'stores'

export default function Providers(
  {children}: {children: React.ReactNode}
) {
  const {isDark} = useDarkStore()
  return (
    <ThemeProvider theme={isDark ? DarkTheme : Theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

import styled from '@emotion/styled'

const Wrapper = styled.div`
  
`