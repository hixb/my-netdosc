'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@arco-design/web-react'

export default function Home() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme === 'dark')
      document.body.setAttribute('arco-theme', 'dark')
    else
      document.body.setAttribute('arco-theme', 'light')
  }, [theme])

  return (
    <main>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>hello</Button>
    </main>
  )
}
