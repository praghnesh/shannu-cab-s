import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  if (!from || !to) {
    return NextResponse.json({ error: 'Missing from or to parameters' }, { status: 400 });
  }

  try {
    const enhanceQuery = (q: string) => {
      let query = q.toLowerCase();
      if (query.includes('vizag')) query = 'Visakhapatnam';
      return `${query}, India`;
    };

    // Step 1: Geocode From
    const fromRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enhanceQuery(from))}&limit=1`,
      { headers: { 'User-Agent': 'FastCarTravels/1.0' } }
    );
    const fromData = await fromRes.json();

    // Step 2: Geocode To
    const toRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enhanceQuery(to))}&limit=1`,
      { headers: { 'User-Agent': 'FastCarTravels/1.0' } }
    );
    const toData = await toRes.json();

    if (fromData[0] && toData[0]) {
      const lat1 = fromData[0].lat;
      const lon1 = fromData[0].lon;
      const lat2 = toData[0].lat;
      const lon2 = toData[0].lon;

      // Step 3: Get Route Distance from OSRM
      const routeRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`
      );
      const routeData = await routeRes.json();

      if (routeData.routes && routeData.routes[0]) {
        const meters = routeData.routes[0].distance;
        const km = (meters / 1000).toFixed(1);
        return NextResponse.json({ distance: `${km} km` });
      }
    }

    return NextResponse.json({ distance: 'Route found' });
  } catch (error) {
    console.error('Route info API error:', error);
    return NextResponse.json({ error: 'Failed to fetch route info' }, { status: 500 });
  }
}
