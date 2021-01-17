const cityData = [
  {
    "country": "JP",
    "name": "Tokyo",
    "lat": "35.6895",
    "lng": "139.69171"
  },
  {
    "country": "ID",
    "name": "Jakarta",
    "lat": "-6.21462",
    "lng": "106.84513"
  },
  {
    "country": "IN",
    "name": "Delhi",
    "lat": "28.65195",
    "lng": "77.23149"
  },
  {
    "country": "PH",
    "name": "Manila",
    "lat": "14.6042",
    "lng": "120.9822"
  },
  {
    "country": "KR",
    "name": "Seoul",
    "lat": "37.566",
    "lng": "126.9784"
  },
  {
    "country": "CN",
    "name": "Shanghai",
    "lat": "31.22222",
    "lng": "121.45806"
  },
  {
    "country": "PK",
    "name": "Karachi",
    "lat": "24.8608",
    "lng": "67.0104"
  },
  {
    "country": "CN",
    "name": "Beijing",
    "lat": "39.9075",
    "lng": "116.39723"
  },
  {
    "country": "US",
    "name": "New York City",
    "lat": "40.71427",
    "lng": "-74.00597"
  },
  {
    "country": "CN",
    "name": "Guangzhou",
    "lat": "23.11667",
    "lng": "113.25"
  },
  {
    "country": "BR",
    "name": "Sao Paulo",
    "lat": "-23.5475",
    "lng": "-46.63611"
  },
  {
    "country": "MX",
    "name": "Mexico City",
    "lat": "19.42847",
    "lng": "-99.12766"
  },
  {
    "country": "IN",
    "name": "Mumbai",
    "lat": "19.07283",
    "lng": "72.88261"
  },
  {
    "country": "JP",
    "name": "Osaka",
    "lat": "34.69374",
    "lng": "135.50218"
  },
  {
    "country": "RU",
    "name": "Moscow",
    "lat": "55.75222",
    "lng": "37.61556"
  },
  {
    "country": "BD",
    "name": "Dhaka",
    "lat": "23.7104",
    "lng": "90.40744"
  },
  {
    "country": "CO",
    "name": "El Cairo",
    "lat": "4.76279",
    "lng": "-76.221"
  },
  {
    "country": "US",
    "name": "Los Angeles",
    "lat": "34.05223",
    "lng": "-118.24368"
  },
  {
    "country": "TH",
    "name": "Bangkok",
    "lat": "13.75398",
    "lng": "100.50144"
  },
  {
    "country": "IN",
    "name": "Kolkata",
    "lat": "22.56263",
    "lng": "88.36304"
  },
  {
    "country": "MX",
    "name": "Buenos Aires",
    "lat": "19.07499",
    "lng": "-102.17999"
  },
  {
    "country": "IR",
    "name": "Tehran",
    "lat": "35.69439",
    "lng": "51.42151"
  },
  {
    "country": "TR",
    "name": "Istanbul",
    "lat": "41.01384",
    "lng": "28.94966"
  },
  {
    "country": "NG",
    "name": "Lagos",
    "lat": "6.45407",
    "lng": "3.39467"
  },
  {
    "country": "CN",
    "name": "Shenzhen",
    "lat": "22.54554",
    "lng": "114.0683"
  },
  {
    "country": "BR",
    "name": "Rio de Janeiro",
    "lat": "-22.90642",
    "lng": "-43.18223"
  },
  {
    "country": "CD",
    "name": "Kinshasa",
    "lat": "-4.32758",
    "lng": "15.31357"
  },
  {
    "country": "CN",
    "name": "Tianjin",
    "lat": "39.14222",
    "lng": "117.17667"
  },
  {
    "country": "FR",
    "name": "Paris",
    "lat": "48.85341",
    "lng": "2.3488"
  },
  {
    "country": "PE",
    "name": "Lima",
    "lat": "-12.04318",
    "lng": "-77.02824"
  },
  {
    "country": "US",
    "name": "London",
    "lat": "35.32897",
    "lng": "-93.25296"
  },
  {
    "country": "US",
    "name": "Chicago",
    "lat": "41.85003",
    "lng": "-87.65005"
  },
  {
    "country": "HK",
    "name": "Hong Kong",
    "lat": "22.27832",
    "lng": "114.17469"
  },
  {
    "country": "IQ",
    "name": "Baghdad",
    "lat": "33.34058",
    "lng": "44.40088"
  },
  {
    "country": "CA",
    "name": "Toronto",
    "lat": "43.70011",
    "lng": "-79.4163"
  },
  {
    "country": "ES",
    "name": "Madrid",
    "lat": "40.4165",
    "lng": "-3.70256"
  },
  {
    "country": "US",
    "name": "San Francisco",
    "lat": "37.77493",
    "lng": "-122.41942"
  },
  {
    "country": "US",
    "name": "Miami",
    "lat": "35.69143",
    "lng": "-100.63819"
  },
  {
    "country": "SG",
    "name": "Singapore",
    "lat": "1.28967",
    "lng": "103.85007"
  },
  {
    "country": "US",
    "name": "Philadelphia",
    "lat": "32.77152",
    "lng": "-89.11673"
  },
  {
    "country": "IT",
    "name": "Milan",
    "lat": "45.46427",
    "lng": "9.18951"
  },
  {
    "country": "RU",
    "name": "Saint Petersburg",
    "lat": "59.93863",
    "lng": "30.31413"
  },
  {
    "country": "US",
    "name": "Atlanta",
    "lat": "33.749",
    "lng": "-84.38798"
  },
  {
    "country": "US",
    "name": "Washington",
    "lat": "33.73679",
    "lng": "-82.73931"
  },
  {
    "country": "ES",
    "name": "Barcelona",
    "lat": "41.38879",
    "lng": "2.15899"
  },
  {
    "country": "EG",
    "name": "Alexandria",
    "lat": "31.20176",
    "lng": "29.91582"
  },
  {
    "country": "US",
    "name": "Boston",
    "lat": "42.62895",
    "lng": "-78.73753"
  },
  {
    "country": "DE",
    "name": "Berlin",
    "lat": "52.52437",
    "lng": "13.41053"
  },
  {
    "country": "DE",
    "name": "Frankfurt",
    "lat": "50.11552",
    "lng": "8.68417"
  },
  {
    "country": "NL",
    "name": "Amsterdam",
    "lat": "52.37403",
    "lng": "4.88969"
  },
  {
    "country": "NL",
    "name": "Rotterdam",
    "lat": "51.9225",
    "lng": "4.47917"
  },
  {
    "country": "AU",
    "name": "Sydney",
    "lat": "-33.86785",
    "lng": "151.20732"
  },
  {
    "country": "AU",
    "name": "Melbourne",
    "lat": "-37.814",
    "lng": "144.96332"
  },
  {
    "country": "IT",
    "name": "Rome",
    "lat": "41.89193",
    "lng": "12.51133"
  },
  {
    "country": "ZA",
    "name": "Cape Town",
    "lat": "-33.92584",
    "lng": "18.42322"
  },
  {
    "country": "GR",
    "name": "Athens",
    "lat": "37.97945",
    "lng": "23.71622"
  },
  {
    "country": "GB",
    "name": "Belfast",
    "lat": "54.59682",
    "lng": "-5.92541"
  },
  {
    "country": "IE",
    "name": "Dublin",
    "lat": "53.33306",
    "lng": "-6.24889"
  },
  {
    "country": "GB",
    "name": "Manchester",
    "lat": "53.48095",
    "lng": "-2.23743"
  },
  {
    "country": "GB",
    "name": "Edinburgh",
    "lat": "55.95206",
    "lng": "-3.19648"
  },
  {
    "country": "GB",
    "name": "Glasgow",
    "lat": "55.86515",
    "lng": "-4.25763"
  },
  {
    "country": "GB",
    "name": "Newcastle",
    "lat": "54.97328",
    "lng": "-1.61396"
  },
  {
    "country": "PT",
    "name": "Lisbon",
    "lat": "38.71667",
    "lng": "-9.13333"
  },
  {
    "country": "RO",
    "name": "Bucharest",
    "lat": "44.43225",
    "lng": "26.10626"
  },
  {
    "country": "AT",
    "name": "Vienna",
    "lat": "48.20849",
    "lng": "16.37208"
  },
  {
    "country": "DE",
    "name": "Hamburg",
    "lat": "53.57532",
    "lng": "10.01534"
  },
  {
    "country": "HU",
    "name": "Budapest",
    "lat": "47.49801",
    "lng": "19.03991"
  },
  {
    "country": "DE",
    "name": "Munich",
    "lat": "48.13743",
    "lng": "11.57549"
  },
  {
    "country": "CZ",
    "name": "Prague",
    "lat": "50.08804",
    "lng": "14.42076"
  },
  {
    "country": "GB",
    "name": "Birmingham",
    "lat": "52.48142",
    "lng": "-1.89983"
  },
  {
    "country": "BG",
    "name": "Sofia",
    "lat": "42.69751",
    "lng": "23.32415"
  },
  {
    "country": "BE",
    "name": "Brussels",
    "lat": "50.85045",
    "lng": "4.34878"
  },
  {
    "country": "FR",
    "name": "Nice",
    "lat": "43.70313",
    "lng": "7.26608"
  },
  {
    "country": "GB",
    "name": "Liverpool",
    "lat": "53.41058",
    "lng": "-2.97794"
  },
  {
    "country": "IE",
    "name": "Cork",
    "lat": "51.89797",
    "lng": "-8.47061"
  },
  {
    "country": "FR",
    "name": "Nantes",
    "lat": "47.21725",
    "lng": "-1.55336"
  },
  {
    "country": "ES",
    "name": "Valencia",
    "lat": "39.46975",
    "lng": "-0.37739"
  },
]

export default cityData
