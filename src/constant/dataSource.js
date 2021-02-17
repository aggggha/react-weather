const provinces = [
  "Aceh",
  "Bali",
  "BangkaBelitung",
  "Banten",
  "Bengkulu",
  "DIYogyakarta",
  "DKIJakarta",
  "Gorontalo",
  "Jambi",
  "JawaBarat",
  "JawaTengah",
  "JawaTimur",
  "KalimantanBarat",
  "KalimantanSelatan",
  "KalimantanTengah",
  "KalimantanTimur",
  "KalimantanUtara",
  "KepulauanRiau",
  "Lampung",
  "Maluku",
  "MalukuUtara",
  "NusaTenggaraBarat",
  "NusaTenggaraTimur",
  "Papua",
  "PapuaBarat",
  "Riau",
  "SulawesiBarat",
  "SulawesiSelatan",
  "SulawesiTengah",
  "SulawesiTenggara",
  "SulawesiUtara",
  "SumateraBarat",
  "SumateraSelatan",
  "SumateraUtara"
];

const weatherCodes = {
  0: "Cerah",
  1: "Cerah Berawan",
  2: "Cerah Berawan",
  3: "Berawan",
  4: "Berawan Tebal",
  5: "Udara Kabur",
  100: "Cerah",
  101: "Cerah Berawan",
  102: "Cerah Berawan",
  103: "Berawan",
  104: "Berawan Tebal",
  10: "Asap",
  45: "Berkabut",
  60: "Hujan Ringan",
  61: "Hujan Sedang",
  63: "Hujan Lebat",
  80: "Hujan Lokal",
  95: "Hujan Petir",
  97: "Hujan Petir"
};

const miniCardCodes = ['Temperatur', 'Kelembaban', 'Arah Angin', 'Kecepatan Angin'];

// const windDirections = {
//   'N': 'North',
//   'NNE': 'North-Northeast',
//   'NE': 'Northeast',
//   'ENE': 'East-Northeast',
//   'E': 'East',
//   'ESE': 'East-Southeast',
//   'SE': 'Southeast',
//   'SSE': 'South-Southeast',
//   'S': 'South',
//   'SSW': 'South-Southwest',
//   'SW': 'Southwest',
//   'WSW': 'West-Southwest',
//   'W': 'West',
//   'WNW': 'West-Northwest',
//   'NW': 'Northwest',
//   'NNW': 'North-Northwest',
//   'VARIABLE': 'berubah-ubah'
// };

const options = { // Parser options
  attributeNamePrefix: "",
  ignoreAttributes: false,
  textNodeName: "name"
};

const URLEndpoint = "https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-";

export { provinces, URLEndpoint, weatherCodes, options, miniCardCodes };