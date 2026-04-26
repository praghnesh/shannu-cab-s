"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Navigation, ArrowRight } from 'lucide-react';

const routes = [
  "HYDERABAD ⇄ VIJAYAWADA",
  "VIJAYAWADA ⇄ HYDERABAD",
  "GUNTUR ⇄ HYDERABAD",
  "HYDERABAD ⇄ BENGALURU",
  "VIJAYAWADA ⇄ TIRUPATI",
  "ELURU ⇄ HYDERABAD",
  "HYDERABAD ⇄ GUDIVADA"
];

export default function FloatingActions() {
  const [routeIndex, setRouteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRouteIndex((prev) => (prev + 1) % routes.length);
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] w-[95%] max-w-2xl px-4"
        >
          <div className="bg-blue-950/90 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 flex items-center justify-between gap-4">
            
            {/* Route Label - Left */}
            <div className="hidden sm:flex items-center gap-3 pl-4">
               <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                  <Navigation size={18} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none mb-1">Live Route</span>
                  <div className="h-5 overflow-hidden">
                     <AnimatePresence mode="wait">
                        <motion.span 
                           key={routeIndex}
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           exit={{ y: -20, opacity: 0 }}
                           className="text-sm font-black text-white whitespace-nowrap block"
                        >
                           {routes[routeIndex]}
                        </motion.span>
                     </AnimatePresence>
                  </div>
               </div>
            </div>

            {/* Mobile Route - Small */}
            <div className="sm:hidden pl-4 flex flex-col">
               <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest leading-none">Popular Route</span>
               <AnimatePresence mode="wait">
                  <motion.span 
                     key={routeIndex}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-[11px] font-black text-white"
                  >
                     {routes[routeIndex].split(' ⇄ ')[1]}
                  </motion.span>
               </AnimatePresence>
            </div>

            {/* Action Buttons - Right */}
            <div className="flex gap-2">
                <a 
                  href="https://wa.me/919948924786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all shadow-lg active:scale-90 flex items-center gap-2 group px-6 relative"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="hidden md:block font-black text-xs uppercase tracking-widest">WhatsApp</span>
                  {/* Notification Dot */}
                  <span className="absolute top-2 right-4 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </a>
               {/* Desktop: Red Call Button */}
               <a 
                  href="tel:+919948924786" 
                  className="hidden md:flex bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all shadow-lg active:scale-90 items-center gap-2 group px-6"
               >
                  <Phone size={20} className="animate-pulse" />
                  <span className="font-black text-xs uppercase tracking-widest">Call Now</span>
               </a>
               
               {/* Mobile: Phone Number Text */}
               <a 
                  href="tel:+919948924786" 
                  className="md:hidden flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-wider px-1 sm:px-2 whitespace-nowrap"
               >
                  +91 9948924786
               </a>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
