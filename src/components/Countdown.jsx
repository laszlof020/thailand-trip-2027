import { useEffect, useState } from 'react'

const UNITS = [
  { key: 'days', label: 'nap' },
  { key: 'hours', label: 'óra' },
  { key: 'minutes', label: 'perc' },
  { key: 'seconds', label: 'másodperc' },
]

function getRemaining(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    done: diff === 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function Countdown({ target }) {
  const [remaining, setRemaining] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (remaining.done) {
    return (
      <p className="countdown-done" role="status">
        🎉 Elindult a jegyvásárlás! Hajrá!
      </p>
    )
  }

  return (
    <div className="countdown" role="timer" aria-live="off">
      {UNITS.map(({ key, label }) => (
        <div className="countdown-unit" key={key}>
          <span className="countdown-value">
            {String(remaining[key]).padStart(2, '0')}
          </span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}
