import { TRIP_DAYS } from '../tripData.js'

const PLACES = {
  travel: { icon: '✈️', label: 'Utazás' },
  phuket: { icon: '🏝️', label: 'Phuket' },
  bangkok: { icon: '🏙️', label: 'Bangkok' },
}

const dayFormatter = new Intl.DateTimeFormat('hu-HU', {
  month: 'short',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'UTC',
})

// Today's date in Thailand, to highlight the current day during the trip
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Bangkok' }).format(new Date())

export default function Planner() {
  return (
    <ol className="days">
      {TRIP_DAYS.map((day, i) => {
        const place = PLACES[day.place]
        const isToday = day.date === today
        return (
          <li className={`day day-${day.place}${isToday ? ' day-today' : ''}`} key={day.date}>
            <header className="day-head">
              <span className="day-number">{i + 1}. nap</span>
              <h3>{dayFormatter.format(new Date(`${day.date}T00:00:00Z`))}</h3>
              <span className="day-place">
                {place.icon} {day.route ?? place.label}
              </span>
              {isToday && <span className="day-badge">Ma</span>}
            </header>

            {day.events.length > 0 && (
              <ul className="day-events">
                {day.events.map((event) => (
                  <li key={event.time + event.text}>
                    <span className="day-time">{event.time}</span>
                    {event.text}
                  </li>
                ))}
              </ul>
            )}

            {day.programs.length > 0 ? (
              <ul className="day-programs">
                {day.programs.map((program) => (
                  <li key={program}>{program}</li>
                ))}
              </ul>
            ) : (
              day.place !== 'travel' && <p className="day-empty">Szabad nap, még nincs program.</p>
            )}
          </li>
        )
      })}
    </ol>
  )
}
