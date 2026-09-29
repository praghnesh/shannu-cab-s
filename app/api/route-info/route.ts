import { NextResponse } from 'next/server';

const cityCoords: { [key: string]: [number, number] } = {
  // Pincode prefixes
  "500": [17.3850, 78.4867], // Hyderabad
  "501": [17.3850, 78.4867],
  "502": [17.3850, 78.4867],
  "520": [16.5062, 80.6480], // Vijayawada
  "521": [16.5062, 80.6480],
  "522": [16.3067, 80.4365], // Guntur
  "530": [17.6868, 83.2185], // Visakhapatnam
  "531": [17.6868, 83.2185],
  "532": [17.6868, 83.2185],
  "535": [17.6868, 83.2185],
  "517": [13.6288, 79.4192], // Tirupati
  "533": [17.0005, 81.8040], // Rajahmundry / Kakinada
  "534": [16.7107, 81.1035], // Eluru / Bhimavaram
  "506": [17.9689, 79.5941], // Warangal
  "507": [17.2473, 80.1514], // Khammam
  "524": [14.4426, 79.9865], // Nellore
  "518": [15.8281, 78.0373], // Kurnool
  "515": [14.6819, 77.6006], // Anantapur
  "560": [12.9716, 77.5946], // Bangalore
  "600": [13.0827, 80.2707], // Chennai

  // City names
  "hyderabad": [17.3850, 78.4867],
  "shamshabad airport": [17.2403, 78.4294],
  "vijayawada": [16.5062, 80.6480],
  "guntur": [16.3067, 80.4365],
  "visakhapatnam": [17.6868, 83.2185],
  "vizag": [17.6868, 83.2185],
  "machilipatnam": [16.1875, 81.1389],
  "rajahmundry": [17.0005, 81.8040],
  "kakinada": [16.9891, 82.2475],
  "tirupati": [13.6288, 79.4192],
  "warangal": [17.9689, 79.5941],
  "nizamabad": [18.6725, 78.0941],
  "khammam": [17.2473, 80.1514],
  "karimnagar": [18.4386, 79.1288],
  "nellore": [14.4426, 79.9865],
  "kurnool": [15.8281, 78.0373],
  "anantapur": [14.6819, 77.6006],
  "chittoor": [13.2172, 79.1003],
  "eluru": [16.7107, 81.1035],
  "ongole": [15.5057, 80.0499],
  "bangalore": [12.9716, 77.5946],
  "chennai": [13.0827, 80.2707],
  "mumbai": [19.0760, 72.8777],
  "pune": [18.5204, 73.8567],
  "delhi": [28.6139, 77.2090],
  "amaravati": [16.5131, 80.5165],
  "srisailam": [16.0748, 78.8687],
  "bhimavaram": [16.5449, 81.5212],
  "tenali": [16.2430, 80.6400],
  "proddatur": [14.7526, 78.5522],
  "adoni": [15.6322, 77.2728],
  "madanapalle": [13.5504, 78.5029]
};

function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightDistance = R * c;
  return Math.max(15, Math.round(straightDistance * 1.28));
}

function findCityCoords(inputName: string): [number, number] | null {
  if (!inputName) return null;
  const clean = inputName.toLowerCase().trim();
  
  // Check pincode match (first 3 digits)
  const pinMatch = clean.match(/\b\d{3,6}\b/);
  if (pinMatch) {
    const prefix3 = pinMatch[0].substring(0, 3);
    if (cityCoords[prefix3]) {
      return cityCoords[prefix3];
    }
  }

  // Check city name match
  for (const key of Object.keys(cityCoords)) {
    if (clean.includes(key) || key.includes(clean)) {
      return cityCoords[key];
    }
  }
  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  if (!from || !to) {
    return NextResponse.json({ distance: '275 km' });
  }

  const c1 = findCityCoords(from);
  const c2 = findCityCoords(to);

  if (c1 && c2) {
    const km = calculateHaversineDistance(c1[0], c1[1], c2[0], c2[1]);
    return NextResponse.json({ distance: `${km} km` });
  }

  // Fallback API lookup if cities are not in offline dictionary
  try {
    const enhanceQuery = (q: string) => {
      let query = q.toLowerCase();
      if (query.includes('vizag')) query = 'Visakhapatnam';
      return `${query}, India`;
    };

    const [fromRes, toRes] = await Promise.all([
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enhanceQuery(from))}&limit=1`,
        { headers: { 'User-Agent': 'FastCarTravels/1.0' }, next: { revalidate: 86400 } }
      ),
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enhanceQuery(to))}&limit=1`,
        { headers: { 'User-Agent': 'FastCarTravels/1.0' }, next: { revalidate: 86400 } }
      )
    ]);

    const fromData = await fromRes.json();
    const toData = await toRes.json();

    if (fromData[0] && toData[0]) {
      const km = calculateHaversineDistance(
        parseFloat(fromData[0].lat),
        parseFloat(fromData[0].lon),
        parseFloat(toData[0].lat),
        parseFloat(toData[0].lon)
      );
      return NextResponse.json({ distance: `${km} km` });
    }
  } catch (err) {
    console.error("Route calculation error:", err);
  }

  return NextResponse.json({ distance: '275 km' });
}
