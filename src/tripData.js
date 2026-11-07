// Budapest local time (CET, UTC+1 in January)
export const DEPARTURE = new Date('2027-01-11T11:30:00+01:00')

export const HOME_TIME_ZONE = 'Europe/Budapest'

export const TRAVELERS = 3

export const CITIES = [
  { name: 'Budapest', flag: '🇭🇺', timeZone: 'Europe/Budapest', lat: 47.4979, lon: 19.0402 },
  { name: 'Shanghai', flag: '🇨🇳', timeZone: 'Asia/Shanghai', lat: 31.2304, lon: 121.4737 },
  { name: 'Phuket', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 7.8804, lon: 98.3923 },
  { name: 'Bangkok', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 13.7563, lon: 100.5018 },
]

// Each journey is one booking; totalPrice is for the whole group in HUF.
// Times are local to the airport.
export const JOURNEYS = [
  {
    id: 'outbound',
    title: 'Odaút',
    route: 'Budapest → Shanghai → Phuket',
    date: '2027. jan. 11., hétfő',
    airline: 'China Eastern · üzemeltető: Shanghai Airlines · turistaosztály',
    totalDuration: '28 óra 30 perc',
    totalPrice: 412330,
    status: 'booked',
    baggage: ['1 személyes tárgy', '1 × 8 kg kézipoggyász (20 × 40 × 55 cm)', '2 × 23 kg feladott poggyász'],
    note: 'Phuketre 22:00-kor érkezünk, a szállás a reptértől kb. 40–50 perc. Érdemes előre lefoglalni a transzfert (vagy Grabbel menni), és jelezni a házigazdának a késői érkezést.',
    segments: [
      {
        flight: 'MU8640',
        from: { code: 'BUD', name: 'Budapest', time: '11:30', date: 'jan. 11.' },
        to: { code: 'PVG', name: 'Shanghai Pudong', time: '05:25', date: 'jan. 12.' },
        duration: '10 óra 55 perc',
      },
      { layover: '11 óra 55 perc átszállás Shanghaiban (PVG)' },
      {
        flight: 'MU8647',
        from: { code: 'PVG', name: 'Shanghai Pudong', time: '17:20', date: 'jan. 12.' },
        to: { code: 'HKT', name: 'Phuket', time: '22:00', date: 'jan. 12.' },
        duration: '5 óra 40 perc',
      },
    ],
  },
  {
    id: 'domestic',
    title: 'Belföldi járat',
    route: 'Phuket → Bangkok',
    date: '2027. jan. 19., kedd',
    airline: 'Thai AirAsia',
    totalDuration: '1 óra 25 perc',
    totalPrice: 79616,
    status: 'booked',
    baggage: ['1 × 7 kg kézipoggyász (23 × 36 × 56 cm)', '1 × 15 kg feladott poggyász'],
    note: 'Ezen a járaton csak 15 kg-os feladott poggyász jár fejenként, odafelé viszont 2 × 23 kg-mal érkezünk. Vagy kevesebbet hozunk, vagy plusz poggyászt kell venni. A szállásról kb. 7:30-kor érdemes elindulni a reptérre.',
    segments: [
      {
        flight: 'FD4125',
        from: { code: 'HKT', name: 'Phuket', time: '10:00', date: 'jan. 19.' },
        to: { code: 'BKK', name: 'Bangkok Suvarnabhumi', time: '11:25', date: 'jan. 19.' },
        duration: '1 óra 25 perc',
      },
    ],
  },
  {
    id: 'return',
    title: 'Hazaút',
    route: 'Bangkok → Guangzhou → Budapest',
    date: '2027. jan. 25., hétfő',
    airline: 'China Southern · turistaosztály',
    totalDuration: '18 óra 25 perc',
    totalPrice: 306729,
    status: 'booked',
    baggage: ['1 személyes tárgy', '1 × 8 kg kézipoggyász (20 × 40 × 55 cm)', '1 × 23 kg feladott poggyász'],
    note: 'Hazafelé fejenként csak 1 feladott bőrönd van (odafelé 2), ezt pakoláskor érdemes figyelembe venni.',
    segments: [
      {
        flight: 'CZ8024',
        from: { code: 'BKK', name: 'Bangkok Suvarnabhumi', time: '18:05', date: 'jan. 25.' },
        to: { code: 'CAN', name: 'Guangzhou', time: '22:00', date: 'jan. 25.' },
        duration: '2 óra 55 perc',
      },
      { layover: '3 óra 30 perc átszállás Guangzhouban (CAN)' },
      {
        flight: 'CZ649',
        from: { code: 'CAN', name: 'Guangzhou', time: '01:30', date: 'jan. 26.' },
        to: { code: 'BUD', name: 'Budapest', time: '06:30', date: 'jan. 26.' },
        duration: '12 óra',
      },
    ],
  },
]

const photo = (path) => `https://a0.muscache.com/im/pictures/${path}?im_w=720`

// Booked stays; totalPrice is for the whole group in HUF
export const STAYS = [
  {
    id: 'phuket',
    city: 'Phuket',
    name: '2 hálószobás lakás Phuket Townban',
    area: 'Talat Nuea, Phuket Town',
    dates: '2027. jan. 12. – jan. 19.',
    nights: 7,
    totalPrice: 146505,
    url: 'https://www.airbnb.com/rooms/782895140339552502',
    mapUrl: 'https://maps.app.goo.gl/EAUwe45oB8H3kUtA7',
    photos: [
      'hosting/Hosting-782895140339552502/original/a6cf5cbc-c4e5-44f6-a9b6-4f254aec1bc6.jpeg',
      'hosting/Hosting-782895140339552502/original/beafffcb-e83a-465e-bf6b-98b2e8f594ea.jpeg',
      'miso/Hosting-782895140339552502/original/3a5c6cea-1183-4c4c-b231-bc4c7fa3ee53.jpeg',
      'miso/Hosting-782895140339552502/original/f277c357-2c8b-4eec-84d1-fb6ee07ccb49.jpeg',
      'hosting/Hosting-782895140339552502/original/788985ed-d555-49ea-94e2-87d34e8b48c7.jpeg',
    ].map(photo),
    facts: ['Teljes lakás, 60 m²', 'max. 5 vendég', '2 hálószoba + nappali', 'king és queen ágy', '1 fürdőszoba'],
    description:
      'Tágas lakás egy csendes környéken, Phuket Townban, 24 órás biztonsági szolgálattal. Kb. 2 km az óvárostól, 600 m a Suan Luang parktól, 10 perc a Monkey Hilltól és 15 perc az Ao Yon strandtól. A 7-Eleven és helyi éttermek 500 m-re vannak, az épület kapujánál robogót lehet bérelni.',
    amenities: ['Légkondi minden szobában', 'Felszerelt konyha', 'Mosógép', 'Wi-Fi', 'Ingyenes parkolás', 'Rezsi az árban'],
    rules: [
      'Bejelentkezés 14:00 után, kijelentkezés 11:00-ig',
      'A kulcsot az épület személyzete adja át. A késő esti (kb. 23:00 körüli) érkezést érdemes előre jelezni a házigazdának.',
      'Csendes időszak 22:00 és 7:00 között',
      'Bent tilos a dohányzás és az e-cigi (3 000 THB takarítási díj)',
      'Elveszett kulcskártyáért 500 THB-t számolnak fel',
    ],
    rating: '★ 4,73 (22 értékelés) · Superhost',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    name: 'Négyszintes sorház Pinklaóban',
    area: 'Bang Phlat (Pinklao), Bangkok',
    dates: '2027. jan. 19. – jan. 25.',
    nights: 6,
    totalPrice: 126450,
    url: 'https://www.airbnb.com/rooms/41051440',
    mapUrl: 'https://maps.app.goo.gl/gQUVnn5czCokbM677',
    photos: [
      '351b5d8f-7154-403a-8b99-6d6c21d238e4.jpg',
      '5e3cea1f-04a1-4fd5-9465-4f2d5bab697e.jpg',
      '16e0bd03-2ff8-486d-ab6b-45064a06acd5.jpg',
      '485db71f-daec-4efd-a59d-b2200f68377c.jpg',
      'd8c2c00c-0025-4917-b281-f2c8ad018d7c.jpg',
    ].map(photo),
    facts: ['Teljes sorház (4 szint)', 'max. 10 vendég', '3 hálószoba', '2 king + 1 egyszemélyes ágy', '2 fürdőszoba'],
    description:
      'Otthonos, négyszintes sorház Pinklaóban, a Chao Phraya folyó nyugati oldalán. A Central Pinklao bevásárlóközpont kb. 5 perc sétára van, a buszmegálló és a 7-Eleven 2 percre. Autóval vagy taxival kb. 10 perc a Királyi Palota, a Wat Pho és a Khaosan Road.',
    amenities: ['Légkondi a hálószobákban', 'Melegvíz minden fürdőben', 'Wi-Fi', 'Netflix', 'Mikró, vízforraló, hűtő', 'Kanapéágy'],
    rules: [
      'Bejelentkezés 15:00 után, kijelentkezés 11:00-ig (önálló bejutás kulcsdobozzal)',
      'Főzni nem lehet, csak egyszerű ételeket elkészíteni',
      'Parkolás nincs, a házban sok a lépcső',
      'A hazaút napján (jan. 25.) 11:00-kor ki kell jelentkezni, a gép 18:05-kor indul. A csomagokat érdemes megbeszélni a házigazdával.',
    ],
    rating: '★ 4,74 (42 értékelés)',
  },
]

export const DEADLINES = [
  { date: new Date('2026-11-06T18:00:00+01:00'), label: '✅ Repülőjegyek és szállások lefoglalva' },
  { date: new Date('2027-01-09T22:00:00+07:00'), label: '📝 TDAC kitöltése legkorábban (72 órával érkezés előtt)' },
  { date: DEPARTURE, label: '🛫 Indulás Budapestről' },
  { date: new Date('2027-01-26T06:30:00+01:00'), label: '🏠 Érkezés haza, Budapestre' },
]


export const ESSENTIALS = [
  {
    title: 'Útlevél',
    text: 'Legalább 6 hónapig érvényes útlevél kell az érkezéstől számítva, néhány üres oldallal.',
  },
  {
    title: 'Thaiföld: vízummentes belépés',
    text: 'Magyar állampolgárok jelenleg legfeljebb 30 napra vízum nélkül léphetnek be (2026. szeptember óta 60 helyett 30 nap). A mi 13 éjszakás thaiföldi tartózkodásunkhoz ez elég.',
  },
  {
    title: 'TDAC – digitális érkezési kártya',
    text: 'Kötelező és ingyenes. Érkezés előtt legfeljebb 72 órával kell kitölteni a tdac.immigration.go.th oldalon, tehát 2027. jan. 9. 22:00 és jan. 12. között (thai idő szerint).',
  },
  {
    title: 'Kína: átszállás',
    text: 'Shanghaiban és Guangzhouban is nemzetközi átszállás lesz, a repülőtér elhagyása nélkül ehhez 24 órán belül nem kell vízum. A magyarok kínai vízummentessége 2026. dec. 31-ig szól, indulás előtt érdemes ellenőrizni.',
  },
  {
    title: 'Készpénz (thai baht)',
    text: 'Taxihoz, piacokon és utcai ételstandoknál sokszor csak készpénzzel lehet fizetni. Érdemes kártyával készpénzt felvenni vagy helyben váltani.',
  },
  {
    title: 'Hasznos appok',
    text: 'Grab (taxi és ételrendelés), Google Maps, Google Fordító, és egy thai eSIM vagy helyi SIM-kártya a mobilnethez.',
  },
]

// Day-by-day plan; times are local. `events` are fixed bookings,
// `programs` are what we plan to do that day (add new ideas here).
export const TRIP_DAYS = [
  {
    date: '2027-01-11',
    place: 'travel',
    route: 'Budapest → Shanghai',
    events: [{ time: '11:30', text: 'Indulás Budapestről Shanghaiba (MU8640)' }],
    programs: [],
  },
  {
    date: '2027-01-12',
    place: 'travel',
    route: 'Shanghai → Phuket',
    events: [
      { time: '05:25', text: 'Érkezés Shanghaiba (PVG), 11 óra 55 perc átszállás' },
      { time: '17:20', text: 'Indulás Phuketre (MU8647)' },
      { time: '22:00', text: 'Érkezés Phuketre, transzfer a szállásra (kb. 40–50 perc)' },
    ],
    programs: [],
  },
  { date: '2027-01-13', place: 'phuket', events: [], programs: [] },
  { date: '2027-01-14', place: 'phuket', events: [], programs: [] },
  { date: '2027-01-15', place: 'phuket', events: [], programs: [] },
  { date: '2027-01-16', place: 'phuket', events: [], programs: [] },
  { date: '2027-01-17', place: 'phuket', events: [], programs: [] },
  { date: '2027-01-18', place: 'phuket', events: [], programs: [] },
  {
    date: '2027-01-19',
    place: 'travel',
    route: 'Phuket → Bangkok',
    events: [
      { time: '07:30', text: 'Kijelentkezés, indulás a phuketi reptérre' },
      { time: '10:00', text: 'Indulás Bangkokba (FD4125)' },
      { time: '11:25', text: 'Érkezés Bangkokba (BKK)' },
      { time: '15:00', text: 'Bejelentkezés a bangkoki szállásra' },
    ],
    programs: [],
  },
  { date: '2027-01-20', place: 'bangkok', events: [], programs: [] },
  { date: '2027-01-21', place: 'bangkok', events: [], programs: [] },
  { date: '2027-01-22', place: 'bangkok', events: [], programs: [] },
  { date: '2027-01-23', place: 'bangkok', events: [], programs: [] },
  { date: '2027-01-24', place: 'bangkok', events: [], programs: [] },
  {
    date: '2027-01-25',
    place: 'travel',
    route: 'Bangkok → Guangzhou',
    events: [
      { time: '11:00', text: 'Kijelentkezés a bangkoki szállásról' },
      { time: '18:05', text: 'Indulás Guangzhouba (CZ8024)' },
      { time: '22:00', text: 'Érkezés Guangzhouba (CAN), 3 óra 30 perc átszállás' },
    ],
    programs: [],
  },
  {
    date: '2027-01-26',
    place: 'travel',
    route: 'Guangzhou → Budapest',
    events: [
      { time: '01:30', text: 'Indulás Budapestre (CZ649)' },
      { time: '06:30', text: 'Érkezés haza, Budapestre 🏠' },
    ],
    programs: [],
  },
]
