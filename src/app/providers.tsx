'use client'

import React from 'react'
import {ThemeProvider} from '@emotion/react'
import {Theme} from "@src/styles";

export default function Providers(
  {children}: {children: React.ReactNode}
) {
  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  )
}