import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Shannu Car Travels | Premium Cab Booking in Hyderabad & Vijayawada',
  description: 'Book the best cab and tour services including airport transfer, outstation, corporate travel, and wedding cars with Shannu Car Travels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-gray-50 text-gray-900 relative`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        
        {/* WhatsApp Mobile Floating Button Overlay */}
        <a href="tel:+919948924786" className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_30px_rgba(34,197,94,0.5)] hover:scale-110 transition-all active:scale-95 duration-200">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </body>
    </html>
  )
}
