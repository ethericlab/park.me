const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function formatDateTime(date: Date): string {
  const dayIndex = date.getDay()
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${shortDayNames[dayIndex]}, ${day} of ${
    monthNames[monthIndex]
  } ${year} - ${hours}:${minutes.toString().padStart(2, '0')}`
}
