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
    note: 'Phuketre 22:00-kor érkezünk, a szállásra viszont csak 22:00-ig lehet bejelentkezni. A késői érkezést előre egyeztetni kell a házigazdával, és érdemes reptéri transzfert foglalni.',
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
    airline: 'Légitársaság és időpont hamarosan',
    totalDuration: 'kb. 1 óra 30 perc',
    totalPrice: 79616,
    status: 'booked',
    note: 'Járatszám és pontos időpont hamarosan.',
    segments: [
      {
        flight: 'hamarosan',
        from: { code: 'HKT', name: 'Phuket', time: '?', date: 'jan. 19.' },
        to: { code: 'BKK', name: 'Bangkok', time: '?', date: 'jan. 19.' },
        duration: 'kb. 1 óra 30 perc',
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

const phuketPhoto = (id) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1618651335140773205/original/${id}.jpeg?im_w=720`
const bangkokPhoto = (id) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1802134419598085469/original/${id}.jpeg?im_w=720`

// totalPrice is for the whole group in HUF
export const STAYS = [
  {
    id: 'phuket',
    city: 'Phuket',
    name: 'Sorház 3 hálószobával – Supalai City Hill',
    area: 'Ratsada, Phuket Town mellett',
    dates: '2027. jan. 12. – jan. 19.',
    nights: 7,
    totalPrice: 279634,
    priceNote: 'Az Airbnb által mutatott ár erre az időszakra, 3 főre.',
    warning:
      'Bejelentkezni csak 22:00-ig lehet, mi viszont 22:00-kor szállunk le Phuketen, és a reptérről még kb. 40–50 perc az út. Foglalás előtt egyeztetni kell a házigazdával a késői érkezésről.',
    url: 'https://www.airbnb.com/rooms/1618651335140773205?adults=3&check_in=2027-01-12&check_out=2027-01-19',
    photos: [
      '76112b3e-bede-4a2f-af9d-fde28413b03f',
      'fda5b0fe-1535-4162-824b-034ea3243078',
      '36462dff-6125-4cdf-8aeb-a8bd30bba26a',
      '7db5e98b-d715-4cab-9285-02b03fcb7d77',
      'c18d302f-124a-4d4e-9798-061a1e29e5b8',
    ].map(phuketPhoto),
    facts: ['Teljes sorház', 'max. 5 vendég', '3 hálószoba', '3 ágy', '3 fürdőszoba'],
    description:
      'Tágas, háromhálószobás sorház a Supalai City Hill lakóparkban, Ratsadában, Phuket Town közelében. Családoknak és baráti társaságoknak ajánlják, rövid és hosszabb tartózkodásra is. A strandok (pl. Patong, Kata) innen autóval vagy Grabbal érhetők el.',
    amenities: ['Légkondi', 'Konyha', 'Mosógép', 'Wi-Fi', 'Tévé', 'Külön munkaterület', 'Ingyenes parkolás'],
    rules: [
      'Bejelentkezés 15:00 – 22:00, kijelentkezés 12:00-ig',
      'A hirdetésben nincs bejelölve a meleg víz és az alapfelszereltség (törölköző, ágynemű), érdemes rákérdezni',
      'Az épületben lépcsőzni kell',
      'Ingyenes lemondás 2026. dec. 13-ig, részleges visszatérítés 2027. jan. 5-ig',
    ],
    rating: 'Még nincs értékelése (új hirdetés)',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    name: 'Blue House Banthat Thong',
    area: 'Pathum Wan, Bangkok belvárosa',
    dates: '2027. jan. 19. – jan. 25.',
    nights: 6,
    totalPrice: 186499,
    priceNote: 'Az Airbnb által mutatott ár erre az időszakra, 3 főre.',
    url: 'https://www.airbnb.com/rooms/1802134419598085469?adults=3&check_in=2027-01-19&check_out=2027-01-25',
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
      'Ingyenes lemondás 2027. jan. 14-ig',
      'Dohányozni csak a 3. emeleti erkélyen szabad (bírság 2 000 THB)',
      'Közlekedéshez Grab, Bolt vagy tuk-tuk ajánlott',
    ],
    rating: 'Új hirdetés · Superhost házigazda',
  },
]


export const DEADLINES = [
  { date: new Date('2026-11-06T18:00:00+01:00'), label: '✅ Repülőjegyek megvéve' },
  { date: new Date('2026-12-13T23:59:00+01:00'), label: '🏝️ Phuketi szállás: ingyenes lemondás határideje' },
  { date: new Date('2027-01-09T22:00:00+07:00'), label: '📝 TDAC kitöltése legkorábban (72 órával érkezés előtt)' },
  { date: new Date('2027-01-14T23:59:00+01:00'), label: '🏙️ Bangkoki szállás: ingyenes lemondás határideje' },
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
