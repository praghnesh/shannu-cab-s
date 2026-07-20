import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json([]);
  }

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q + ", India")}&countrycodes=in&limit=5`,
      {
        headers: {
          'User-Agent': 'AmaravathiFastCarTravels/1.0',
          'Accept': 'application/json'
        }
      }
    );
    
    if (!res.ok) {
      return NextResponse.json([]);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Suggestions API error:', error);
    return NextResponse.json([]);
  }
}
