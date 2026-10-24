import { useEffect, useState } from 'react'
import { CITIES, HOME_TIME_ZONE } from '../tripData.js'

const WEATHER_REFRESH_MS = 15 * 60 * 1000

// WMO weather codes used by Open-Meteo
function weatherInfo(code) {
  if (code === 0) return { icon: '☀️', text: 'Derült' }
  if (code <= 2) return { icon: '🌤️', text: 'Részben felhős' }
  if (code === 3) return { icon: '☁️', text: 'Borult' }
  if (code <= 48) return { icon: '🌫️', text: 'Ködös' }
  if (code <= 57) return { icon: '🌦️', text: 'Szitálás' }
  if (code <= 67) return { icon: '🌧️', text: 'Eső' }
  if (code <= 77) return { icon: '🌨️', text: 'Havazás' }
  if (code <= 82) return { icon: '🌧️', text: 'Zápor' }
  if (code <= 86) return { icon: '🌨️', text: 'Hózápor' }
  return { icon: '⛈️', text: 'Zivatar' }
}

// UTC offset of a time zone at the given moment, in minutes (handles DST)
function offsetMinutes(timeZone, date) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'longOffset' })
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName').value
  const match = name.match(/GMT([+-])(\d{2}):(\d{2})/)
  if (!match) return 0
  const sign = match[1] === '-' ? -1 : 1
  return sign * (Number(match[2]) * 60 + Number(match[3]))
}

function formatDiff(minutes) {
  if (minutes === 0) return 'Budapesti idő'
  const hours = Math.abs(minutes) / 60
  const value = Number.isInteger(hours) ? hours : hours.toFixed(1).replace('.', ',')
  return `${minutes > 0 ? '+' : '−'}${value} óra Budapesthez képest`
}

function useNow() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

function useWeather() {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams({
      latitude: CITIES.map((city) => city.lat).join(','),
      longitude: CITIES.map((city) => city.lon).join(','),
      current: 'temperature_2m,weather_code',
    })

    async function load() {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        setWeather(data.map((entry) => entry.current))
        setError(false)
      } catch {
        setError(true)
      }
    }

    load()
    const id = setInterval(load, WEATHER_REFRESH_MS)
    return () => clearInterval(id)
  }, [])

  return { weather, error }
}

export default function CityWidgets() {
  const now = useNow()
  const { weather, error } = useWeather()
  const homeOffset = offsetMinutes(HOME_TIME_ZONE, now)

  return (
    <div className="cities">
      {CITIES.map((city, i) => {
        const time = new Intl.DateTimeFormat('hu-HU', {
          timeZone: city.timeZone,
          hour: '2-digit',
          minute: '2-digit',
        }).format(now)
        const day = new Intl.DateTimeFormat('hu-HU', {
          timeZone: city.timeZone,
          month: 'short',
          day: 'numeric',
          weekday: 'short',
        }).format(now)
        const current = weather?.[i]
        const info = current && weatherInfo(current.weather_code)

        return (
          <article className="city" key={city.name}>
            <header className="city-head">
              <h3>
                <span aria-hidden="true">{city.flag}</span> {city.name}
              </h3>
              <span className="city-day">{day}</span>
            </header>
            <p className="city-time">{time}</p>
            <p className="city-offset">
              {formatDiff(offsetMinutes(city.timeZone, now) - homeOffset)}
            </p>
            <p className="city-weather">
              {current ? (
                <>
                  <span className="city-temp">{Math.round(current.temperature_2m)}°C</span>
                  <span className="city-cond">
                    <span aria-hidden="true">{info.icon}</span> {info.text}
                  </span>
                </>
              ) : (
                <span className="city-cond">{error ? 'Időjárás nem elérhető' : 'Betöltés…'}</span>
              )}
            </p>
          </article>
        )
      })}
    </div>
  )
}
