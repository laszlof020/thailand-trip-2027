import { formatHuf } from '../format.js'
import { ESTIMATES, JOURNEYS, STAYS, TRAVELERS } from '../tripData.js'

const planned = [
  ...JOURNEYS.map((journey) => ({
    label: `Repülés: ${journey.route}`,
    perPerson: journey.pricePerPerson,
    note: journey.priceIsEstimate ? 'becsült ár' : null,
  })),
  ...STAYS.map((stay) => ({
    label: `Szállás: ${stay.city} (${stay.nights} éj)`,
    perPerson: stay.totalPrice / TRAVELERS,
    note: `${formatHuf(stay.totalPrice)} összesen, ${TRAVELERS} főre osztva`,
  })),
]

const sum = (rows) => rows.reduce((total, row) => total + row.perPerson, 0)

function Rows({ rows }) {
  return rows.map((row) => (
    <tr key={row.label}>
      <th scope="row">
        {row.label}
        {row.note && <span className="budget-note">{row.note}</span>}
      </th>
      <td>{formatHuf(row.perPerson)}</td>
      <td>{formatHuf(row.perPerson * TRAVELERS)}</td>
    </tr>
  ))
}

export default function Budget() {
  const plannedTotal = sum(planned)
  const estimateTotal = sum(ESTIMATES)
  const total = plannedTotal + estimateTotal

  return (
    <>
      <div className="budget-summary">
        <div className="budget-stat">
          <span className="budget-stat-label">Összesen / fő</span>
          <span className="budget-stat-value">{formatHuf(total)}</span>
        </div>
        <div className="budget-stat">
          <span className="budget-stat-label">Összesen ({TRAVELERS} fő)</span>
          <span className="budget-stat-value">{formatHuf(total * TRAVELERS)}</span>
        </div>
        <div className="budget-stat">
          <span className="budget-stat-label">Ebből repülés + szállás / fő</span>
          <span className="budget-stat-value">{formatHuf(plannedTotal)}</span>
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
            <tr className="budget-group">
              <th colSpan={3}>Repülés és szállás</th>
            </tr>
            <Rows rows={planned} />
            <tr className="budget-subtotal">
              <th scope="row">Részösszeg</th>
              <td>{formatHuf(plannedTotal)}</td>
              <td>{formatHuf(plannedTotal * TRAVELERS)}</td>
            </tr>
            <tr className="budget-group">
              <th colSpan={3}>Helyszíni költségek (becslés)</th>
            </tr>
            <Rows rows={ESTIMATES} />
            <tr className="budget-subtotal">
              <th scope="row">Részösszeg</th>
              <td>{formatHuf(estimateTotal)}</td>
              <td>{formatHuf(estimateTotal * TRAVELERS)}</td>
            </tr>
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
        A repülőjegyárak fejenként, az Airbnb-árak a teljes szállásra értendők. A helyszíni költségek
        becslések, a pontos összeg az utazás során derül ki.
      </p>
    </>
  )
}
