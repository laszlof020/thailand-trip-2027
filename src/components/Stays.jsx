import { useState } from 'react'
import { formatHuf } from '../format.js'
import { STAYS, TRAVELERS } from '../tripData.js'

function Gallery({ photos, name }) {
  const [active, setActive] = useState(0)

  return (
    <div className="gallery">
      <img
        className="gallery-main"
        src={photos[active]}
        alt={`${name} – ${active + 1}. kép`}
        referrerPolicy="no-referrer"
      />
      <div className="gallery-thumbs">
        {photos.map((photo, i) => (
          <button
            type="button"
            key={photo}
            className={i === active ? 'gallery-thumb active' : 'gallery-thumb'}
            onClick={() => setActive(i)}
            aria-label={`${i + 1}. kép megjelenítése`}
          >
            <img src={photo} alt="" loading="lazy" referrerPolicy="no-referrer" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Stays() {
  return (
    <div className="stays">
      {STAYS.map((stay) => (
        <article className="stay" key={stay.id}>
          <Gallery photos={stay.photos} name={stay.name} />
          <div className="stay-body">
            <p className="journey-kicker">
              {stay.city} · {stay.dates} · {stay.nights} éjszaka
            </p>
            <h3>{stay.name}</h3>
            <p className="stay-area">
              📍 {stay.area} · {stay.rating}
            </p>

            {stay.warning && <p className="stay-warning">⚠️ {stay.warning}</p>}

            <ul className="chips">
              {stay.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <p className="stay-desc">{stay.description}</p>

            <h4>Felszereltség</h4>
            <ul className="chips chips-muted">
              {stay.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Tudnivalók</h4>
            <ul className="stay-rules">
              {stay.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>

            <div className="stay-footer">
              <div>
                {stay.totalPrice ? (
                  <>
                    <span className="price-value">{formatHuf(stay.totalPrice)}</span>
                    <span className="price-unit">
                      {' '}
                      összesen · {formatHuf(stay.totalPrice / TRAVELERS)} / fő
                    </span>
                  </>
                ) : (
                  <span className="price-unit">✅ Lefoglalva · ár hamarosan</span>
                )}
              </div>
              <div className="stay-links">
                <a className="button button-ghost" href={stay.mapUrl} target="_blank" rel="noreferrer">
                  Térkép ↗
                </a>
                <a className="button" href={stay.url} target="_blank" rel="noreferrer">
                  Airbnb ↗
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
