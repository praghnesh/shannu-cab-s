"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, ShieldCheck, Zap, ArrowRight, Star, X, MapPin, CheckCircle, Sparkles } from 'lucide-react';

const fleetData = [
  // Hyderabad ⇄ Vijayawada
  { id: 1, name: "Premium Sedan (Swift Dzire)", price: "₹5,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/sedan.png", gallery: ["/cars/sedan.png", "/cars/sedan_interior_1.png"], type: "Executive", bgColor: "bg-blue-50" },
  { id: 2, name: "Family SUV (Ertiga)", price: "₹6,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹15/Km", capacity: "6 Seats", image: "/cars/suv.png", gallery: ["/cars/suv.png", "/cars/suv_interior_1.png"], type: "Family", bgColor: "bg-blue-50" },
  { id: 3, name: "Luxury SUV (Innova)", price: "₹8,000", route: "Hyderabad ⇄ Vijayawada", perKm: "₹19/Km", capacity: "7 Seats", image: "/cars/suv.png", gallery: ["/cars/suv.png", "/cars/suv_interior_1.png"], type: "VIP", bgColor: "bg-blue-50" },
  { id: 4, name: "Economy Sedan (Etios)", price: "₹4,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹11/Km", capacity: "4 Seats", image: "/cars/economy.png", gallery: ["/cars/economy.png", "/cars/sedan_interior_1.png"], type: "Budget", bgColor: "bg-blue-50" },
  { id: 5, name: "Force Urbania Premium", price: "On Request", route: "Hyderabad ⇄ Vijayawada", perKm: "On Request", capacity: "12 Seats", image: "/cars/urbania.png", gallery: ["/cars/urbania.png", "/cars/urbania_interior_5.png", "/cars/bus_interior_1.png", "/cars/bus_interior_2.png", "/cars/suv_interior_1.png", "/cars/sedan_interior_1.png"], type: "Group", bgColor: "bg-blue-50" },

  // Vijayawada ⇄ Guntur (New)
  { id: 6, name: "Premium Sedan", price: "₹1,500", route: "Vijayawada ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/sedan.png", type: "Inter-City", bgColor: "bg-red-50" },
  { id: 7, name: "Family SUV", price: "₹2,200", route: "Vijayawada ⇄ Guntur", perKm: "₹15/Km", capacity: "6 Seats", image: "/cars/suv.png", type: "Family", bgColor: "bg-red-50" },

  // Vijayawada ⇄ Machilipatnam (New)
  { id: 8, name: "Premium Sedan", price: "₹2,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/sedan.png", type: "Coastal", bgColor: "bg-cyan-50" },
  { id: 9, name: "Luxury SUV", price: "₹3,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹19/Km", capacity: "7 Seats", image: "/cars/suv.png", type: "VIP", bgColor: "bg-cyan-50" },

  // Hyderabad ⇄ Vizag (New City)
  { id: 10, name: "Luxury Sedan", price: "₹12,000", route: "Hyderabad ⇄ Vizag", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/sedan.png", type: "Long Distance", bgColor: "bg-orange-50" },
  { id: 11, name: "Premium SUV", price: "₹15,000", route: "Hyderabad ⇄ Vizag", perKm: "₹19/Km", capacity: "7 Seats", image: "/cars/suv.png", type: "VIP", bgColor: "bg-orange-50" },
  { id: 12, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Vizag", perKm: "₹24/Km", capacity: "12 Seats", image: "/cars/tempo.png", gallery: ["/cars/tempo.png", "/cars/urbania_interior_5.png", "/cars/bus_interior_1.png", "/cars/bus_interior_2.png", "/cars/suv_interior_1.png", "/cars/sedan_interior_1.png"], type: "Group", bgColor: "bg-orange-50" },

  // Hyderabad ⇄ Rajahmundry & Kakinada
  { id: 20, name: "Swift Dzire", price: "₹8,500", route: "Hyderabad ⇄ Rajahmundry", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/sedan.png", type: "Executive", bgColor: "bg-teal-50" },
  { id: 21, name: "Innova Crysta", price: "₹11,500", route: "Hyderabad ⇄ Kakinada", perKm: "₹21/Km", capacity: "7 Seats", image: "/cars/suv.png", type: "Luxury", bgColor: "bg-teal-50" },
  { id: 22, name: "Economy Sedan", price: "₹7,500", route: "Hyderabad ⇄ Rajahmundry", perKm: "₹11/Km", capacity: "4 Seats", image: "/cars/economy.png", type: "Budget", bgColor: "bg-teal-50" },

  // Hyderabad ⇄ Tirupati (Pilgrimage Special)
  { id: 30, name: "Pilgrimage SUV", price: "₹13,500", route: "Hyderabad ⇄ Tirupati", perKm: "₹18/Km", capacity: "7 Seats", image: "/cars/suv.png", type: "Spiritual", bgColor: "bg-yellow-50" },
  { id: 31, name: "Mini Bus (26 Seater)", price: "On Request", route: "Hyderabad ⇄ Tirupati", perKm: "On Request", capacity: "26 Seats", image: "/cars/bus.png", type: "Group", bgColor: "bg-yellow-50" },

  // Heavy Vehicles & Buses
  { id: 301, name: "Force Urbania Gold", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "12 Seats", image: "/cars/urbania.png", gallery: ["/cars/urbania.png", "/cars/urbania_interior_5.png", "/cars/bus_interior_1.png", "/cars/bus_interior_2.png", "/cars/suv_interior_1.png", "/cars/sedan_interior_1.png"], type: "Premium Van", bgColor: "bg-gray-100" },
  { id: 302, name: "40 Seater Luxury AC Bus", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "40 Seats", image: "/cars/bus.png", gallery: ["/cars/bus.png", "/bus/bus1.png", "/bus/bus2.png", "/bus/bus3.png", "/bus/bus4.png"], type: "Heavy Vehicle", bgColor: "bg-gray-100" },
  { id: 303, name: "Non-AC Economy Bus", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "40 Seats", image: "/cars/bus.png", gallery: ["/cars/bus.png", "/cars/bus_interior_1.png"], type: "Economy", bgColor: "bg-gray-100" },
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

export default function Fleet({ limit = 100 }: { limit?: number }) {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [showInteriorModal, setShowInteriorModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [selectedRoute, setSelectedRoute] = useState<string>("Hyderabad ⇄ Vijayawada");

  const filteredFleet = selectedRoute === "Buses & Group Travel"
    ? fleetData.filter(car => car.route === "Buses & Group Travel")
    : [
        ...fleetData.filter(car => car.route === selectedRoute),
        ...fleetData.filter(car => car.route === "Buses & Group Travel")
      ];

  const activeItem = viewIndex !== null ? filteredFleet[viewIndex] : null;

  const handleNext = () => {
    setViewIndex((viewIndex! + 1) % filteredFleet.length);
    setGalleryIndex(0);
  };
  const handlePrev = () => {
    setViewIndex((viewIndex! - 1 + filteredFleet.length) % filteredFleet.length);
    setGalleryIndex(0);
  };

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
                      setGalleryIndex(0);
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
                <div className={`relative h-72 sm:h-80 md:h-96 ${car.bgColor} rounded-[3.5rem] p-4 flex items-center justify-center overflow-hidden`}>
                   <Image src={car.image} alt={car.name} fill className="object-contain p-2 lg:p-6 transform group-hover:scale-125 group-hover:translate-x-4 transition-all duration-1000 ease-out" />
                   <div className="absolute top-8 left-8 bg-blue-950 text-white text-[12px] font-black px-5 py-2 rounded-2xl uppercase tracking-widest shadow-xl z-20">{car.type}</div>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950 mb-4 leading-tight tracking-tighter">{car.name}</h4>
                  <div className="flex flex-col mb-8">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price Start</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-5xl font-black text-blue-950 tracking-tighter leading-none">{car.price}</span>
                      <span className="text-sm font-bold text-orange-500">({car.perKm})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm font-bold text-slate-400 border-b border-slate-100 pb-8">
                    <span className="flex items-center gap-2"><Users size={18} className="text-blue-500" /> {car.capacity}</span>
                    <span className="flex items-center gap-2 font-black text-blue-950 tracking-widest">
                       <ShieldCheck size={18} className="text-orange-500" /> 100% SECURE
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    {(car.id === 5 || car.id === 301 || car.id === 12 || car.id === 302) && (
                      <button 
                        onClick={() => {
                          setViewIndex(idx);
                          setGalleryIndex(0);
                          setShowInteriorModal(true);
                        }}
                        className="flex-grow bg-orange-100 text-orange-600 font-black text-xs py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        <Sparkles size={16} /> VIEW CABIN INTERIOR
                      </button>
                    )}
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setViewIndex(idx);
                        setGalleryIndex(0);
                        setShowInteriorModal(false);
                      }}
                      className="bg-blue-950 p-5 rounded-2xl text-white hover:bg-orange-500 transition-all flex items-center justify-center gap-3 font-black text-xs tracking-widest px-8"
                    >
                      DETAILS <ArrowRight size={20} />
                    </motion.button>
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
                    Every Ride is a <br /> <span className="text-orange-500 italic">Fast car Travels</span> Promise.
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
            className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/95 backdrop-blur-3xl p-4 sm:p-12 flex items-start sm:items-center justify-center pt-32 pb-12"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] w-[95%] sm:w-[92%] md:w-[85%] max-w-4xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row border-[4px] sm:border-[6px] border-white/20"
            >
              <button onClick={() => setViewIndex(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-orange-500 z-[300] bg-white/90 backdrop-blur-md p-2.5 rounded-xl transition-colors shadow-lg border border-slate-100"><X size={20} /></button>
              
              <div className={`${showInteriorModal ? 'lg:w-full' : 'lg:w-1/2'} p-3 sm:p-10 ${activeItem.bgColor} flex flex-col items-center justify-center relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden transition-all duration-500`}>
                 <AnimatePresence mode="wait">
                    <motion.div 
                       key={galleryIndex}
                       initial={{ opacity: 0, scale: 1.1 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="relative w-full h-full"
                    >
                       <Image 
                          src={showInteriorModal && activeItem.gallery ? activeItem.gallery[galleryIndex + 1] : (activeItem.gallery ? activeItem.gallery[galleryIndex] : activeItem.image)} 
                          alt={activeItem.name} 
                          fill 
                          className="object-cover rounded-[1.5rem] shadow-2xl" 
                       />
                       
                       {showInteriorModal && (
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              className="text-white space-y-2"
                            >
                               <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">Premium Feature</span>
                               <h3 className="text-lg sm:text-3xl font-black tracking-tighter">
                                  {galleryIndex === 0 && "Executive Cabin Layout"}
                                  {galleryIndex === 1 && "Luxury Seating & Space"}
                                  {galleryIndex === 2 && "Premium Entertainment"}
                                  {galleryIndex === 3 && "Climate Control Systems"}
                                  {galleryIndex === 4 && "VIP Leather Interior"}
                               </h3>
                               <p className="text-blue-100/70 font-medium text-[10px] sm:text-base leading-tight">
                                  {galleryIndex === 0 && "Ergonomic layout with premium fabric seats and individual armrests. Perfect for long-distance group travel with maximum comfort."}
                                  {galleryIndex === 1 && "Spacious cabin design with ample legroom and high-quality upholstery. Designed to provide a first-class experience for every passenger."}
                                  {galleryIndex === 2 && "State-of-the-art entertainment system with LED ceiling lighting and wide-screen TV. Enjoy movies and music on the go."}
                                  {galleryIndex === 3 && "Full climate control with roof-mounted AC vents and mood lighting for night travel. Maintains perfect temperature in all seasons."}
                                  {galleryIndex === 4 && "Executive cabin experience with extra legroom and reclining leather seats. The pinnacle of luxury for our VIP group travelers."}
                               </p>
                            </motion.div>
                         </div>
                       )}
                    </motion.div>
                 </AnimatePresence>

                 {/* Navigation controls for the internal slider */}
                 {(activeItem.gallery && activeItem.gallery.length > 1) && (
                    <>
                       <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 flex gap-2 z-10">
                          {(showInteriorModal ? activeItem.gallery.slice(1) : activeItem.gallery).map((_, i) => (
                             <button 
                                key={i} 
                                onClick={() => setGalleryIndex(i)}
                                className={`h-1.5 rounded-full transition-all ${galleryIndex === i ? 'bg-orange-500 w-12' : 'bg-white/30 w-4 hover:bg-white/50'}`}
                             />
                          ))}
                       </div>
                       <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 flex gap-2 sm:gap-3 z-[300]">
                          <button 
                             onClick={() => setGalleryIndex(prev => (prev - 1 + (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length)) % (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length))}
                             className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-white backdrop-blur-md transition-all border border-white/10"
                          >
                             <ArrowRight size={20} className="rotate-180" />
                          </button>
                          <button 
                             onClick={() => setGalleryIndex(prev => (prev + 1) % (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length))}
                             className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-white backdrop-blur-md transition-all border border-white/10"
                          >
                             <ArrowRight size={20} />
                          </button>
                       </div>
                    </>
                 )}
              </div>

              {!showInteriorModal && (
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                   <div>
                      <div className="flex gap-2 mb-4 sm:mb-6">
                         {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#f97316" color="#f97316" />)}
                         <span className="ml-2 text-orange-500 font-extrabold text-[10px] uppercase tracking-widest">(5.0 Rating)</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-blue-950 mb-3 sm:mb-4 tracking-tighter leading-[0.8] uppercase">{activeItem.name}</h2>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed border-l-4 border-orange-500 pl-4 sm:pl-6 mb-6 sm:mb-8 italic">
                         "Experience unparalleled group travel with our flagship {activeItem.name}."
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-10">
                         <div className="bg-slate-50 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex items-center gap-4 sm:gap-6">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-blue-600"><Users size={20} /></div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 sm:mb-1">Max Capacity</p>
                               <p className="text-xl sm:text-2xl font-black text-blue-950 leading-none">{activeItem.capacity}</p>
                            </div>
                         </div>
                         <div className="bg-slate-50 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex items-center gap-4 sm:gap-6">
                            <div className="bg-orange-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-orange-600"><ShieldCheck size={20} /></div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 sm:mb-1">Security Standard</p>
                               <p className="text-xl sm:text-2xl font-black text-blue-950 leading-none">100% VERIFIED</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col gap-3 sm:gap-4">
                      <motion.a 
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         href="tel:+919948924786" 
                         className="bg-blue-950 text-white font-black text-base sm:text-lg py-5 sm:py-6 rounded-[1.2rem] sm:rounded-[1.5rem] hover:bg-orange-500 transition-all text-center flex items-center justify-center gap-3 sm:gap-4 shadow-2xl"
                      >
                         <Phone size={22} /> BOOK THIS VEHICLE
                      </motion.a>
                      
                      <div className="flex gap-3 sm:gap-4">
                         <button 
                            onClick={handlePrev} 
                            className="flex-1 bg-slate-100 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 font-bold text-slate-600 text-sm"
                         >
                            <ArrowRight size={16} className="rotate-180" /> PREV
                         </button>
                         <button 
                            onClick={handleNext} 
                            className="flex-1 bg-slate-100 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 font-bold text-slate-600 text-sm"
                         >
                            NEXT <ArrowRight size={16} />
                         </button>
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
