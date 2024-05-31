import React from 'react'

import Providers from './providers'

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'untitled',
  description: "what's matter?"
}

export default function RootLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}