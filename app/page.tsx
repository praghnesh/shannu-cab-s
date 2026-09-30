"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, MapPin, X, ZoomIn, Phone, CheckCircle, Navigation, Shield, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CityExplorer from '@/components/CityExplorer';
import Tariffs from '@/components/Tariffs';

export default function Home() {
   const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

   return (
      <div className="bg-white">
         <Hero />
         <Fleet limit={30} />
         <Tariffs />
         <Services />
         <Process />

         {/* Brand Trust Bar */}
         <div className="bg-slate-50 py-4 sm:py-8 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-16 opacity-70">
               {["Premium Standard", "Govt. Verified", "24/7 Security Hub", "Top Rated 2024", "South India Expert"].map(brand => (
                  <span key={brand} className="font-black text-sm sm:text-lg tracking-tight text-blue-950 uppercase italic flex items-center gap-2">
                     <CheckCircle size={16} className="text-orange-500" />
                     {brand}
                  </span>
               ))}
            </div>
         </div>

         {/* Official Head Office & Direct Counter Banners */}
         <section className="py-8 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-8 sm:mb-12">
                  <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs block mb-2">
                     Verified Head Office & Fleet Hub
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tighter">
                     AMARAVATHI FAST <span className="text-orange-500">CAR TRAVELS</span>
                  </h2>
                  <p className="text-slate-600 font-medium max-w-3xl mx-auto text-sm sm:text-base mt-2">
                     Brundavanam Colony, Beside Chandana Grands, MG Road, Vijayawada - 520010 · Prop: SK. Hassan
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                     <a 
                        href="tel:+919948924786"
                        className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-full shadow-md transition-all"
                     >
                        <Phone size={14} className="text-orange-400" /> Call Prop. SK. Hassan: 9948924786
                     </a>
                     <a 
                        href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-full shadow-md transition-all"
                     >
                        WhatsApp: 9393591444
                     </a>
                  </div>
               </div>

               {/* Official Fleet & Office Photo Banners */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Banner 3: Red Fleet Board */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-red-900 aspect-[16/10] sm:aspect-[16/10]"
                     onClick={() => setLightbox({ src: "/promo-banner-3.png", alt: "Amaravathi Fast Car Travels Vijayawada MG Road Office Banner" })}
                  >
                     <Image 
                        src="/promo-banner-3.png" 
                        alt="Amaravathi Fast Car Travels Vijayawada MG Road Office Banner"
                        fill
                        className="object-contain bg-[#e51d24] group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                        <span className="text-white text-xs sm:text-sm font-bold bg-orange-500 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                           <ZoomIn size={14} /> Click to View Full Banner
                        </span>
                        <span className="text-white/90 text-xs font-semibold">Vijayawada MG Road</span>
                     </div>
                  </motion.div>

                  {/* Banner 4: Blue Sky SK Hassan Board */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-sky-900 aspect-[16/10] sm:aspect-[16/10]"
                     onClick={() => setLightbox({ src: "/promo-banner-4.jpg", alt: "Amaravathi Fast Cars & Travels - Prop SK Hassan Banner" })}
                  >
                     <Image 
                        src="/promo-banner-4.jpg" 
                        alt="Amaravathi Fast Cars & Travels - Prop SK Hassan Banner"
                        fill
                        className="object-contain bg-[#1c5d99] group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                        <span className="text-white text-xs sm:text-sm font-bold bg-orange-500 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                           <ZoomIn size={14} /> Click to View Full Banner
                        </span>
                        <span className="text-white/90 text-xs font-semibold">Prop. SK. Hassan · 9948924786</span>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         <CityExplorer />

         {/* Doorstep Taxi & Live GPS Showcase */}
         <section className="py-8 sm:py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-10">
                  <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs block mb-2">Smart Intercity Mobility</span>
                  <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tighter">
                     DOORSTEP PICKUP & <span className="text-orange-500">LIVE GPS CABS</span>
                  </h2>
                  <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm sm:text-base mt-2">
                     Whether you need an instant airport drop, outstation family trip, or corporate taxi, our verified chauffeurs are just a call away.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Taxi App 1: Live GPS */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all group"
                  >
                     <div 
                        className="relative w-full h-48 sm:h-56 mb-4 rounded-2xl overflow-hidden bg-white p-2 border border-slate-200/60 cursor-pointer"
                        onClick={() => setLightbox({ src: "/taxi-app-1.png", alt: "Live GPS Map and Taxi Tracking" })}
                     >
                        <Image 
                           src="/taxi-app-1.png" 
                           alt="Live GPS Map and Taxi Tracking" 
                           fill 
                           className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                        />
                     </div>
                     <h3 className="text-xl font-black text-blue-950 mb-2">Live GPS Route Tracking</h3>
                     <p className="text-xs sm:text-sm text-slate-500 font-medium">Real-time driver updates and zero route deviation for complete passenger peace of mind.</p>
                  </motion.div>

                  {/* Taxi App 3: Luggage & Doorstep */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all group"
                  >
                     <div 
                        className="relative w-full h-48 sm:h-56 mb-4 rounded-2xl overflow-hidden bg-white p-2 border border-slate-200/60 cursor-pointer"
                        onClick={() => setLightbox({ src: "/taxi-app-3.png", alt: "Doorstep Pickup with Baggage Assistance" })}
                     >
                        <Image 
                           src="/taxi-app-3.png" 
                           alt="Doorstep Pickup with Baggage Assistance" 
                           fill 
                           className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                        />
                     </div>
                     <h3 className="text-xl font-black text-blue-950 mb-2">Luggage & Doorstep Assist</h3>
                     <p className="text-xs sm:text-sm text-slate-500 font-medium">Polite, uniformed chauffeurs arrive 15 mins early to assist with luggage loading and seating.</p>
                  </motion.div>

                  {/* Taxi App 4: Affordable Doorstep */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all group"
                  >
                     <div 
                        className="relative w-full h-48 sm:h-56 mb-4 rounded-2xl overflow-hidden bg-white p-2 border border-slate-200/60 cursor-pointer"
                        onClick={() => setLightbox({ src: "/taxi-app-4.png", alt: "Affordable Cab Services at Doorstep" })}
                     >
                        <Image 
                           src="/taxi-app-4.png" 
                           alt="Affordable Cab Services at Doorstep" 
                           fill 
                           className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                        />
                     </div>
                     <h3 className="text-xl font-black text-blue-950 mb-2">Guaranteed Lowest Tariffs</h3>
                     <p className="text-xs sm:text-sm text-slate-500 font-medium">Transparent per-kilometer and one-way fixed packages with zero hidden surge pricing.</p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Massive Trust Reinforcement Section */}
         <section className="py-6 sm:py-16 bg-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/banner.png')] opacity-5 bg-cover bg-fixed"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-10">
                  <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight md:leading-[0.9]">
                     WHY 50,000+ TRUST <br /> <span className="text-orange-500">AMARAVATHI FAST CAR TRAVELS</span>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-12 mt-10 sm:mt-20">
                     <div className="p-6 sm:p-10 bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col items-center">
                        <ShieldCheck className="text-orange-500 mb-4 sm:mb-6 scale-75 sm:scale-100" size={64} />
                        <h4 className="text-xl sm:text-3xl font-black text-white mb-2 sm:mb-4">Total Security</h4>
                        <p className="text-blue-100/60 text-xs sm:text-lg">Every trip is monitored in real-time by our central control hub for absolute safety.</p>
                     </div>
                     <div className="p-6 sm:p-10 bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col items-center">
                        <Clock className="text-orange-500 mb-4 sm:mb-6 scale-75 sm:scale-100" size={64} />
                        <h4 className="text-xl sm:text-3xl font-black text-white mb-2 sm:mb-4">Zero Delay Policy</h4>
                        <p className="text-blue-100/60 text-xs sm:text-lg">We guarantee punctuality. Our drivers arrive 15 minutes before your scheduled pickup.</p>
                     </div>
                     <div className="p-6 sm:p-10 bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all col-span-2 md:col-span-1 flex flex-col items-center">
                        <Star className="text-orange-500 mb-4 sm:mb-6 scale-75 sm:scale-100" size={64} />
                        <h4 className="text-xl sm:text-3xl font-black text-white mb-2 sm:mb-4">5-Star Standards</h4>
                        <p className="text-blue-100/60 text-xs sm:text-lg">Daily sanitization and deep cleaning protocols follow international luxury standards.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* VIP Premium Offer Section */}
         <section className="bg-orange-500 py-6 sm:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
               <div className="text-center lg:text-left text-white max-w-xl">
                  <span className="font-black tracking-[0.3em] uppercase text-xs mb-3 block text-blue-950">Limited Executive Deal</span>
                  <h3 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter leading-none">
                     EXPERIENCE ELITE <br />
                     <span className="underline decoration-blue-950/20 underline-offset-8">AT 10% DISCOUNT</span>
                  </h3>
                  <p className="text-white/90 text-base sm:text-xl font-medium mb-8">
                     Book any intercity round-trip today and unlock premium corporate pricing. Verified Sedans and SUVs available 24/7.
                  </p>
                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="tel:+919948924786"
                     className="inline-flex items-center gap-4 bg-blue-950 text-white font-black px-12 py-6 rounded-[2rem] hover:bg-blue-900 transition shadow-[0_30px_60px_rgba(30,_58,_138,_0.4)] text-xl tracking-tight"
                  >
                     CLAIM VIP OFFER <ArrowRight size={24} />
                  </motion.a>
               </div>
               
               {/* Mobile App Booking Graphic */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative w-72 sm:w-96 h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl bg-white/10 p-3 border-4 border-white/30 backdrop-blur-md flex items-center justify-center shrink-0 cursor-pointer"
                  onClick={() => setLightbox({ src: "/taxi-app-2.png", alt: "Taxi Service on Mobile Booking App" })}
               >
                  <Image 
                     src="/taxi-app-2.png" 
                     alt="Taxi Service on Mobile" 
                     fill 
                     className="object-contain p-2 hover:scale-105 transition-transform duration-700" 
                  />
               </motion.div>
            </div>
         </section>

         {/* Popular Routes & Special Route Posters */}
         <section className="py-8 sm:py-16 bg-white relative">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
               <div className="text-center mb-12">
                  <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs block mb-2">Special Intercity Offers</span>
                  <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-4">
                     VIJAYAWADA ⇄ HYDERABAD <br />
                     <span className="text-orange-500">ONE-WAY SPECIAL @ ₹5,000</span>
                  </h2>
                  <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                     All-inclusive one-way tariffs with AC Innova Crysta, Ertiga, and Sedans. Click below to inspect verified customer stories and instant booking hotline!
                  </p>
               </div>

               {/* Portrait Posters: Vijayawada to Hyderabad ₹5000 & Customer Reviews */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-16 max-w-4xl mx-auto">
                  {/* Poster 1: Customer video story poster */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="relative aspect-[3/4] sm:aspect-[2/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-slate-900 cursor-pointer"
                     onClick={() => setLightbox({ src: "/promo-banner-1.jpg", alt: "Vijayawada to Hyderabad Fast Car Travels Fare ₹5000 Customer Review" })}
                  >
                     <Image 
                        src="/promo-banner-1.jpg" 
                        alt="Vijayawada to Hyderabad Fast Car Travels Fare ₹5000" 
                        fill 
                        className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                        <span className="text-white text-xs sm:text-sm font-bold bg-orange-500 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                           <ZoomIn size={14} /> Tap to View Full Poster
                        </span>
                        <span className="text-white font-black text-sm">₹5,000 One-Way</span>
                     </div>
                  </motion.div>

                  {/* Poster 2: Premium Luxury Innova Crysta with Charminar */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.15 }}
                     className="relative aspect-[3/4] sm:aspect-[2/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-slate-900 cursor-pointer"
                     onClick={() => setLightbox({ src: "/promo-banner-2.jpg", alt: "Premium VIP Experience Innova Crysta Charminar Poster" })}
                  >
                     <Image 
                        src="/promo-banner-2.jpg" 
                        alt="Premium VIP Experience Innova Crysta Fast Car Travels" 
                        fill 
                        className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                        <span className="text-white text-xs sm:text-sm font-bold bg-orange-500 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                           <ZoomIn size={14} /> Tap to View Full Poster
                        </span>
                        <span className="text-white font-black text-sm">Call/WhatsApp: 9948924786</span>
                     </div>
                  </motion.div>
               </div>

               {/* Quick Call & Booking Bar */}
               <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-orange-50 border-2 border-orange-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                     <h4 className="text-xl sm:text-2xl font-black text-blue-950">Book Vijayawada ⇄ Hyderabad Now</h4>
                     <p className="text-xs sm:text-sm text-slate-600 font-medium">Flat ₹5,000 one-way. AC cars, experienced drivers, doorstep pickup.</p>
                  </div>
                  <div className="flex gap-3">
                     <a 
                        href="tel:+919948924786"
                        className="bg-blue-950 hover:bg-blue-900 text-white font-black px-6 py-3.5 rounded-2xl text-sm transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
                     >
                        <Phone size={16} className="text-orange-400" /> 9948924786
                     </a>
                     <a 
                        href="https://wa.me/919393591444?text=Hi%2C%20I%20want%20to%20book%20Vijayawada%20to%20Hyderabad%20cab%20for%20Rs%205000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3.5 rounded-2xl text-sm transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
                     >
                        Book on WhatsApp
                     </a>
                  </div>
               </div>

               {/* Popular Routes List */}
               <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">More Popular Outstation Routes</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                     { route: "Hyderabad to Vijayawada", price: "Starts from ₹5,000 (All Inclusive)", href: "/hyderabad-to-vijayawada-cab", featured: true },
                     { route: "Vijayawada to Hyderabad", price: "Starts from ₹5,000 (All Inclusive)", href: "/hyderabad-to-vijayawada-cab", featured: true },
                     { route: "Hyderabad to Bangalore", price: "Starts from ₹12,000", href: "/contact" },
                     { route: "Bangalore to Hyderabad", price: "Starts from ₹12,000", href: "/contact" },
                     { route: "Hyderabad to Srisailam", price: "Starts from ₹7,000", href: "/contact" },
                     { route: "Hyderabad to Vizag", price: "Starts from ₹15,000", href: "/contact" },
                     { route: "Hyderabad to Bhimavaram", price: "Starts from ₹8,000", href: "/contact" },
                     { route: "Hyderabad to Ongole", price: "Starts from ₹7,000", href: "/contact" },
                     { route: "Vijayawada to Bhimavaram", price: "Starts from ₹3,500", href: "/contact" },
                     { route: "Guntur to Hyderabad", price: "Starts from ₹5,000", href: "/contact" },
                     { route: "Hyderabad to Tirupati", price: "Starts from ₹9,999", href: "/contact" },
                     { route: "Eluru to Hyderabad", price: "Starts from ₹6,500", href: "/contact" },
                     { route: "Hyderabad to Gudivada", price: "Starts from ₹6,500", href: "/contact" }
                  ].map((item, idx) => (
                     <Link key={idx} href={item.href || "/contact"}>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: idx * 0.05 }}
                           className={`p-6 rounded-3xl border transition-all group cursor-pointer ${
                              item.featured 
                                 ? 'bg-orange-50/60 border-orange-300 hover:bg-orange-50 hover:shadow-xl' 
                                 : 'bg-slate-50 border-slate-100 hover:border-orange-500/50 hover:bg-white hover:shadow-xl'
                           }`}
                        >
                           <div className="flex items-center gap-4">
                              <div className="p-3 bg-white rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-sm">
                                 <MapPin className="text-orange-500 group-hover:text-white" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex items-center justify-between">
                                    <h4 className="font-black text-blue-950 tracking-tight">{item.route}</h4>
                                    {item.featured && (
                                       <span className="text-[10px] bg-orange-500 text-white font-black px-2 py-0.5 rounded-full uppercase">SPECIAL PLAN</span>
                                    )}
                                 </div>
                                 <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1">{item.price}</p>
                              </div>
                           </div>
                        </motion.div>
                     </Link>
                  ))}
               </div>

               <div className="mt-16 p-10 rounded-[3rem] bg-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                     <h3 className="text-2xl font-black mb-2">Need a custom route?</h3>
                     <p className="text-blue-200">We provide taxi services to any destination across South India.</p>
                  </div>
                  <a href="tel:+919948924786" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl whitespace-nowrap">
                     GET A CUSTOM QUOTE
                  </a>
               </div>
            </motion.div>
         </section>

         {/* Specialized Services SEO Section */}
         <section className="py-4 sm:py-16 bg-slate-50 relative overflow-hidden">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
               <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
                  <div className="max-w-2xl">
                     <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-6">
                        PREMIUM FLEET & <br /> <span className="text-orange-500">EXECUTIVE SERVICES</span>
                     </h2>
                     <p className="text-slate-500 text-xl font-medium">
                        From luxury wedding cars to corporate fleet rentals, we provide the most reliable transportation solutions in South India.
                     </p>
                  </div>
                  <div className="flex gap-4">
                     <div className="text-center p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
                        <span className="text-4xl font-black text-blue-950 block">500+</span>
                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Premium Cars</span>
                     </div>
                     <div className="text-center p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
                        <span className="text-4xl font-black text-blue-950 block">2k+</span>
                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Happy Clients</span>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { title: "Luxury Wedding Cars", desc: "Premium wedding car rentals in Hyderabad & Vijayawada for your special day.", tags: ["Innova Crysta", "Audi", "BMW"] },
                     { title: "Corporate Rentals", desc: "Monthly corporate car rental and executive cab services for businesses.", tags: ["Sedan", "SUV", "Executive"] },
                     { title: "Group Travel", desc: "Tempo Traveller hire & mini bus rental for family trips and tours.", tags: ["12 Seater", "Urbania", "Bus"] },
                     { title: "Airport Transfers", desc: "24/7 reliable airport taxi service for Hyderabad & Vijayawada airports.", tags: ["One-Way", "Pickup", "Drop"] },
                     { title: "Pilgrimage Tours", desc: "Temple tour packages to Tirupati, Srisailam, and other sacred sites.", tags: ["Darshan", "Package", "Guide"] },
                     { title: "Hill Station Tours", desc: "Expert hill station getaway services to Araku Valley and Ooty.", tags: ["Araku", "Ooty", "Vacation"] }
                  ].map((service, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all"
                     >
                        <h4 className="text-2xl font-black text-blue-950 mb-4">{service.title}</h4>
                        <p className="text-slate-500 font-medium mb-8 leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                           {service.tags.map(tag => (
                              <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest">{tag}</span>
                           ))}
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </section>

         {/* Testimonials */}
         <Testimonials />

         {/* Destinations Marquee (Visual Page Feel) */}
         <section className="py-8 md:py-10 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-[100vw] overflow-hidden">
               <div className="flex gap-20 animate-marquee whitespace-nowrap">
                  {[
                     "HYDERABAD · VIJAYAWADA · VIZAG · GUNTUR · NELLORE · TIRUPATI · RAJAHMUNDRY · KAKINADA · TUNI · NELLORE · OOTY · ARAKU",
                     "HYDERABAD · VIJAYAWADA · VIZAG · GUNTUR · NELLORE · TIRUPATI · RAJAHMUNDRY · KAKINADA · TUNI · NELLORE · OOTY · ARAKU"
                  ].map((text, i) => (
                     <span key={i} className="text-7xl font-black text-slate-200 tracking-tighter uppercase">{text}</span>
                  ))}
               </div>
            </div>
         </section>

         {/* Interactive Image Lightbox Modal */}
         <AnimatePresence>
            {lightbox && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                  onClick={() => setLightbox(null)}
               >
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     className="relative max-w-4xl max-h-[90vh] w-full h-[80vh] flex items-center justify-center"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <button
                        onClick={() => setLightbox(null)}
                        className="absolute -top-12 right-0 sm:-right-8 text-white hover:text-orange-400 transition-colors p-2 bg-white/10 rounded-full"
                        aria-label="Close Preview"
                     >
                        <X size={28} />
                     </button>
                     <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
                        <Image
                           src={lightbox.src}
                           alt={lightbox.alt}
                           fill
                           className="object-contain"
                           priority
                        />
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}

