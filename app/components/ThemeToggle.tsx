'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get initial theme from DOM
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      const currentTheme = root.getAttribute('data-theme') as 'dark' | 'light' | null
      if (currentTheme) {
        setTheme(currentTheme)
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'light')
      }

      // Watch for theme changes
      const observer = new MutationObserver(() => {
        const newTheme = root.getAttribute('data-theme') as 'dark' | 'light' | null
        if (newTheme) {
          setTheme(newTheme)
        }
      })
      observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

      return () => observer.disconnect()
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window === 'undefined') return
    
    const root = document.documentElement
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    
    // Update DOM
    root.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Dispatch custom event for ThemeProvider to sync
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }))
  }

  if (!mounted) {
    return (
      <button
        className="theme-toggle cursor-target"
        aria-label="Toggle theme"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          padding: '0.5rem',
          fontSize: '1.2rem',
          transition: 'color 0.3s ease',
        }}
      >
        🌙
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle cursor-target"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        padding: '0.5rem',
        fontSize: '1.2rem',
        transition: 'color 0.3s ease',
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

