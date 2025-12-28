import { writable } from 'svelte/store'

export const theme = writable('light')

export const setInitialTheme = () => {
  const prefersDark = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (typeof window !== 'undefined') {
    let newTheme = undefined
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      newTheme = storedTheme
    } else {
      newTheme = prefersDark() ? 'dark' : 'light'
    }
    theme.set(newTheme)
  }
}

export const toggleTheme = () => {
  theme.update((current) => {
    const newTheme = current === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
    return newTheme
  })
}

export const setLightTheme = () => {
  theme.update((current) => {
    if (current == 'light') return current
    const newTheme = 'light'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove('dark')
    return newTheme
  })
}

export const setDarkTheme = () => {
  theme.update((current) => {
    if (current == 'dark') return current
    const newTheme = 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.add('dark')
    return newTheme
  })
}
