"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, X, Clock, ShieldCheck, MapPin, Headphones, Heart, Star, Briefcase, Sparkles, Navigation } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "City Tour Packages",
    description: "Explore historic landmarks, shopping districts, and vibrant culture with our premium city guides and comfort rides.",
    image: "/city.png",
    detail: "Our city tours are meticulously planned to show you the best of the city in maximum comfort. Includes professional chauffeur and flexible stopovers."
  },
  {
    id: 2,
    title: "Temple & Pilgrimage",
    description: "Divine journeys to Tirupati, Srisailam, and other sacred destinations in South India with priority assistance.",
    image: "/temple.png",
    detail: "Experience spiritual journeys with peace of mind. We handle the routing and timing so you can focus on your pilgrimage. Clean, quiet vehicles guaranteed."
  },
  {
    id: 3,
    title: "Hill Station Getaways",
    description: "Experience the cool breeze of Ooty and Araku Valley. Perfect weekend escapes with hill-expert drivers.",
    image: "/ooty_hills.png",
    detail: "Navigate winding mountain roads safely with our experienced hill-station drivers. Enjoy panoramic views while we handle the terrain."
  },
  {
    id: 4,
    title: "Airport Transfers",
    description: "Extremely punctual 24/7 pickups and drops to all metropolitan airports with real-time flight tracking.",
    image: "/airport.png",
    detail: "Never miss a flight again. Our drivers track your flight in real-time to ensure they are waiting for you, regardless of delays. VIP luggage assistance included."
  },
  {
    id: 5,
    title: "Wedding & Events",
    description: "Premium decorated luxury cars for weddings and large events to make your special day grand.",
    image: "/img.png",
    detail: "Elegant transportation for couples and guests. We provide coordinated arrivals, professionally dressed chauffeurs, and customized car decorations."
  },
  {
    id: 6,
    title: "Monthly Corporate",
    description: "Fixed long-term monthly rentals for executives and staff with dedicated drivers and GPS tracking.",
    image: "/outstation.png",
    detail: "Cost-effective mobility solutions for businesses. Includes detailed trip logs, monthly invoicing, and priority fleet availability for corporate needs."
  }
];

export default function Services() {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const activeItem = viewIndex !== null ? services[viewIndex] : null;

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-white rounded-[10rem] rotate-[-5deg] mt-[-100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs sm:text-sm block"
          >
            The Fast Travels Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-blue-950 tracking-tighter leading-[0.9]"
          >
            Elite Solutions <br /> For Every Path.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl md:text-3xl font-medium leading-tight max-w-3xl mx-auto"
          >
            We don't just bridge distances; we elevate the entire journey with a 100% satisfaction guarantee.
          </motion.p>
        </div>

        {/* Extended Why Choose Us / Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-40">
           {[
             { icon: <ShieldCheck className="text-blue-600" size={32} />, label: "Secured Mobility", desc: "SOS & Live Tracking" },
             { icon: <Clock className="text-orange-500" size={32} />, label: "Elite Punctuality", desc: "Drivers reach 15m early" },
             { icon: <Briefcase className="text-blue-600" size={32} />, label: "Corp. Excellence", desc: "Business-class comfort" },
             { icon: <Sparkles className="text-orange-500" size={32} />, label: "Pristine Luxury", desc: "Daily 5-step sanitization" },
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center gap-6 hover:scale-105 transition-all group relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-blue-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <div className="bg-slate-50 p-6 rounded-[2rem] group-hover:bg-white/10 transition-colors relative z-10">
                  {item.icon}
               </div>
               <div className="relative z-10">
                  <p className="font-black text-xl tracking-tighter mb-2 group-hover:text-white transition-colors">{item.label}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/50 transition-colors leading-tight">{item.desc}</p>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-200/30 flex flex-col group border-4 border-white h-full relative"
            >
              <div 
                className="relative h-72 overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setViewIndex(idx)}
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-1000 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="text-[10px] font-black tracking-widest uppercase bg-orange-500 px-3 py-1 rounded-full mb-2 inline-block">Best Seller</span>
                   <h4 className="text-3xl font-black tracking-tighter leading-none">{service.title}</h4>
                </div>
              </div>
              <div className="p-12 flex flex-col flex-grow bg-white">
                <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-lg italic">
                  "{service.description}"
                </p>
                <div className="flex items-center justify-between gap-4">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => setViewIndex(idx)}
                     className="bg-slate-900 text-white font-black px-10 py-5 rounded-3xl hover:bg-blue-950 transition-all flex items-center justify-center gap-3 group/btn text-sm tracking-widest shadow-xl"
                   >
                     DETAILS <Navigation size={18} className="group-hover/btn:translate-x-1" />
                   </motion.button>
                   <a href="tel:+919948924786" className="bg-orange-500 p-5 rounded-3xl text-white shadow-xl hover:rotate-12 transition-transform">
                      <Phone size={24} />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Delivery Cities List - Page like feel */}
        <div className="mt-40 border-t border-slate-200 pt-20">
           <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                 <h4 className="text-4xl font-black text-blue-950 tracking-tighter mb-6 leading-none">Serving Major <br /> Intercity Links.</h4>
                 <p className="text-slate-500 font-medium text-lg mb-8">We have established premium hubs across South India to ensure faster pickups and zero-delay travel.</p>
                 <div className="flex gap-4">
                    <div className="text-center bg-blue-950 text-white p-6 rounded-3xl shrink-0">
                       <span className="text-4xl font-black block">50k+</span>
                       <span className="text-[10px] font-black uppercase text-blue-300">Trips Done</span>
                    </div>
                    <div className="text-center bg-orange-500 text-white p-6 rounded-3xl shrink-0">
                       <span className="text-4xl font-black block">100%</span>
                       <span className="text-[10px] font-black uppercase text-orange-200">Legal Permit</span>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
                 {[
                   { city: "Hyderabad", desc: "Hub Capital" }, { city: "Vijayawada", desc: "Main Terminal" },
                   { city: "Vizag", desc: "Coastal Express" }, { city: "Guntur", desc: "Fast Access" },
                   { city: "Tirupati", desc: "Pilgrim Hub" }, { city: "Rajahmundry", desc: "River Link" },
                   { city: "Kakinada", desc: "Direct Line" }, { city: "Nellore", desc: "Express Way" },
                   { city: "Warangal", desc: "Heritage Line" }, { city: "Nirmal", desc: "Express way" },
                   { city: "Tuni", desc: "Express way" }, { city: "Odisha", desc: "Border link" },
                 ].map((c) => (
                   <div key={c.city} className="space-y-1">
                      <span className="block font-black text-blue-950 text-lg tracking-tight">{c.city}</span>
                      <span className="block text-[10px] font-black text-orange-500 uppercase tracking-widest">{c.desc}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {viewIndex !== null && activeItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/98 backdrop-blur-3xl p-4 sm:p-12 flex items-center justify-center pt-24 pb-12"
          >
            <motion.div 
              initial={{ scale: 0.9, rotate: -1 }} animate={{ scale: 1, rotate:0 }}
              className="bg-white rounded-[5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row border-[15px] border-white/10"
            >
              <button onClick={() => setViewIndex(null)} className="absolute top-10 right-10 text-slate-400 hover:text-orange-500 z-50 bg-slate-100 p-4 rounded-3xl"><X size={32} /></button>
              
              <div className="md:w-1/2 relative h-80 md:h-auto min-h-[400px]">
                 <Image src={activeItem.image} alt={activeItem.title} fill className="object-cover" />
                 <div className="absolute inset-0 bg-blue-950/20"></div>
              </div>

              <div className="md:w-1/2 p-12 sm:p-20">
                 <div className="mb-10">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-xs block mb-4">Official Service Tier</span>
                    <h2 className="text-5xl font-black text-blue-950 mb-6 tracking-tighter leading-none">{activeItem.title}</h2>
                    <p className="text-slate-600 text-xl font-medium leading-relaxed border-l-8 border-orange-500 pl-8">
                      {activeItem.detail}
                    </p>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-blue-950 font-black text-lg">
                       <CheckCircle className="text-green-500" /> Professional Uniformed Chauffeur
                    </div>
                    <div className="flex items-center gap-4 text-blue-950 font-black text-lg">
                       <CheckCircle className="text-green-500" /> Free Cancellation up to 2 hours
                    </div>
                    <div className="flex items-center gap-4 text-blue-950 font-black text-lg">
                       <CheckCircle className="text-green-500" /> Real-time GPS Trip Sharing
                    </div>
                 </div>

                 <motion.a 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href="tel:+919948924786" 
                    className="mt-12 block w-full bg-blue-950 text-white font-black text-2xl py-8 rounded-[2.5rem] hover:bg-orange-500 transition-all text-center flex items-center justify-center gap-4"
                 >
                    <Star size={32} fill="currentColor" /> BOOK THIS SERVICE
                 </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
