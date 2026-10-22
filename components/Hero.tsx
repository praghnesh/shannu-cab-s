"use client";
import BookingForm from "./BookingForm";
import { motion } from "framer-motion";
import { Shield, Headphones, Users, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-950 pt-20 lg:pt-28 pb-8 overflow-hidden w-full">
      {/* Clean Solid Blue Background */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-4 pb-4">
          {/* Promo Offer Banner */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            href="https://wa.me/919393591444?text=Hi,%20I%20want%20to%20book%20a%20Hyderabad%20to%20Vijayawada%20cab%20and%20avail%20the%20Rs.500%20discount%20offer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2.5 rounded-full font-black text-xs md:text-sm tracking-wide shadow-2xl mb-4 border border-white/20 transition-all cursor-pointer"
          >
            <span className="bg-white text-orange-600 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              Offer
            </span>
            <span>Book Hyderabad to Vijayawada Cabs: Up to ₹500 Off!</span>
          </motion.a>

          {/* Direct 24/7 Helpline Pill - Prominent Size */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-black/80 backdrop-blur-md border-2 border-yellow-400/40 px-5 sm:px-8 py-3 rounded-full text-white shadow-2xl">
              <a href="tel:+919393591444" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 transition-colors">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-gray-300">Call:</span>
                <span className="text-base sm:text-xl font-black text-white tracking-wider">93935 91444</span>
              </a>
              <span className="text-yellow-400/40 hidden sm:inline">|</span>
              <a 
                href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 transition-colors"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-200">WhatsApp:</span>
                <span className="text-base sm:text-xl font-black text-white tracking-wider">93935 91444</span>
              </a>
            </div>
          </div>

          {/* Main Hero Booking Form (2nd Image Prominent Focus) */}
          <div id="main-booking-form" className="w-full mb-8 flex justify-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="w-full"
            >
              <BookingForm />
            </motion.div>
          </div>

          {/* Mobile Quick Call / WhatsApp Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex md:hidden gap-3 max-w-md mx-auto mb-12 px-4"
          >
            <a 
              href="tel:+919393591444"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-95 transition-all"
            >
              <Phone size={18} fill="currentColor" />
              <span>Call: 93935 91444</span>
            </a>
            <a 
              href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3.5 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(34,197,94,0.3)] active:scale-95 transition-all"
            >
              <MessageCircle size={18} fill="currentColor" />
              <span>WA: 93935 91444</span>
            </a>
          </motion.div>

          {/* Expanded Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8"
          >
             {[
               { icon: <Shield size={18} className="text-green-400"/>, label: "Safety First", val: "100% Secure" },
               { icon: <Users size={18} className="text-blue-400"/>, label: "VIP Hubs", val: "12+ Cities" },
               { icon: <Headphones size={18} className="text-orange-400"/>, label: "Concierge", val: "24/7 Live" },
               { icon: <MapPin size={18} className="text-purple-400"/>, label: "Routing", val: "GPS Tracked" },
             ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                   <div className="mb-2">{stat.icon}</div>
                   <span className="text-[10px] font-black uppercase text-blue-300/60 tracking-wider mb-1">{stat.label}</span>
                   <span className="text-lg font-black text-white leading-none">{stat.val}</span>
                </div>
             ))}
          </motion.div>

          {/* Travel in Style & Extra Comfort Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6 mb-4"
          >
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
              TRAVEL IN STYLE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">EXTRA COMFORT</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </div>
  );
}