'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@arco-design/web-react'

export default function Home() {
  const { theme, setTheme } = useTheme()

  React.useEffect(
    () => document.body.setAttribute('arco-theme', theme === 'dark' ? 'dark' : 'light'),
    [theme],
  )

  return (
    <main>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>hello</Button>
    </main>
  )
}
