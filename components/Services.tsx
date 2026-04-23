"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, ArrowLeft, X, Clock, ShieldCheck, MapPin, Headphones, Heart, Star, Briefcase, Sparkles, Navigation, CheckCircle } from 'lucide-react';

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
    description: "Experience the cool breeze of Ooty, Coorg, and Araku Valley. Perfect weekend escapes with hill-expert drivers starting at ₹18/Km.",
    image: "/ooty_hills.png",
    detail: "Our mountain-specialist drivers ensure a smooth ride through steep inclines and sharp hairpin bends. We offer customized 3-day and 5-day packages for all major South Indian hill stations with 24/7 roadside assistance."
  },
  {
    id: 4,
    title: "Airport Transfers",
    description: "Extremely punctual 24/7 pickups and drops starting at ₹12/Km with real-time flight tracking and zero wait-time fees.",
    image: "/airport.png",
    detail: "We cover Hyderabad (RGIA), Vijayawada (HIA), and Vizag airports. Includes 'Meet & Greet' service where our driver waits with a personalized placard. We guarantee punctuality or your next ride is 50% off."
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
  },
  {
    id: 7,
    title: "24/7 VIP Concierge",
    description: "Round-the-clock dedicated support for all your travel emergencies and custom itinerary planning.",
    image: "/city.png",
    detail: "Our VIP desk is active 24 hours a day, 7 days a week. Whether it's a last-minute 3 AM booking or a change in travel plans, our coordinators are just one call away to ensure your journey never stops."
  },
  {
    id: 8,
    title: "Luxury Wedding Rentals",
    description: "Make your special day unforgettable with our elite fleet of luxury sedans and premium convertibles.",
    image: "/luxarycars/image copy 7.png",
    gallery: [
      "/luxarycars/image.png", "/luxarycars/image copy.png", "/luxarycars/image copy 2.png",
      "/luxarycars/image copy 3.png", "/luxarycars/image copy 4.png", "/luxarycars/image copy 5.png",
      "/luxarycars/image copy 6.png", "/luxarycars/image copy 7.png", "/luxarycars/image copy 8.png",
      "/luxarycars/image copy 9.png", "/luxarycars/image copy 10.png", "/luxarycars/image copy 11.png",
      "/luxarycars/image copy 12.png"
    ],
    detail: "Our wedding collection features the finest luxury vehicles, perfectly maintained and professionally driven. We provide custom decorations, coordinated fleet arrivals, and red-carpet treatment for the couple and guests."
  }
];

export default function Services() {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const activeItem = viewIndex !== null ? services[viewIndex] : null;

  const handleNext = () => {
    if (activeItem?.gallery) {
      setGalleryIndex((prev) => (prev + 1) % activeItem.gallery!.length);
    }
  };

  const handlePrev = () => {
    if (activeItem?.gallery) {
      setGalleryIndex((prev) => (prev - 1 + activeItem.gallery!.length) % activeItem.gallery!.length);
    }
  };

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
            The Fast car Travels Standard
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-40">
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
            className="fixed inset-0 z-[2000] overflow-y-auto bg-blue-950/98 backdrop-blur-3xl p-4 sm:p-12 flex items-center justify-center pt-24 pb-12"
          >
            <motion.div 
              initial={{ scale: 0.9, rotate: -1 }} animate={{ scale: 1, rotate:0 }}
              className="bg-white rounded-[2.5rem] w-[85%] sm:w-full max-w-4xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row border-[4px] sm:border-[8px] border-white/10"
            >
              <button onClick={() => { setViewIndex(null); setGalleryIndex(0); }} className="absolute top-4 right-4 text-slate-400 hover:text-orange-500 z-50 bg-white/90 backdrop-blur-md p-2 rounded-xl transition-colors shadow-lg border border-slate-100"><X size={20} /></button>
              
              <div className="md:w-1/2 bg-slate-100 flex items-center justify-center relative h-[200px] md:h-auto overflow-hidden">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={activeItem.gallery ? activeItem.gallery[galleryIndex] : activeItem.image}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 1.05 }}
                       className="absolute inset-0"
                    >
                       <Image 
                          src={activeItem.gallery ? activeItem.gallery[galleryIndex] : activeItem.image} 
                          alt={activeItem.title} 
                          fill 
                          className="object-contain p-4" 
                       />
                    </motion.div>
                 </AnimatePresence>

                 {activeItem.gallery && (
                    <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
                       <button 
                          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white hover:bg-white/40 transition-all border border-white/20"
                       >
                          <ArrowLeft size={24} />
                       </button>
                       <button 
                          onClick={(e) => { e.stopPropagation(); handleNext(); }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white hover:bg-white/40 transition-all border border-white/20"
                       >
                          <ArrowRight size={24} />
                       </button>

                       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                          {activeItem.gallery.map((_, i) => (
                             <div 
                                key={i}
                                className={`h-1.5 rounded-full transition-all ${galleryIndex === i ? 'bg-orange-500 w-8' : 'bg-white/50 w-2'}`}
                             />
                          ))}
                       </div>
                    </div>
                 )}
              </div>

              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                 <div className="mb-4 lg:mb-6">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] block mb-2">Official Service Tier</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tighter leading-none">{activeItem.title}</h2>
                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed border-l-4 border-orange-500 pl-6">
                      {activeItem.detail}
                    </p>
                 </div>
                 
                 <div className="space-y-2 mb-6">
                    {[
                      "Professional Uniformed Chauffeur",
                      "Free Cancellation up to 2 hours",
                      "Real-time GPS Trip Sharing"
                    ].map(f => (
                      <div key={f} className="flex items-center gap-3 text-blue-950 font-black text-xs md:text-sm">
                         <CheckCircle size={16} className="text-green-500 shrink-0" /> {f}
                      </div>
                    ))}
                 </div>

                 <motion.a 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    href="tel:+919948924786" 
                    className="mt-8 flex w-full bg-blue-950 text-white font-black text-base py-4 rounded-[1rem] hover:bg-orange-500 transition-all items-center justify-center gap-2 shadow-2xl"
                 >
                    <Star size={16} fill="currentColor" /> BOOK THIS SERVICE
                 </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
