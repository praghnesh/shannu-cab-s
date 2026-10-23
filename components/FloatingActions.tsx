"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Navigation, ArrowRight } from 'lucide-react';

const routes = [
  "HYDERABAD ⇄ VIJAYAWADA CABS, TAXI",
  "VIJAYAWADA ⇄ HYDERABAD CABS, TAXI",
  "GUNTUR ⇄ HYDERABAD CABS, TAXI",
  "HYDERABAD ⇄ BENGALURU CABS, TAXI",
  "VIJAYAWADA ⇄ TIRUPATI CABS, TAXI",
  "ELURU ⇄ HYDERABAD CABS, TAXI",
  "HYDERABAD ⇄ GUDIVADA CABS, TAXI"
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
      {/* Mobile Floating Actions - Call (Left) & WhatsApp (Right) */}
      {isVisible && (
        <motion.div key="floating-wrapper" className="contents">
          {/* WhatsApp - Right Side */}
          <motion.a 
            key="mobile-whatsapp-fab"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            href="https://wa.me/919393591444"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden fixed bottom-6 right-6 z-[2000] bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] active:scale-90 border-2 border-white/20"
          >
             <MessageCircle size={28} />
             <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
             </span>
          </motion.a>

          {/* Call - Left Side */}
          <motion.a 
            key="mobile-call-fab"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            href="tel:+919393591444"
            className="md:hidden fixed bottom-6 left-4 z-[2000] bg-blue-950 text-white py-3 px-4 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.6)] active:scale-95 border-2 border-orange-400 flex items-center gap-2.5"
          >
             <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
               <Phone size={15} className="text-white fill-white animate-pulse" />
             </div>
             <div className="flex items-center gap-1.5 leading-none">
               <span className="text-[11px] font-medium text-orange-300 uppercase tracking-wider">Call:</span>
               <span className="text-sm sm:text-base font-bold text-white tracking-wide">93935 91444</span>
             </div>
          </motion.a>

          {/* Desktop Floating Bar */}
          <motion.div 
            key="main-floating-actions"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] w-[95%] max-w-2xl px-4"
          >
            <div className="bg-blue-950/95 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] py-4 px-5 flex items-center justify-between gap-4 w-full">
              
              {/* Route Label - Left */}
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                    <Navigation size={18} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest leading-none mb-1">Live Cab Service</span>
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

              {/* Action Buttons - Right */}
              <div className="flex gap-2">
                  <a 
                    href="https://wa.me/919393591444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex bg-emerald-600 text-white p-3.5 rounded-full hover:bg-emerald-500 transition-all shadow-lg active:scale-90 items-center gap-2 group px-5 relative"
                  >
                    <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-black text-xs uppercase tracking-wider">WA: 93935 91444</span>
                    {/* Notification Dot */}
                    <span className="absolute top-2 right-3 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                  </a>
                 {/* Desktop: Red Call Button */}
                 <a 
                    href="tel:+919393591444" 
                    className="flex bg-orange-500 text-white p-3.5 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-90 items-center gap-2 group px-5"
                 >
                    <Phone size={18} className="animate-pulse" />
                    <span className="font-bold text-sm tracking-wide">Call: 93935 91444</span>
                 </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
