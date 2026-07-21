import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://amaravathifastcartravels.com'),
  title: 'Hyderabad to Vijayawada Cab | Book Taxi Online Starting ₹5,500 - Amaravathi Fast Car Travels',
  description: 'Book Hyderabad to Vijayawada cab service & Vijayawada to Hyderabad taxi at best price ₹5,500. All inclusive fare (fuel, toll gates, driver allowance included). 24/7 doorstep pickup, Innova Crysta, Dzire, Ertiga & Tempo Traveller rentals.',
  keywords: [
    "Hyderabad to Vijayawada taxi service", "Vijayawada to Hyderabad cab", "Vijayawada to Hyderabad Cabs", "Vijayawada to Hyderabad taxi",
    "Hyderabad to Vijayawada cab", "Hyderabad to Vijayawada Cabs", "Hyderabad to Vijayawada taxi", "Guntur to Hyderabad taxi",
    "Guntur to Hyderabad Cabs", "Guntur to Hyderabad cab", "Hyderabad to Guntur cab", "Hyderabad to Guntur taxi",
    "Hyderabad to Guntur Cabs", "Hyderabad to Bengaluru Cabs", "Hyderabad to Bengaluru taxi", "Hyderabad to Tirupati Cabs",
    "Hyderabad to Chennai cabs", "Vijayawada to Ongole taxi", "Vijayawada to Ongole cab", "Vijayawada to Rajahmundry cab",
    "Vijayawada to Rajahmundry Cabs", "Vijayawada to Tirupati cab", "Vijayawada to Tirupati Cabs", "Vijayawada to Tirupati taxi",
    "Vijayawada to Chennai cab", "Vijayawada to Chennai taxi", "Vijayawada to Bhimavaram Cabs", "Vijayawada to Eluru Cabs",
    "Vijayawada to Tadepalligudem Cabs", "Vijayawada to Tanuku Cabs", "Vijayawada to Srisailam cabs", "Ongole to Vijayawada Cabs",
    "Tirupati to Vijayawada Cabs", "Chennai to Hyderabad taxi", "Chennai to Hyderabad cab", "Hyderabad to Rajahmundry cab",
    "Hyderabad to Rajahmundry taxi", "Hyderabad to Eluru cab", "Hyderabad to Eluru taxi", "Hyderabad to Tenali cab",
    "Hyderabad to Tenali taxi", "Hyderabad to Bapatla cab", "Hyderabad to Bapatla taxi", "Hyderabad to Ongole taxi",
    "Hyderabad to Ongole Cab", "Hyderabad to Tirupati taxi", "Hyderabad to Tanuku cabs", "Hyderabad to Tadepalligudem Cabs",
    "Hyderabad to Machilipatnam cabs", "Hyderabad to Gudivada cabs", "Hyderabad to Srisailam cabs", "Taxi service Vijayawada",
    "Car travels Vijayawada", "Taxi service near me", "Car travels near me", "Vijayawada taxi service", "Vijayawada car travels",
    "Best car travels Vijayawada", "Tempo traveller Vijayawada", "Mini bus Vijayawada", "Tempo traveller hire Vijayawada",
    "Taxi service Hyderabad", "Car travels in Hyderabad", "Hyderabad taxi service", "Hyderabad car travels",
    "Cab service Vijayawada", "Cab service Hyderabad", "Car travels Guntur", "Taxi service Guntur", "Guntur taxi service",
    "Guntur car travels", "Car travels Tenali", "Taxi service Tenali", "Taxi service Machilipatnam", "Car travels Machilipatnam",
    "Urbaniya tempo traveller", "Andhra Telangana cab taxi service"
  ],
  openGraph: {
    title: 'Hyderabad to Vijayawada Cab | Amaravathi Fast Car Travels',
    description: 'Cheapest & most reliable Hyderabad to Vijayawada cab service. Fares from ₹5,500 all inclusive. Book Innova, Dzire, Ertiga 24/7.',
    url: 'https://amaravathifastcartravels.com/hyderabad-to-vijayawada-cab',
    siteName: 'Amaravathi Fast Car Travels',
    images: [
      {
        url: '/route-photos/fast-car-travels-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Hyderabad to Vijayawada Cab - Amaravathi Fast Car Travels',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyderabad to Vijayawada Cab Service Starting ₹5,500',
    description: 'All-inclusive fares, experienced drivers, doorstep pickup. Book now with Amaravathi Fast Car Travels.',
    images: ['/route-photos/fast-car-travels-banner.jpg'],
  },
  alternates: {
    canonical: 'https://amaravathifastcartravels.com/hyderabad-to-vijayawada-cab',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Schema.org Structured Data JSON-LD for LocalBusiness & TaxiService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    'name': 'Amaravathi Fast Car Travels - Hyderabad to Vijayawada Cab Service',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Amaravathi Fast Car Travels',
      'telephone': '+91-9948924786',
      'email': 'fastcartravels4@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'STREET NO 4 MANIKONDA, Alkapoor Township',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN'
      },
      'areaServed': ['Hyderabad', 'Vijayawada', 'Guntur', 'Telangana', 'Andhra Pradesh']
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Andhra Pradesh and Telangana'
    },
    'serviceType': 'Intercity Cab & Outstation Taxi Service',
    'offers': {
      '@type': 'Offer',
      'price': '5500',
      'priceCurrency': 'INR',
      'description': 'Hyderabad to Vijayawada One Way / Round Trip Cab Fare (All Inclusive)'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
