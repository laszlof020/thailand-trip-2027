import { formatHuf } from '../format.js'
import { JOURNEYS } from '../tripData.js'

function Segment({ segment }) {
  if (segment.layover) {
    return <li className="segment-layover">⏱ {segment.layover}</li>
  }

  const { flight, from, to, duration } = segment
  return (
    <li className="segment">
      <div className="segment-point">
        <span className="segment-time">{from.time}</span>
        <span className="segment-code">{from.code}</span>
        <span className="segment-place">
          {from.name} · {from.date}
        </span>
      </div>
      <div className="segment-mid">
        <span className="segment-flight">{flight}</span>
        <span className="segment-line" aria-hidden="true">
          ✈
        </span>
        <span className="segment-duration">{duration}</span>
      </div>
      <div className="segment-point segment-point-end">
        <span className="segment-time">{to.time}</span>
        <span className="segment-code">{to.code}</span>
        <span className="segment-place">
          {to.name} · {to.date}
        </span>
      </div>
    </li>
  )
}

export default function Flights() {
  return (
    <div className="journeys">
      {JOURNEYS.map((journey) => (
        <article className="journey" key={journey.id}>
          <header className="journey-head">
            <div>
              <p className="journey-kicker">
                {journey.title} · {journey.date}
              </p>
              <h3>{journey.route}</h3>
              <p className="journey-meta">
                {journey.airline} · összesen {journey.totalDuration}
              </p>
            </div>
            <div className="journey-price">
              <span className="price-value">
                {journey.priceIsEstimate && 'kb. '}
                {formatHuf(journey.pricePerPerson)}
              </span>
              <span className="price-unit">/ fő</span>
            </div>
          </header>
          <ol className="segments">
            {journey.segments.map((segment, i) => (
              <Segment segment={segment} key={i} />
            ))}
          </ol>
          {journey.status === 'tbd' && (
            <p className="journey-note">Járatszám és pontos időpont hamarosan.</p>
          )}
          {journey.note && <p className="journey-note">ℹ️ {journey.note}</p>}
        </article>
      ))}
    </div>
  )
}
