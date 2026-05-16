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
      {/* Mobile Floating Actions - Call (Left) & WhatsApp (Right) */}
      {isVisible && (
        <motion.div key="floating-wrapper" className="contents">
          {/* WhatsApp - Right Side */}
          <motion.a 
            key="mobile-whatsapp-fab"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            href="https://wa.me/919948924786"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden fixed bottom-6 right-6 z-[2000] bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] active:scale-90 border-2 border-white/20"
          >
             <MessageCircle size={28} />
          </motion.a>

          {/* Call - Left Side */}
          <motion.a 
            key="mobile-call-fab"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            href="tel:+919948924786"
            className="md:hidden fixed bottom-6 left-6 z-[2000] bg-green-600 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.4)] active:scale-90 border-2 border-white/20"
          >
             <Phone size={28} className="animate-pulse" />
          </motion.a>

          {/* Desktop Floating Bar */}
          <motion.div 
            key="main-floating-actions"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] w-[95%] max-w-2xl px-4"
          >
            <div className="bg-green-600/90 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-5 px-4 flex items-center justify-between gap-4 w-full">
              
              {/* Route Label - Left */}
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                    <Navigation size={18} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Live Route</span>
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
                    href="https://wa.me/919948924786" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all shadow-lg active:scale-90 items-center gap-2 group px-6 relative"
                  >
                    <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-black text-xs uppercase tracking-widest">WhatsApp</span>
                    </a>
                 {/* Desktop: Red Call Button */}
                 <a 
                    href="tel:+919948924786" 
                    className="flex bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all shadow-lg active:scale-90 items-center gap-2 group px-6"
                 >
                    <Phone size={20} className="animate-pulse" />
                    <span className="font-black text-xs uppercase tracking-widest">Call Now</span>
                 </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
