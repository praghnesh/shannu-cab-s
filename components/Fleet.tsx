"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, ShieldCheck, Zap, ArrowRight, Star, X, MapPin, CheckCircle } from 'lucide-react';

const fleetData = [
  // Hyderabad ⇄ Vijayawada
  { id: 1, name: "Premium Sedan (Swift Dzire)", price: "₹5,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Executive", bgColor: "bg-blue-50" },
  { id: 2, name: "Family SUV (Ertiga)", price: "₹6,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-blue-50" },
  { id: 3, name: "Luxury SUV (Innova)", price: "₹8,000", route: "Hyderabad ⇄ Vijayawada", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "VIP", bgColor: "bg-blue-50" },
  { id: 4, name: "Innova Crysta Elite", price: "₹9,000", route: "Hyderabad ⇄ Vijayawada", perKm: "₹21/Km", capacity: "7 Seats", image: "/innova.png", type: "Ultra Luxury", bgColor: "bg-blue-50" },
  { id: 5, name: "Force Urbania Premium", price: "On Request", route: "Hyderabad ⇄ Vijayawada", perKm: "On Request", capacity: "17 Seats", image: "/img.png", type: "Group", bgColor: "bg-blue-50" },

  // Vijayawada ⇄ Guntur (New)
  { id: 6, name: "Premium Sedan", price: "₹1,500", route: "Vijayawada ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Inter-City", bgColor: "bg-red-50" },
  { id: 7, name: "Family SUV", price: "₹2,200", route: "Vijayawada ⇄ Guntur", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-red-50" },

  // Vijayawada ⇄ Machilipatnam (New)
  { id: 8, name: "Premium Sedan", price: "₹2,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Coastal", bgColor: "bg-cyan-50" },
  { id: 9, name: "Luxury SUV", price: "₹3,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "VIP", bgColor: "bg-cyan-50" },

  // Hyderabad ⇄ Vizag (New City)
  { id: 10, name: "Luxury Sedan", price: "₹12,000", route: "Hyderabad ⇄ Vizag", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Long Distance", bgColor: "bg-orange-50" },
  { id: 11, name: "Premium SUV", price: "₹15,000", route: "Hyderabad ⇄ Vizag", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "VIP", bgColor: "bg-orange-50" },
  { id: 12, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Vizag", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-orange-50" },

  // Hyderabad ⇄ Rajahmundry & Kakinada
  { id: 20, name: "Swift Dzire", price: "₹8,500", route: "Hyderabad ⇄ Rajahmundry", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Executive", bgColor: "bg-teal-50" },
  { id: 21, name: "Innova Crysta", price: "₹11,500", route: "Hyderabad ⇄ Kakinada", perKm: "₹21/Km", capacity: "7 Seats", image: "/innova.png", type: "Luxury", bgColor: "bg-teal-50" },

  // Hyderabad ⇄ Tirupati (Pilgrimage Special)
  { id: 30, name: "Pilgrimage SUV", price: "₹13,500", route: "Hyderabad ⇄ Tirupati", perKm: "₹18/Km", capacity: "7 Seats", image: "/suv.png", type: "Spiritual", bgColor: "bg-yellow-50" },
  { id: 31, name: "Mini Bus (26 Seater)", price: "On Request", route: "Hyderabad ⇄ Tirupati", perKm: "On Request", capacity: "26 Seats", image: "/bus.png", type: "Group", bgColor: "bg-yellow-50" },

  // Heavy Vehicles & Buses
  { id: 301, name: "Force Urbania Gold", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "17 Seats", image: "/img.png", type: "Premium Van", bgColor: "bg-gray-100" },
  { id: 302, name: "40 Seater Luxury AC Bus", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "40 Seats", image: "/bus.png", type: "Heavy Vehicle", bgColor: "bg-gray-100" },
  { id: 303, name: "Non-AC Economy Bus", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "40 Seats", image: "/bus.png", type: "Economy", bgColor: "bg-gray-100" },
];

const routes = [
  { label: "Vijayawada ⇄ Hyderabad", value: "Hyderabad ⇄ Vijayawada" },
  { label: "Vijayawada ⇄ Guntur", value: "Vijayawada ⇄ Guntur" },
  { label: "Vijayawada ⇄ Machilipatnam", value: "Vijayawada ⇄ Machilipatnam" },
  { label: "Hyderabad ⇄ Vizag", value: "Hyderabad ⇄ Vizag" },
  { label: "Hyderabad ⇄ Rajahmundry", value: "Hyderabad ⇄ Rajahmundry" },
  { label: "Hyderabad ⇄ Tirupati", value: "Hyderabad ⇄ Tirupati" },
  { label: "Group Travel & Buses", value: "Buses & Group Travel" }
];

export default function Fleet() {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<string>("Hyderabad ⇄ Vijayawada");

  const filteredFleet = selectedRoute === "Buses & Group Travel"
    ? fleetData.filter(car => car.route === "Buses & Group Travel")
    : [
        ...fleetData.filter(car => car.route === selectedRoute),
        ...fleetData.filter(car => car.route === "Buses & Group Travel")
      ];

  const activeItem = viewIndex !== null ? filteredFleet[viewIndex] : null;

  const handleNext = () => setViewIndex((viewIndex! + 1) % filteredFleet.length);
  const handlePrev = () => setViewIndex((viewIndex! - 1 + filteredFleet.length) % filteredFleet.length);

  return (
    <section id="fleet" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-orange-500 font-black tracking-widest uppercase text-sm px-4 py-2 bg-orange-50 rounded-full">Explore Our Elite Catalog</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter"
          >
            A Vehicle for <br /> Every Ambition
          </motion.h2>
          
          <div className="bg-slate-50 p-2 sm:p-4 rounded-[3rem] shadow-2xl border border-slate-100 mx-auto max-w-3xl mt-12 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <div className="bg-blue-950 text-white px-10 py-5 rounded-[2.5rem] flex items-center justify-center gap-3 font-black whitespace-nowrap text-sm shadow-xl shrink-0">
                <MapPin size={20} className="text-orange-500" /> SEARCH ROUTES
              </div>
              <div className="relative flex-grow">
                <select 
                  value={selectedRoute}
                  onChange={(e) => {
                    setSelectedRoute(e.target.value);
                    setViewIndex(null); 
                  }}
                  className="w-full bg-transparent px-10 py-5 text-blue-950 font-black text-xl outline-none cursor-pointer appearance-none text-center sm:text-left tracking-tight"
                >
                  {routes.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((car, idx) => (
              <motion.div 
                layout
                key={car.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl hover:shadow-orange-500/10 transition-all duration-700 flex flex-col group border border-slate-50 h-full p-2"
              >
                <div className={`relative h-64 sm:h-72 ${car.bgColor} rounded-[3.5rem] p-8 flex items-center justify-center overscroll-none`}>
                   <Image src={car.image} alt={car.name} fill className="object-contain p-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700" />
                   <div className="absolute top-8 left-8 bg-blue-950 text-white text-[12px] font-black px-5 py-2 rounded-2xl uppercase tracking-widest shadow-xl">{car.type}</div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h4 className="text-3xl font-black text-blue-950 mb-3 leading-tight tracking-tighter">{car.name}</h4>
                  <div className="flex items-center gap-6 text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">
                    <span className="flex items-center gap-2"><Users size={18} className="text-blue-500" /> {car.capacity}</span>
                    <span className="flex items-center gap-2 font-black text-blue-950 tracking-widest">
                       <ShieldCheck size={18} className="text-orange-500" /> 100% SECURE
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price Start</span>
                          <span className="text-blue-950 font-black text-3xl tracking-tighter">{car.price}</span>
                       </div>
                       <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setViewIndex(idx)}
                        className="bg-slate-100 p-6 rounded-3xl hover:bg-orange-500 hover:text-white transition-all text-blue-950"
                      >
                        <ArrowRight size={24} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Fleet Promise */}
        <div className="mt-32 bg-blue-950 rounded-[4rem] p-12 sm:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                    Every Ride is a <br /> <span className="text-orange-500 italic">Fast Travels</span> Promise.
                 </h3>
                 <p className="text-blue-100/60 text-xl font-medium leading-relaxed">
                    We don't just provide cars; we provide peace of mind. All our vehicles are less than 2 years old, undergo 50+ safety checks daily, and are driven by certified professional chauffeurs.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {["GPS Live Hub", "Daily Sanitization", "Verified Drivers", "24/7 Control Room"].map((tag) => (
                      <div key={tag} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest">
                         <CheckCircle size={14} className="text-green-400" /> {tag}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 backdrop-blur-3xl transform group-hover:-rotate-3 transition-transform duration-700">
                    <div className="text-center space-y-4">
                       <span className="text-orange-500 text-7xl font-black block">100%</span>
                       <p className="text-white text-2xl font-black tracking-tight">CUSTOMER TRUST RATING</p>
                       <p className="text-blue-200/50 text-sm">Based on 5,000+ Verified Intercity Rides</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {viewIndex !== null && activeItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/95 backdrop-blur-3xl p-4 sm:p-12 flex items-center justify-center pt-24 pb-12"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[4rem] w-full max-w-6xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row border-[12px] border-white/20"
            >
              <button onClick={() => setViewIndex(null)} className="absolute top-10 right-10 text-slate-400 hover:text-orange-500 z-50 bg-slate-50 p-3 rounded-2xl transition-colors"><X size={32} /></button>
              
              <div className={`lg:w-1/2 p-20 ${activeItem.bgColor} flex items-center justify-center relative min-h-[400px]`}>
                 <Image src={activeItem.image} alt={activeItem.name} fill className="object-contain p-20 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]" />
              </div>

              <div className="lg:w-1/2 p-12 sm:p-20 flex flex-col justify-center">
                 <div className="mb-12">
                    <div className="flex gap-2 mb-6">
                       {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#f97316" color="#f97316" />)}
                       <span className="ml-4 text-orange-500 font-extrabold text-sm uppercase tracking-widest">(5.0 Rating)</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 tracking-tighter leading-none">{activeItem.name}</h2>
                    <p className="text-slate-500 text-xl leading-relaxed border-l-4 border-orange-500 pl-8 ml-2">
                       Luxury redefined for the {activeItem.route} route. Our {activeItem.name} features ergonomic seating, advanced climate control, and ample luggage space for your peace of mind.
                    </p>
                 </div>

                 <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-500/20 transition-all">
                       <Users className="text-blue-600 mb-4" size={32} />
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Max Capacity</p>
                       <p className="text-2xl font-black text-blue-950 leading-none">{activeItem.capacity}</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-orange-500/20 transition-all">
                       <Zap className="text-orange-600 mb-4" size={32} />
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Support Level</p>
                       <p className="text-2xl font-black text-blue-950 leading-none">VIP PRIORITY</p>
                    </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                    <motion.a 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       href="tel:+919948924786" 
                       className="flex-grow bg-blue-950 text-white font-black text-2xl py-8 rounded-[2rem] hover:bg-orange-500 transition-all text-center flex items-center justify-center gap-4 shadow-3xl"
                    >
                       <Phone size={32} /> RESERVE NOW
                    </motion.a>
                    <div className="flex gap-4">
                       <button onClick={handlePrev} className="bg-slate-100 p-8 rounded-[2rem] hover:bg-slate-200 transition-colors"><ArrowRight size={28} className="rotate-180" /></button>
                       <button onClick={handleNext} className="bg-slate-100 p-8 rounded-[2rem] hover:bg-slate-200 transition-colors"><ArrowRight size={28} /></button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
