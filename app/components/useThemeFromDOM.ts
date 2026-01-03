'use client'

import { useState, useEffect } from 'react'

export function useThemeFromDOM(): 'dark' | 'light' {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return

    const root = document.documentElement
    const getTheme = () => {
      const domTheme = root.getAttribute('data-theme') as 'dark' | 'light' | null
      if (domTheme) {
        return domTheme
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    }

    setTheme(getTheme())

    const observer = new MutationObserver(() => {
      setTheme(getTheme())
    })
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  return mounted ? theme : 'dark'
}

