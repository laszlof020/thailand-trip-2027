import Countdown from './components/Countdown.jsx'
import { TICKET_SALE } from './tripData.js'

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
      </main>

      <footer className="footer">Thailand Trip 2027 · ขอให้เดินทางปลอดภัย</footer>
    </div>
  )
}
