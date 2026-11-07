import { formatHuf } from '../format.js'
import { JOURNEYS, STAYS, TRAVELERS } from '../tripData.js'

const flights = JOURNEYS.map((journey) => ({
  label: journey.route,
  perPerson: journey.totalPrice / TRAVELERS,
}))

const stays = STAYS.map((stay) => ({
  label: `${stay.city} (${stay.nights} éj)`,
  perPerson: stay.totalPrice ? stay.totalPrice / TRAVELERS : null,
  note: stay.totalPrice
    ? `${formatHuf(stay.totalPrice)} összesen, ${TRAVELERS} főre osztva`
    : 'lefoglalva, ár hamarosan',
}))

const sum = (rows) => rows.reduce((total, row) => total + (row.perPerson ?? 0), 0)
const money = (value) => (value === null ? 'hamarosan' : formatHuf(value))

function Group({ title, rows }) {
  const subtotal = sum(rows)
  return (
    <>
      <tr className="budget-group">
        <th colSpan={3}>{title}</th>
      </tr>
      {rows.map((row) => (
        <tr key={row.label}>
          <th scope="row">
            {row.label}
            {row.note && <span className="budget-note">{row.note}</span>}
          </th>
          <td>{money(row.perPerson)}</td>
          <td>{money(row.perPerson === null ? null : row.perPerson * TRAVELERS)}</td>
        </tr>
      ))}
      <tr className="budget-subtotal">
        <th scope="row">Részösszeg</th>
        <td>{formatHuf(subtotal)}</td>
        <td>{formatHuf(subtotal * TRAVELERS)}</td>
      </tr>
    </>
  )
}

export default function Budget() {
  const flightTotal = sum(flights)
  const stayTotal = sum(stays)
  const total = flightTotal + stayTotal

  return (
    <>
      <div className="budget-summary">
        <div className="budget-stat">
          <span className="budget-stat-label">Összesen / fő</span>
          <span className="budget-stat-value">{formatHuf(total)}</span>
        </div>
        <div className="budget-stat">
          <span className="budget-stat-label">Ebből repülés / fő</span>
          <span className="budget-stat-value">{formatHuf(flightTotal)}</span>
        </div>
        <div className="budget-stat">
          <span className="budget-stat-label">Ebből szállás / fő</span>
          <span className="budget-stat-value">{formatHuf(stayTotal)}</span>
        </div>
      </div>

      <div className="table-wrap">
        <table className="budget-table">
          <thead>
            <tr>
              <th scope="col">Tétel</th>
              <th scope="col">/ fő</th>
              <th scope="col">{TRAVELERS} fő</th>
            </tr>
          </thead>
          <tbody>
            <Group title="Repülés" rows={flights} />
            <Group title="Szállás" rows={stays} />
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Mindösszesen</th>
              <td>{formatHuf(total)}</td>
              <td>{formatHuf(total * TRAVELERS)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="budget-footnote">
        Minden ár a végleges foglalás szerinti, a teljes csoportra fizetett összeg {TRAVELERS} főre
        osztva.
      </p>
    </>
  )
}
