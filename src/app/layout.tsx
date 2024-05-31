import React from 'react'

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
      {children}
      </body>
    </html>
  )
}