import Budget from './components/Budget.jsx'
import CityWidgets from './components/CityWidgets.jsx'
import Countdown from './components/Countdown.jsx'
import Flights from './components/Flights.jsx'
import Stays from './components/Stays.jsx'
import { DEADLINES, ESSENTIALS, TICKET_SALE } from './tripData.js'

const dateFormatter = new Intl.DateTimeFormat('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Budapest',
})

const NAV = [
  ['repules', 'Repülés'],
  ['airbnb', 'Airbnb'],
  ['koltsegvetes', 'Költségvetés'],
  ['tudnivalok', 'Tudnivalók'],
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">🇹🇭 Közös utazás · 2027. január 13–28.</p>
        <h1>
          Thailand Trip <span>2027</span>
        </h1>
        <p className="lead">
          Itt gyűjtjük össze az utazással kapcsolatos összes fontos információt.
        </p>
        <nav className="nav" aria-label="Szekciók">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="card countdown-card" aria-labelledby="countdown-title">
          <h2 id="countdown-title">Visszaszámlálás a jegyvásárlásig</h2>
          <Countdown target={TICKET_SALE} />
        </section>

        <section className="card info-card" aria-labelledby="info-title">
          <h2 id="info-title">Fontos időpontok</h2>
          <dl className="info-list">
            {DEADLINES.map(({ date, label }) => (
              <div className="info-row" key={label}>
                <dt>{label}</dt>
                <dd>
                  <time dateTime={date.toISOString()}>{dateFormatter.format(date)}</time>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="card" aria-labelledby="cities-title">
          <h2 id="cities-title">Helyi idő és időjárás</h2>
          <CityWidgets />
        </section>

        <section className="card" id="repules" aria-labelledby="flights-title">
          <h2 id="flights-title">Repülés</h2>
          <Flights />
        </section>

        <section className="card" id="airbnb" aria-labelledby="stays-title">
          <h2 id="stays-title">Airbnb</h2>
          <Stays />
        </section>

        <section className="card" id="koltsegvetes" aria-labelledby="budget-title">
          <h2 id="budget-title">Költségvetés</h2>
          <Budget />
        </section>

        <section className="card" id="tudnivalok" aria-labelledby="essentials-title">
          <h2 id="essentials-title">Tudnivalók indulás előtt</h2>
          <div className="essentials">
            {ESSENTIALS.map(({ title, text }) => (
              <article className="essential" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="budget-footnote">
            A beutazási szabályok változhatnak, indulás előtt érdemes ellenőrizni őket a thai és a kínai
            hatóságok oldalán.
          </p>
        </section>
      </main>

      <footer className="footer">Thailand Trip 2027 · ขอให้เดินทางปลอดภัย</footer>
    </div>
  )
}
