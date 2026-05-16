"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Phone, X, CheckCircle } from 'lucide-react';

const fleetData = [
  { name: "Etios", route: "Vijayawada ⇄ Hyderabad", price: "₹5,000", image: "/cars/ETLOS.png" },
  { name: "Swift Dzire", route: "Guntur ⇄ Hyderabad", price: "₹5,500", image: "/cars/DSIRE.png" },
  { name: "Innova", route: "Hyderabad ⇄ Bangalore", price: "₹19,500", image: "/INNO.png" },
  { name: "Tempo Traveller Urbania", route: "Hyderabad ⇄ Tirupati", price: "On Request", image: "/cars/urbania.png" },
  { name: "Luxury AC Bus", route: "Vijayawada ⇄ Vizag", price: "On Request", image: "/BUSBANNER.png" },
  { name: "Innova Crysta", route: "Hyderabad ⇄ Srisailam", price: "₹14,000", image: "/CRISTA.png" },
  { name: "Mercedes Benz", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/BENZ.png" },
  { name: "BMW 7 Series", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/BMW.png" },
  { name: "Audi A8 L", route: "Hyderabad ⇄ Elite Club", price: "On Request", image: "/cars/AUDI.png" },
  { name: "Vintage Rolls", route: "Wedding Special", price: "On Request", image: "/luxarycars/lux7.png" }
];

const locations = ["Hyderabad", "Vijayawada", "Guntur", "Vizag", "Tirupati", "Bangalore", "Tenali", "Ongole"];
const supportNumbers = ["+91 9948924786"];

export default function BookingNotification() {
  const [activeNotification, setActiveNotification] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState<'booking' | 'support'>('booking');

  useEffect(() => {
    const showNotification = () => {
      const isSupport = Math.random() > 0.5; // 50/50 chance

      if (isSupport) {
        setType('support');
        setActiveNotification({
          title: "24/7 Support Active",
          desc: "Need a custom route or help with booking?",
          phone: supportNumbers[Math.floor(Math.random() * supportNumbers.length)]
        });
      } else {
        setType('booking');
        const randomCar = fleetData[Math.floor(Math.random() * fleetData.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomTime = Math.floor(Math.random() * 59) + 1;

        setActiveNotification({
          ...randomCar,
          userLocation: randomLocation,
          timeAgo: `${randomTime} mins ago`
        });
      }

      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first one after 3 seconds
    const initialDelay = setTimeout(showNotification, 3000);

    // Show one every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && activeNotification && (
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-32 left-4 sm:left-6 z-[2000] w-[320px] sm:w-[380px]"
        >
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 p-4 sm:p-5 relative overflow-hidden flex items-center gap-4 sm:gap-5">
            {/* Close Button */}
            <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 sm:top-3 sm:right-3 text-slate-300 hover:text-slate-500 transition-colors">
              <X size={14} className="sm:w-4 sm:h-4" />
            </button>

            {type === 'booking' ? (
              <>
                {/* Left Side: Car Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-xl sm:rounded-[1.5rem] relative overflow-hidden shrink-0 border border-slate-100 p-1 sm:p-2">
                  <Image
                    src={activeNotification.image}
                    alt={activeNotification.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col flex-grow min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-1.5">
                    <CheckCircle size={10} className="text-green-500 sm:w-3 sm:h-3" />
                    <span className="text-[9px] sm:text-[10px] font-black text-green-600 uppercase tracking-widest">CONFIRMED</span>
                  </div>

                  <h4 className="text-sm sm:text-lg font-black text-blue-950 leading-none mb-1 sm:mb-1">
                    {activeNotification.name} <span className="text-orange-500 sm:ml-1">@{activeNotification.price}</span>
                  </h4>

                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 leading-tight sm:leading-snug mb-2 sm:mb-3">
                    {activeNotification.route}
                  </p>

                  <div className="flex items-center justify-between gap-2 sm:gap-3 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-tighter">Status</span>
                      <span className="text-[10px] sm:text-[10px] font-bold text-blue-600 italic truncate max-w-[80px] sm:max-w-none">{activeNotification.userLocation}</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919948924786"
                        className="bg-blue-950 text-white text-[9px] sm:text-[11px] font-black px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-orange-500 transition-all shadow-lg flex items-center gap-1.5 shrink-0 uppercase tracking-widest"
                      >
                        <Phone size={12} /> BOOK
                      </a>
                      <button
                        onClick={() => setIsVisible(false)}
                        className="bg-red-600 text-white text-[9px] sm:text-[11px] font-black px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-red-700 transition-all shadow-lg flex items-center gap-1.5 shrink-0 uppercase tracking-widest"
                      >
                        <CheckCircle size={12} /> DONE
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Support Notification Layout */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-xl text-orange-600">
                  <Phone size={32} />
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">{activeNotification.title}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-blue-950 mb-3 leading-tight">
                    {activeNotification.desc}
                  </h4>
                  <a
                    href={`tel:${activeNotification.phone}`}
                    className="w-full bg-orange-500 text-white text-xs font-black py-3 rounded-xl hover:bg-blue-950 transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    CALL NOW: {activeNotification.phone}
                  </a>
                </div>
              </>
            )}

            {/* Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1.5 bg-orange-500/20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
