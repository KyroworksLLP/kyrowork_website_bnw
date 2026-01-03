'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Detect system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme') as Theme | null
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  // Listen for external theme changes (from ThemeToggle)
  useEffect(() => {
    if (!mounted) return

    const handleThemeChange = (e: CustomEvent) => {
      const newTheme = (e.detail as { theme: Theme }).theme
      setTheme(newTheme)
    }

    const handleDOMChange = () => {
      const root = document.documentElement
      const domTheme = root.getAttribute('data-theme') as Theme | null
      if (domTheme && domTheme !== theme) {
        setTheme(domTheme)
      }
    }

    window.addEventListener('themechange', handleThemeChange as EventListener)
    
    const observer = new MutationObserver(handleDOMChange)
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    })

    return () => {
      window.removeEventListener('themechange', handleThemeChange as EventListener)
      observer.disconnect()
    }
  }, [mounted, theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

