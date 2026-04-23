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
  title: 'Fast car Travels | Premium Cab Booking in Hyderabad & Vijayawada',
  description: 'Book the best cab and tour services including airport transfer, outstation, corporate travel, and wedding cars with Fast car Travels.',
}

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
        
        {/* VIP Support Badge */}
        <div className="fixed bottom-24 right-6 z-40 hidden md:block">
           <div className="bg-white/80 backdrop-blur shadow-2xl p-4 rounded-3xl border border-white flex flex-col items-center gap-2 animate-bounce">
              <span className="text-[10px] font-black text-blue-900 uppercase">Live Support</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           </div>
        </div>

        {/* Floating Call Button Overlay */}
        <a href="tel:+919948924786" className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(249,115,22,0.5)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group">
           <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </a>
      </body>
    </html>
  )
}
