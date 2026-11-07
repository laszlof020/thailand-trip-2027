import { useEffect, useRef, useState } from 'react'
import Budget from './components/Budget.jsx'
import CityWidgets from './components/CityWidgets.jsx'
import Countdown from './components/Countdown.jsx'
import Flights from './components/Flights.jsx'
import Stays from './components/Stays.jsx'
import { DEADLINES, DEPARTURE, ESSENTIALS } from './tripData.js'

const dateFormatter = new Intl.DateTimeFormat('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Budapest',
})

function Home() {
  return (
    <>
      <header className="hero">
        <p className="eyebrow">🇹🇭 Közös utazás · 2027. január 11–26.</p>
        <h1>
          Thailand Trip <span>2027</span>
        </h1>
        <p className="lead">
          Itt gyűjtjük össze az utazással kapcsolatos összes fontos információt.
        </p>
      </header>

      <main>
        <section className="card countdown-card" aria-labelledby="countdown-title">
          <h2 id="countdown-title">Visszaszámlálás az indulásig</h2>
          <Countdown target={DEPARTURE} />
        </section>

        <section className="card info-card" aria-labelledby="info-title">
          <h2 id="info-title">Fontos időpontok</h2>
          <dl className="info-list">
            {[...DEADLINES].sort((a, b) => a.date - b.date).map(({ date, label }) => (
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
      </main>
    </>
  )
}

function Essentials() {
  return (
    <>
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
    </>
  )
}

function Planner() {
  return (
    <p className="placeholder">
      🗺️ Itt fogjuk közösen megtervezni a programokat és a napokat. Hamarosan!
    </p>
  )
}

const PAGES = [
  { path: 'tervezo', label: 'Tervező', title: 'Tervező', Content: Planner },
  { path: 'repules', label: 'Repülés', title: 'Repülés', Content: Flights },
  { path: 'airbnb', label: 'Airbnb', title: 'Airbnb', Content: Stays },
  { path: 'koltsegvetes', label: 'Költségvetés', title: 'Költségvetés', Content: Budget },
  { path: 'tudnivalok', label: 'Tudnivalók', title: 'Tudnivalók indulás előtt', Content: Essentials },
]

// Hash routes (#/repules) work on GitHub Pages without server rewrites
function currentPath() {
  return window.location.hash.replace(/^#\/?/, '')
}

function useHashPath() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return path
}

function Navbar({ path }) {
  const linksRef = useRef(null)

  // On narrow screens the links scroll sideways; keep the active one visible
  useEffect(() => {
    const active = linksRef.current?.querySelector('[aria-current="page"]')
    active?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [path])

  return (
    <nav className="navbar" aria-label="Fő navigáció">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#/" aria-current={path === '' ? 'page' : undefined}>
          🇹🇭 Thailand Trip <span>2027</span>
        </a>
        <div className="navbar-links" ref={linksRef}>
          {PAGES.map((page) => (
            <a
              key={page.path}
              href={`#/${page.path}`}
              aria-current={path === page.path ? 'page' : undefined}
            >
              {page.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  const path = useHashPath()
  const page = PAGES.find((p) => p.path === path)

  useEffect(() => {
    document.title = page ? `${page.title} · Thailand Trip 2027` : 'Thailand Trip 2027'
  }, [page])

  return (
    <>
      <Navbar path={page ? page.path : ''} />
      <div className="page">
        {page ? (
          <main>
            <h1 className="page-title">{page.title}</h1>
            <section className="card">
              <page.Content />
            </section>
          </main>
        ) : (
          <Home />
        )}
        <footer className="footer">Thailand Trip 2027 · ขอให้เดินทางปลอดภัย</footer>
      </div>
    </>
  )
}
