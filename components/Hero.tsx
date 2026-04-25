"use client";
import Image from 'next/image';
import BookingForm from "./BookingForm";
import { motion } from "framer-motion";
import { Shield, Headphones, Star, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-950 pt-20 lg:pt-32 pb-0 overflow-hidden w-full">
      {/* Clean Solid Blue Background */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest mb-10"
          >
             <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className={`w-8 h-8 rounded-full border-2 border-blue-950 bg-slate-400`} />)}
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
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