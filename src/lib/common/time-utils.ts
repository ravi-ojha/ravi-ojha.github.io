export const toLocalTime = (time: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }

  const date = new Date(time)
  return date.toLocaleString(undefined, options)
}

export const toLocalDate = (time: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  const date = new Date(time)
  return date.toLocaleDateString(undefined, options)
}
