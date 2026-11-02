// Budapest local time (CET, UTC+1 in November)
export const TICKET_SALE = new Date('2026-11-06T18:00:00+01:00')

export const HOME_TIME_ZONE = 'Europe/Budapest'

export const TRAVELERS = 3

export const CITIES = [
  { name: 'Budapest', flag: '🇭🇺', timeZone: 'Europe/Budapest', lat: 47.4979, lon: 19.0402 },
  { name: 'Shanghai', flag: '🇨🇳', timeZone: 'Asia/Shanghai', lat: 31.2304, lon: 121.4737 },
  { name: 'Phuket', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 7.8804, lon: 98.3923 },
  { name: 'Bangkok', flag: '🇹🇭', timeZone: 'Asia/Bangkok', lat: 13.7563, lon: 100.5018 },
]

// Each journey is one booking; price is per person in HUF.
// Times are local to the airport.
export const JOURNEYS = [
  {
    id: 'outbound',
    title: 'Odaút',
    route: 'Budapest → Shanghai → Phuket',
    date: '2027. jan. 13., szerda',
    airline: 'China Eastern · üzemeltető: Shanghai Airlines',
    totalDuration: '21 óra',
    pricePerPerson: 130000,
    status: 'planned',
    segments: [
      {
        flight: 'MU8640',
        from: { code: 'BUD', name: 'Budapest', time: '11:30', date: 'jan. 13.' },
        to: { code: 'PVG', name: 'Shanghai Pudong', time: '05:25', date: 'jan. 14.' },
        duration: '10 óra 55 perc',
      },
      { layover: '4 óra 35 perc átszállás Shanghaiban (PVG)' },
      {
        flight: 'MU621',
        from: { code: 'PVG', name: 'Shanghai Pudong', time: '10:00', date: 'jan. 14.' },
        to: { code: 'HKT', name: 'Phuket', time: '14:30', date: 'jan. 14.' },
        duration: '5 óra 30 perc',
      },
    ],
  },
  {
    id: 'domestic',
    title: 'Belföldi járat',
    route: 'Phuket → Bangkok',
    date: '2027. jan. 20., szerda',
    airline: 'Légitársaság és időpont hamarosan',
    totalDuration: 'kb. 1 óra 30 perc',
    pricePerPerson: 10000,
    priceIsEstimate: true,
    status: 'tbd',
    segments: [
      {
        flight: 'hamarosan',
        from: { code: 'HKT', name: 'Phuket', time: '?', date: 'jan. 20.' },
        to: { code: 'BKK', name: 'Bangkok', time: '?', date: 'jan. 20.' },
        duration: 'kb. 1 óra 30 perc',
      },
    ],
  },
  {
    id: 'return',
    title: 'Hazaút',
    route: 'Bangkok → Guangzhou → Budapest',
    date: '2027. jan. 27., szerda',
    airline: 'China Southern',
    totalDuration: '21 óra 25 perc',
    pricePerPerson: 103000,
    status: 'planned',
    segments: [
      {
        flight: 'CZ5096',
        from: { code: 'BKK', name: 'Bangkok Suvarnabhumi', time: '15:05', date: 'jan. 27.' },
        to: { code: 'CAN', name: 'Guangzhou', time: '18:55', date: 'jan. 27.' },
        duration: '2 óra 50 perc',
      },
      { layover: '6 óra 35 perc átszállás Guangzhouban (CAN)' },
      {
        flight: 'CZ649',
        from: { code: 'CAN', name: 'Guangzhou', time: '01:30', date: 'jan. 28.' },
        to: { code: 'BUD', name: 'Budapest', time: '06:30', date: 'jan. 28.' },
        duration: '12 óra',
      },
    ],
  },
]

const phuketPhoto = (id) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1135447160267369358/original/${id}.jpeg?im_w=720`
const bangkokPhoto = (id) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1802134419598085469/original/${id}.jpeg?im_w=720`

// totalPrice is for the whole group in HUF
export const STAYS = [
  {
    id: 'phuket',
    city: 'Phuket',
    name: 'Phuket Pool Villa 3',
    area: 'Rawai, Phuket déli része',
    dates: '2027. jan. 14. – jan. 20.',
    nights: 6,
    totalPrice: 280000,
    priceNote: 'Az Airbnb jelenleg 276 751 Ft-ot mutat erre az időszakra.',
    url: 'https://www.airbnb.com/rooms/1135447160267369358?adults=3&check_in=2027-01-14&check_out=2027-01-20',
    photos: [
      'c2024afa-f824-4a5a-81b6-d4186c403a7c',
      '0c34a1ad-02ad-41af-885c-e6b6b9c0f219',
      '71948b78-1eea-4298-aa3b-6e5d223aa90b',
      '1b06e500-e8a2-450c-b94d-fa376ac47f76',
      '79108ad7-9e42-4b0f-a488-4a81b8b866f8',
    ].map(phuketPhoto),
    facts: ['Teljes villa', 'max. 6 vendég', '3 hálószoba', '3 queen ágy', '3 fürdőszoba'],
    description:
      'Modern, teljesen berendezett villa saját medencével és jakuzzival. Felszerelt konyha, nappali okostévével, légkondi minden szobában. Kb. 5 percre a Chalong mólótól (szigettúrák), 10 percre a Rawai, Yanui és Nai Harn strandtól, 15 percre a Promthep-foktól, ahol Phuket legszebb naplementéje látható.',
    amenities: ['Saját medence', 'Jakuzzi', 'Légkondi', 'Konyha', 'Wi-Fi', 'Ingyenes parkolás', 'Kilátás a tengerre'],
    rules: [
      'Bejelentkezés 15:00 – 24:00, kijelentkezés 13:00-ig',
      'Áram külön fizetendő: 6 THB / kWh',
      'Kaució: 500 THB / éj (6 éjre 3 000 THB), készpénzben érkezéskor, távozáskor visszajár',
      'Reptéri transzfer kérhető: 700 THB (szedán), 800 THB (SUV), 1 000 THB (kisbusz)',
      'Ingyenes lemondás 2026. dec. 15-ig, részleges visszatérítés 2027. jan. 7-ig',
      'Bent tilos a dohányzás',
    ],
    rating: 'Még nincs értékelése (új hirdetés)',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    name: 'Blue House Banthat Thong',
    area: 'Pathum Wan, Bangkok belvárosa',
    dates: '2027. jan. 20. – jan. 27.',
    nights: 7,
    totalPrice: 243443,
    priceNote: 'Az Airbnb által mutatott ár erre az időszakra, 3 főre (heti kedvezménnyel).',
    url: 'https://www.airbnb.com/rooms/1802134419598085469?adults=3&check_in=2027-01-20&check_out=2027-01-27',
    photos: [
      '12943434-60c0-4896-8002-7e8e3f6a9202',
      '595b64b8-58a3-40d8-aa38-32d171cf33f1',
      'f9493fa8-637c-4631-8eb6-e01df4cd9f26',
      'bab2b5f4-78e4-4799-8b3a-1697b5649a79',
      'd1b38690-46d9-42da-9d6f-10d6fccf4c5d',
    ].map(bangkokPhoto),
    facts: ['Teljes ház (3 szint)', 'max. 11 vendég', '3 hálószoba', '6 ágy', '3 fürdőszoba'],
    description:
      'Színes, loft hangulatú háromszintes ház egy csendes mellékutcában, a Wat Boromniwas környékén. Pár percre van a Banthat Thong út híres utcai ételstandjaitól, és kb. 10 percre az MBK-tól, a Siam Paragontól és a National Stadium BTS-állomástól. A földszinten nappali, nagy közös asztal, konyha és mosó-szárítógép van, fent a hálószobák és két erkély.',
    amenities: ['Számkódos önálló bejutás', 'Légkondi minden szobában', 'Felszerelt konyha', 'Mosó- és szárítógép', 'Gyors Wi-Fi', 'Okostévé', 'Erkély'],
    rules: [
      'Bejelentkezés 14:00 után, kijelentkezés 11:00-ig',
      'Csendes időszak 21:30 után, a házban nem lehet bulizni',
      'Érkezéskor útlevelet kell mutatni (thai TM.30 bejelentés)',
      'Ingyenes lemondás 2027. jan. 15-ig, utána részleges visszatérítés az érkezés napjáig',
      'Dohányozni csak a 3. emeleti erkélyen szabad (bírság 2 000 THB)',
      'Közlekedéshez Grab, Bolt vagy tuk-tuk ajánlott',
    ],
    rating: 'Új hirdetés · Superhost házigazda',
  },
]

export const ITINERARY = [
  {
    date: '2027. jan. 13., szerda',
    place: 'Budapest',
    items: ['11:30 – Indulás Budapestről (MU8640)'],
  },
  {
    date: '2027. jan. 14., csütörtök',
    place: 'Shanghai → Phuket',
    items: [
      '05:25 – Érkezés Shanghaiba (PVG), 4 óra 35 perc átszállás',
      '10:00 – Tovább Phuketre (MU621)',
      '14:30 – Érkezés Phuketre, 15:00-tól bejelentkezés a villába',
    ],
  },
  {
    date: 'jan. 14. – jan. 20.',
    place: 'Phuket · 6 éjszaka',
    items: ['Strandok: Rawai, Yanui, Nai Harn', 'Szigettúra a Chalong mólóról', 'Naplemente a Promthep-foknál'],
  },
  {
    date: '2027. jan. 20., szerda',
    place: 'Phuket → Bangkok',
    items: ['13:00-ig kijelentkezés', 'Belföldi járat Bangkokba (időpont hamarosan)', '14:00 után bejelentkezés Bangkokban'],
  },
  {
    date: 'jan. 20. – jan. 27.',
    place: 'Bangkok · 7 éjszaka',
    items: [
      'Utcai ételek a Banthat Thong úton',
      'Siam Paragon és MBK bevásárlóközpont',
      'Chatuchak hétvégi piac (jan. 23–24., szombat–vasárnap)',
    ],
  },
  {
    date: '2027. jan. 27., szerda',
    place: 'Bangkok → Guangzhou',
    items: ['11:00-ig kijelentkezés', '15:05 – Indulás Bangkokból (CZ5096)', '18:55 – Érkezés Guangzhouba, 6 óra 35 perc átszállás'],
  },
  {
    date: '2027. jan. 28., csütörtök',
    place: 'Guangzhou → Budapest',
    items: ['01:30 – Indulás Guangzhouból (CZ649)', '06:30 – Érkezés Budapestre 🏠'],
  },
]

export const DEADLINES = [
  { date: TICKET_SALE, label: '✈️ Jegyvásárlás időpontja' },
  { date: new Date('2026-12-15T23:59:00+01:00'), label: '🏝️ Phuketi villa: ingyenes lemondás határideje' },
  { date: new Date('2027-01-15T23:59:00+01:00'), label: '🏙️ Bangkoki szállás: ingyenes lemondás határideje' },
  { date: new Date('2027-01-11T14:30:00+07:00'), label: '📝 TDAC kitöltése legkorábban (72 órával érkezés előtt)' },
  { date: new Date('2027-01-13T11:30:00+01:00'), label: '🛫 Indulás Budapestről' },
]


export const ESSENTIALS = [
  {
    title: 'Útlevél',
    text: 'Legalább 6 hónapig érvényes útlevél kell az érkezéstől számítva, néhány üres oldallal.',
  },
  {
    title: 'Thaiföld: vízummentes belépés',
    text: 'Magyar állampolgárok jelenleg legfeljebb 30 napra vízum nélkül léphetnek be (2026. szeptember óta 60 helyett 30 nap). A mi 14 napos utunkhoz ez elég.',
  },
  {
    title: 'TDAC – digitális érkezési kártya',
    text: 'Kötelező és ingyenes. Érkezés előtt legfeljebb 72 órával kell kitölteni a tdac.immigration.go.th oldalon, tehát 2027. jan. 11. és 14. között.',
  },
  {
    title: 'Kína: átszállás',
    text: 'Shanghaiban és Guangzhouban is nemzetközi átszállás lesz, a repülőtér elhagyása nélkül ehhez 24 órán belül nem kell vízum. A magyarok kínai vízummentessége 2026. dec. 31-ig szól, indulás előtt érdemes ellenőrizni.',
  },
  {
    title: 'Készpénz (thai baht)',
    text: 'A phuketi kauciót (3 000 THB) és az áramot készpénzben kell fizetni. Érdemes kártyával készpénzt felvenni vagy helyben váltani.',
  },
  {
    title: 'Hasznos appok',
    text: 'Grab (taxi és ételrendelés), Google Maps, Google Fordító, és egy thai eSIM vagy helyi SIM-kártya a mobilnethez.',
  },
]
