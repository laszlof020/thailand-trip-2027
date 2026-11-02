const hufFormatter = new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 0 })

export function formatHuf(value) {
  return `${hufFormatter.format(Math.round(value))} Ft`
}
