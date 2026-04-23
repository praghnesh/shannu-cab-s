"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, History, Info, Sparkles, Navigation } from 'lucide-react';
import Image from 'next/image';

const cityData = {
   "Hyderabad": {
      history: "Founded in 1591, Hyderabad is a 400-year-old blend of Islamic heritage and futuristic tech hubs.",
      glance: "Experience the royal 'Pearl City' through its iconic monuments, world-famous biryani, and the high-tech corridors of HITEC City, all while traveling in absolute luxury.",
      places: [
         { name: "Charminar", desc: "The global icon of Hyderabad's heart.", img: "/places/charminar.png" },
         { name: "Golconda Fort", desc: "Medieval fort with acoustic magic.", img: "/places/golconda.png" },
         { name: "Hussain Sagar", desc: "Heart-shaped lake with Buddha statue.", img: "/places/hussainsagar.png" },
         { name: "Salar Jung Museum", desc: "One of the world's largest art collections.", img: "/places/salarjung.png" }
      ]
   },
   "Vijayawada": {
      history: "The commercial powerhouse of Andhra Pradesh, strategically located on the banks of the Krishna River.",
      glance: "A bustling hub of trade and spirituality, Vijayawada offers a unique blend of modern infrastructure, ancient rock-cut caves, and serene riverfront views.",
      places: [
         { name: "Prakasam Barrage", desc: "Modern engineering marvel over Krishna.", img: "/places/prakasam_barrage.png" },
         { name: "Undavalli Caves", desc: "Monolithic rock-cut temple architecture.", img: "/places/undavalli_caves.png" },
         { name: "Bhavani Island", desc: "Serene river island for recreation.", img: "/places/bhavani_island.png" },
         { name: "Kanaka Durga Temple", desc: "Sacred shrine on Indrakeeladri hill.", img: "/places/kanaka_durga.png" }
      ]
   },
   "Guntur": {
      history: "An ancient center for Buddhist learning and India's premier hub for the global chilli and spice trade.",
      glance: "Discover the vibrant blend of traditional spice commerce and spiritual heritage, featuring the ancient Amaravati stupas and the historic Kondaveedu Fort.",
      places: [
         { name: "Uppalapadu", desc: "Haven for beautiful migratory birds.", img: "/places/uppalapadu_birds.png" },
         { name: "Amaravati Stupa", desc: "Ancient Buddhist heritage site.", img: "/places/amaravati_stupa.png" },
         { name: "Kondaveedu Fort", desc: "Historic hill fort with panoramic views.", img: "/places/kondaveedu_fort.png" },
         { name: "Hinkar Tirtha", desc: "Stunning Jain temple architecture.", img: "/places/hinkar_tirtha.png" }
      ]
   },
   "Vizag": {
      history: "The 'Jewel of the East Coast', India's oldest shipyard and a major industrial and tourism powerhouse.",
      glance: "Experience where the Eastern Ghats meet the Bay of Bengal. Vizag offers pristine beaches, naval museums, and the misty hills of the Araku Valley.",
      places: [
         { name: "RK Beach", desc: "The pulse of the city's coastline.", img: "/places/rk_beach.png" },
         { name: "Araku Valley", desc: "Mist-covered hills and coffee plantations.", img: "/araku_valley.png" },
         { name: "Kursura Submarine", desc: "Unique museum inside a real submarine.", img: "/places/kursura_submarine.png" },
         { name: "Simhachalam Temple", desc: "11th-century architectural marvel.", img: "/places/simhachalam_temple.png" }
      ]
   },
   "Machilipatnam": {
      history: "A historic port town famous for its colonial legacy and the ancient birthplace of Kalamkari art.",
      glance: "Walk through history in one of India's oldest ports, featuring unique black soil beaches and the exquisite heritage of traditional block-printing.",
      places: [
         { name: "Manginapudi Beach", desc: "Unique black soil beach sanctuary.", img: "/places/machilipatnam.png" },
         { name: "Dutch Fort", desc: "Remnants of ancient colonial history.", img: "/places/dutch_fort.png" },
         { name: "Kalamkari Hub", desc: "The source of ancient block-printing.", img: "/places/kalamkari_hub.png" },
         { name: "Panduranga Temple", desc: "Magnificent temple with spiritual aura.", img: "/places/panduranga_temple.png" }
      ]
   }
};

export default function CityExplorer() {
   const [selectedCity, setSelectedCity] = useState<keyof typeof cityData>("Hyderabad");
   const [showHistory, setShowHistory] = useState(false);

   return (
      <section id="explore" className="py-24 bg-slate-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
               <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-black text-xs uppercase tracking-widest">
                     <Navigation size={14} /> City Guide
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-tight">
                     Explore <br /> <span className="text-orange-500">The Heartland.</span>
                  </h2>
               </div>

               <div className="w-full lg:w-[400px]">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Select a City to Explore</p>
                  <div className="relative">
                     <select
                        value={selectedCity}
                        onChange={(e) => {
                           setSelectedCity(e.target.value as any);
                           setShowHistory(false);
                        }}
                        className="w-full bg-white border-2 border-slate-200 px-8 py-5 rounded-[2.5rem] font-black text-xl text-blue-950 outline-none appearance-none cursor-pointer shadow-lg focus:border-orange-500 transition-all"
                     >
                        {Object.keys(cityData).map(city => (
                           <option key={city} value={city}>{city}</option>
                        ))}
                     </select>
                     <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500">
                        <ArrowRight size={24} className="rotate-90" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               <motion.div
                  key={`${selectedCity}-info`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:col-span-1 space-y-8"
               >
                  <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 h-full flex flex-col justify-between">
                     <div className="space-y-6">
                        <div className="flex justify-between items-center">
                           <h3 className="text-4xl font-black text-blue-950 tracking-tighter">{selectedCity}</h3>
                           <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setShowHistory(!showHistory)}
                              className={`p-4 rounded-2xl transition-all ${showHistory ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}
                           >
                              <History size={24} />
                           </motion.button>
                        </div>

                        <AnimatePresence mode="wait">
                           {showHistory ? (
                              <motion.div
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -10 }}
                                 className="space-y-4"
                              >
                                 <div className="flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-widest">
                                    <Sparkles size={14} /> Historical Background
                                 </div>
                                 <p className="text-slate-500 font-medium leading-relaxed italic">
                                    "{cityData[selectedCity].history}"
                                 </p>
                              </motion.div>
                           ) : (
                              <motion.div
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -10 }}
                                 className="space-y-4"
                              >
                                 <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-widest">
                                    <Info size={14} /> Quick Glance
                                 </div>
                                 <p className="text-slate-500 font-medium leading-relaxed">
                                    {cityData[selectedCity as keyof typeof cityData].glance}
                                 </p>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>

                     <a href="tel:+919948924786" className="mt-10 block w-full bg-blue-950 text-white font-black text-center py-5 rounded-[1.5rem] hover:bg-orange-500 transition-all shadow-xl uppercase tracking-widest text-sm">
                        Book Travel to {selectedCity}
                     </a>
                  </div>
               </motion.div>

               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                     {cityData[selectedCity].places.map((place, i) => (
                        <motion.div
                           layout
                           key={`${selectedCity}-${place.name}`}
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.1 }}
                           className="group relative h-72 rounded-[2.5rem] overflow-hidden shadow-xl"
                        >
                           <Image src={place.img} alt={place.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent"></div>
                           <div className="absolute bottom-8 left-8 right-8">
                              <h4 className="text-2xl font-black text-white tracking-tight mb-1">{place.name}</h4>
                              <p className="text-blue-100/60 text-xs font-bold uppercase tracking-widest">{place.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>
   );
}
