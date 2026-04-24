"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Phone, X, CheckCircle } from 'lucide-react';

const fleetData = [
  { name: "Etios", route: "Vijayawada ⇄ Hyderabad", price: "₹5,000", image: "/cars/ETLOS.png" },
  { name: "Swift Dzire", route: "Guntur ⇄ Hyderabad", price: "₹5,500", image: "/cars/DSIRE.png" },
  { name: "Innova", route: "Hyderabad ⇄ Bangalore", price: "₹19,500", image: "/INNO.png" },
  { name: "Tempo Traveller", route: "Hyderabad ⇄ Tirupati", price: "On Request", image: "/cars/urbania.png" },
  { name: "Luxury AC Bus", route: "Vijayawada ⇄ Vizag", price: "On Request", image: "/BUSBANNER.png" },
  { name: "Innova Crysta", route: "Hyderabad ⇄ Srisailam", price: "₹14,000", image: "/CRISTA.png" },
  { name: "Mercedes Benz", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/BENZ.png" },
  { name: "BMW 7 Series", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/BMW.png" },
  { name: "Audi A8 L", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/AUDI.png" },
  { name: "Vintage Rolls", route: "Wedding Special", price: "On Request", image: "/luxarycars/lux7.png" }
];

const locations = ["Hyderabad", "Vijayawada", "Guntur", "Vizag", "Tirupati", "Bangalore", "Tenali", "Ongole"];

export default function BookingNotification() {
  const [activeBooking, setActiveBooking] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomCar = fleetData[Math.floor(Math.random() * fleetData.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomTime = Math.floor(Math.random() * 59) + 1;
      
      setActiveBooking({
        ...randomCar,
        userLocation: randomLocation,
        timeAgo: `${randomTime} mins ago`
      });
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show almost immediately on every page (2 seconds delay)
    const initialDelay = setTimeout(showNotification, 2000);

    // Repeat more frequently (every 12-18 seconds)
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && activeBooking && (
        <motion.div 
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-32 left-4 sm:left-6 z-[2000] w-[260px] sm:w-[380px]"
        >
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 p-3 sm:p-5 relative overflow-hidden flex items-center gap-3 sm:gap-5">
            {/* Close Button */}
            <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 sm:top-3 sm:right-3 text-slate-300 hover:text-slate-500 transition-colors">
              <X size={14} className="sm:w-4 sm:h-4" />
            </button>

            {/* Left Side: Car Image */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-slate-50 rounded-xl sm:rounded-[1.5rem] relative overflow-hidden shrink-0 border border-slate-100 p-1 sm:p-2">
               <Image 
                  src={activeBooking.image} 
                  alt={activeBooking.name} 
                  fill 
                  className="object-contain p-1" 
               />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col flex-grow min-w-0">
               <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1.5">
                  <CheckCircle size={10} className="text-green-500 sm:w-3 sm:h-3" />
                  <span className="text-[8px] sm:text-[10px] font-black text-green-600 uppercase tracking-widest">CONFIRMED</span>
               </div>
               
               <h4 className="text-xs sm:text-lg font-black text-blue-950 leading-none mb-0.5 sm:mb-1">
                  {activeBooking.name} <span className="text-orange-500 sm:ml-1">@{activeBooking.price}</span>
               </h4>
               
               <p className="text-[9px] sm:text-[11px] font-bold text-slate-500 leading-tight sm:leading-snug mb-1.5 sm:mb-3">
                  {activeBooking.route}
               </p>

               <div className="flex items-center justify-between gap-2 sm:gap-3 mt-auto">
                  <div className="flex flex-col">
                     <span className="text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-tighter">Status</span>
                     <span className="text-[8px] sm:text-[10px] font-bold text-blue-600 italic truncate max-w-[60px] sm:max-w-none">{activeBooking.userLocation}</span>
                  </div>
                  <a 
                    href="tel:+919948924786"
                    className="bg-blue-950 text-white text-[8px] sm:text-[11px] font-black px-2 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-orange-500 transition-all shadow-lg flex flex-col items-center leading-none shrink-0"
                  >
                    <span className="flex items-center gap-1 mb-0.5 sm:mb-1 text-[7px] sm:text-[8px]"><Phone size={8} /> BOOK</span>
                    <span className="text-[9px] sm:text-xs">CALL</span>
                  </a>
               </div>
            </div>

            {/* Progress Bar at bottom */}
            <motion.div 
               initial={{ width: "100%" }}
               animate={{ width: "0%" }}
               transition={{ duration: 4, ease: "linear" }}
               className="absolute bottom-0 left-0 h-1.5 bg-orange-500/20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
