"use client";
import Image from 'next/image';
import BookingForm from "./BookingForm";
import { motion } from "framer-motion";
import { Shield, Headphones, Star, Users, MapPin, ArrowRight } from 'lucide-react';

const tariffData = [
  {
    title: "Local Trip",
    pill: "Toll Gates (If Any) & Parking Extra",
    items: [
      { label: "4Hrs 40Km", price: "₹1,500/-" },
      { label: "8Hrs 80Km", price: "₹2,500/-" },
      { label: "Per Extra Km", price: "₹13/-" },
      { label: "Per Extra Hour", price: "₹200/-" }
    ]
  },
  {
    title: "Day Rent Tariffs",
    pill: "Toll Gates & Parking Extra",
    items: [
      { label: "12 Hours", price: "₹1,300/-" },
      { label: "24 Hours", price: "₹2,000/-" },
      { label: "Fuel (By Customer)", price: "1Ltr per 10 Km" },
      { label: "Driver Batta Per Day", price: "₹500/-" },
      { label: "Night Halt", price: "₹500/-" }
    ]
  },
  {
    title: "Outstation Trips",
    pill: "Toll Gates, Border taxes & Parking Extra",
    items: [
      { label: "Per daylimit", price: "300Km" },
      { label: "Per Extra Km", price: "₹13/-" },
      { label: "Driver Batta Per Day", price: "₹500/-" },
      { label: "Night Halt", price: "₹500/-" }
    ]
  }
];

export default function Hero() {
  return (
    <div className="relative bg-blue-950 pt-20 lg:pt-32 pb-0 overflow-hidden w-full">
      {/* Clean Solid Blue Background */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest mb-10"
          >
             <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-950 bg-slate-400" />)}
             </div>
             <span className="flex items-center gap-2"><Star size={14} className="text-orange-500" fill="currentColor" /> 50,000+ HAPPY TRAVELERS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-10"
          >
            FAST CAR TRAVELS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500">
              WORLD CLASS RIDES.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-tight font-medium mb-12 tracking-tight"
          >
            Experience intercity travel reimagined. From private luxury sedans to 
            heavy vehicle logistics, we combine safety, speed, and 100% reliability 
            for the ultimate journey across South India.
          </motion.p>

          {/* Expanded Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16"
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

          {/* Transparent Tariff Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-10 mt-6"
          >
            <span className="font-black text-xs sm:text-sm text-orange-500 uppercase tracking-[0.25em] block mb-2">Our Premium Tariffs</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Affordable & Transparent Pricing
            </h2>
          </motion.div>

          {/* Tariffs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left mb-16">
            {tariffData.map((tariff, index) => (
              <motion.div
                key={tariff.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-gradient-to-br from-blue-950/80 to-blue-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group"
              >
                {/* Decorative inner glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
                
                <div>
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-center text-yellow-400 tracking-tight mb-8 uppercase italic group-hover:text-orange-400 transition-colors">
                    {tariff.title}
                  </h3>
                  
                  {/* Items list */}
                  <div className="space-y-4">
                    {tariff.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                            <ArrowRight size={10} className="group-hover/item:translate-x-0.5 transition-transform" />
                          </div>
                          <span className="text-sm font-semibold text-white/90 leading-none">{item.label}</span>
                        </div>
                        <div className="flex-grow border-b border-dashed border-white/10 mx-3 self-end mb-1"></div>
                        <span className="text-sm font-black text-amber-300 shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Pill */}
                <div className="mt-8 text-center">
                  <div className="inline-block bg-white text-blue-950 font-black text-[10px] sm:text-xs py-2 px-5 rounded-full shadow-md uppercase tracking-wider group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {tariff.pill}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Travel in Style & Extra Comfort Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center mt-6 mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
              TRAVEL IN STYLE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">EXTRA COMFORT</span>
            </h2>
          </motion.div>

        </div>
      </div>

      {/* Floating Booking Card */}
      <div id="main-booking-form" className="relative z-20 w-full px-4 sm:px-6 lg:px-8 mt-[-60px] lg:mt-[-80px] mb-0 pb-2 sm:pb-10 max-w-6xl mx-auto flex justify-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="w-full"
        >
          <BookingForm />
        </motion.div>
      </div>
    </div>
  );
}