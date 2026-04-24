import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import PageLoader from '../components/PageLoader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Fast Car Travels | Best Cab & Taxi Service in Hyderabad & Vijayawada',
  description: 'Book premium cab services for Hyderabad to Vijayawada, Guntur, Tirupati, and more. We offer reliable airport transfers, outstation cabs, and tempo travellers with 24/7 support. Best car travels in Vijayawada and Hyderabad.',
  keywords: [
    "Fast Car Travels", "Best car travels in Vijayawada", "Best car travels in Hyderabad",
    "Outstation cab booking", "Intercity cab service", "Taxi service near me",
    "Premium car rental South India", "Reliable taxi service Hyderabad",
    "Hyderabad to Vijayawada cab", "Vijayawada to Hyderabad taxi",
    "Innova Crysta hire Hyderabad", "Tempo Traveller rental Vijayawada",
    "Force Urbania hire", "Wedding car rental Hyderabad",
    "Airport transfer cabs Hyderabad", "One-way drop taxi service",
    "Temple pilgrimage tour packages", "Srisailam tour cab package",
    "Tirupati darshan cab booking", "Araku valley tour taxi"
  ]
}

import FloatingActions from '../components/FloatingActions'
import BookingNotification from '../components/BookingNotification'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased w-full max-w-full overflow-x-clip">
      <body className={`${poppins.variable} font-sans bg-slate-50 text-slate-900 overflow-x-clip w-full max-w-full selection:bg-orange-500 selection:text-white`}>
        <PageLoader />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <BookingNotification />
        
        {/* VIP Support Badge */}
        <div className="fixed bottom-32 right-6 z-40 hidden md:block">
           <div className="bg-white/80 backdrop-blur shadow-2xl p-4 rounded-3xl border border-white flex flex-col items-center gap-2 animate-bounce">
              <span className="text-[10px] font-black text-blue-900 uppercase">Live Support</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           </div>
        </div>
      </body>
    </html>
  )
}
