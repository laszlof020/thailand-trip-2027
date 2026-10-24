import CityWidgets from './components/CityWidgets.jsx'
import Countdown from './components/Countdown.jsx'
import { FLIGHTS, STAYS, TICKET_SALE } from './tripData.js'

const dateFormatter = new Intl.DateTimeFormat('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Budapest',
})

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">🇹🇭 Közös utazás · 2027</p>
        <h1>
          Thailand Trip <span>2027</span>
        </h1>
        <p className="lead">
          Itt gyűjtjük össze az utazással kapcsolatos összes fontos információt.
        </p>
      </header>

      <main>
        <section className="card countdown-card" aria-labelledby="countdown-title">
          <h2 id="countdown-title">Visszaszámlálás a jegyvásárlásig</h2>
          <Countdown target={TICKET_SALE} />
        </section>

        <section className="card info-card" aria-labelledby="info-title">
          <h2 id="info-title">Fontos időpontok</h2>
          <dl className="info-list">
            <div className="info-row">
              <dt>✈️ Jegyvásárlás időpontja</dt>
              <dd>
                <time dateTime={TICKET_SALE.toISOString()}>
                  {dateFormatter.format(TICKET_SALE)}
                </time>
              </dd>
            </div>
          </dl>
        </section>

        <section className="card" aria-labelledby="cities-title">
          <h2 id="cities-title">Helyi idő és időjárás</h2>
          <CityWidgets />
        </section>

        <section className="card" aria-labelledby="flights-title">
          <h2 id="flights-title">Repülés</h2>
          <ol className="trip-list">
            {FLIGHTS.map(({ from, to, details }, i) => (
              <li className="trip-item" key={`${from}-${to}`}>
                <span className="trip-step">{i + 1}</span>
                <span className="trip-name">
                  {from} <span className="trip-arrow" aria-label="–">✈</span> {to}
                </span>
                <span className={details ? 'trip-details' : 'trip-details pending'}>
                  {details ?? 'Részletek hamarosan'}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="card" aria-labelledby="stays-title">
          <h2 id="stays-title">Airbnb</h2>
          <ul className="trip-list">
            {STAYS.map(({ city, details }) => (
              <li className="trip-item" key={city}>
                <span className="trip-step" aria-hidden="true">🏠</span>
                <span className="trip-name">{city}</span>
                <span className={details ? 'trip-details' : 'trip-details pending'}>
                  {details ?? 'Részletek hamarosan'}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">Thailand Trip 2027 · ขอให้เดินทางปลอดภัย</footer>
    </div>
  )
}
