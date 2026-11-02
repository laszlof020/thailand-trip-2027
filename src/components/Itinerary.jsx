import { ITINERARY } from '../tripData.js'

export default function Itinerary() {
  return (
    <ol className="timeline">
      {ITINERARY.map(({ date, place, items }) => (
        <li className="timeline-item" key={date}>
          <div className="timeline-date">{date}</div>
          <div className="timeline-body">
            <h3>{place}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
