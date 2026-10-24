// Budapest local time (CET, UTC+1 in November)
export const TICKET_SALE = new Date('2026-11-06T18:00:00+01:00')

export const HOME_TIME_ZONE = 'Europe/Budapest'

export const CITIES = [
  { name: 'Budapest', flag: '🇭🇺', timeZone: 'Europe/Budapest', lat: 47.4979, lon: 19.0402 },
  { name: 'Shanghai', flag: '🇨🇳', timeZone: 'Asia/Shanghai', lat: 31.2304, lon: 121.4737 },
  { name: 'Phuket', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 7.8804, lon: 98.3923 },
  { name: 'Bangkok', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 13.7563, lon: 100.5018 },
]

// details: null until known → shown as "hamarosan"
export const FLIGHTS = [
  { from: 'Budapest', to: 'Shanghai', details: null },
  { from: 'Shanghai', to: 'Phuket', details: null },
  { from: 'Phuket', to: 'Bangkok', details: null },
  { from: 'Bangkok', to: 'Guangzhou', details: null },
  { from: 'Guangzhou', to: 'Budapest', details: null },
]

export const STAYS = [
  { city: 'Phuket', details: null },
  { city: 'Bangkok', details: null },
]
