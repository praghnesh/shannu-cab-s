"use client";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

import About from '@/components/About';
import CityExplorer from '@/components/CityExplorer';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Brand Trust Bar */}
      <div className="bg-slate-50 py-10 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {["Premium Standard", "Govt. Verified", "24/7 Security", "Top Rated 2024", "South India Expert"].map(brand => (
             <span key={brand} className="font-black text-xl tracking-tighter text-blue-950 uppercase italic">{brand}</span>
           ))}
        </div>
      </div>

      <Process />
      <CityExplorer />
      <Services />
      
      {/* Massive Trust Reinforcement Section */}
      <section className="py-12 md:py-16 bg-blue-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/banner.png')] opacity-5 bg-cover bg-fixed"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-10">
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[0.9]">
                  WHY 50,000+ TRUST <br /> <span className="text-orange-500">FAST CAR TRAVELS</span>
               </h2>
               <div className="grid md:grid-cols-3 gap-12 mt-20">
                  <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
                     <ShieldCheck className="text-orange-500 mx-auto mb-6" size={64} />
                     <h4 className="text-3xl font-black text-white mb-4">Total Security</h4>
                     <p className="text-blue-100/60 text-lg">Every trip is monitored in real-time by our central control hub for absolute safety.</p>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
                     <Clock className="text-orange-500 mx-auto mb-6" size={64} />
                     <h4 className="text-3xl font-black text-white mb-4">Zero Delay Policy</h4>
                     <p className="text-blue-100/60 text-lg">We guarantee punctuality. Our drivers arrive 15 minutes before your scheduled pickup.</p>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
                     <Star className="text-orange-500 mx-auto mb-6" size={64} />
                     <h4 className="text-3xl font-black text-white mb-4">5-Star Standards</h4>
                     <p className="text-blue-100/60 text-lg">Daily sanitization and deep cleaning protocols follow international luxury standards.</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* VIP Premium Offer Section */}
      <section className="bg-orange-500 py-10 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left text-white">
            <span className="font-black tracking-[0.3em] uppercase text-xs mb-4 block text-blue-950">Limited Executive Deal</span>
            <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
              EXPERIENCE ELITE <br />
              <span className="underline decoration-blue-950/20 underline-offset-8">AT 10% DISCOUNT</span>
            </h3>
            <p className="text-white/80 text-xl font-medium max-w-xl">
              Book any intercity round-trip today and unlock premium corporate pricing. Verified Sedans and SUVs available 24/7.
            </p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919948924786" 
            className="inline-flex items-center gap-4 bg-blue-950 text-white font-black px-16 py-8 rounded-[2.5rem] hover:bg-blue-900 transition shadow-[0_30px_60px_rgba(30,_58,_138,_0.4)] text-2xl tracking-tight"
          >
            CLAIM VIP OFFER <ArrowRight size={32} />
          </motion.a>
        </div>
      </section>

      {/* Popular Routes SEO Section */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-4">
                  POPULAR <span className="text-orange-500">INTERCITY ROUTES</span>
               </h2>
               <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                  Experience premium travel across Andhra Pradesh and Telangana with our most booked intercity cab services.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { route: "Hyderabad to Vijayawada", price: "Starts from ₹5,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Hyderabad", price: "Starts from ₹5,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Guntur", price: "Starts from ₹5,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Tirupati", price: "Starts from ₹8,999", icon: <MapPin className="text-orange-500" /> },
                  { route: "Hyderabad to Bengaluru", price: "Starts from ₹12,999", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Chennai", price: "Starts from ₹9,499", icon: <MapPin className="text-orange-500" /> },
                  { route: "Hyderabad to Srisailam", price: "Starts from ₹7,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Rajahmundry", price: "Starts from ₹4,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Hyderabad to Ongole", price: "Starts from ₹7,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Vijayawada to Bhimavaram", price: "Starts from ₹3,500", icon: <MapPin className="text-orange-500" /> },
                  { route: "Guntur to Hyderabad", price: "Starts from ₹5,000", icon: <MapPin className="text-orange-500" /> },
                  { route: "Hyderabad to Tirupati", price: "Starts from ₹9,999", icon: <MapPin className="text-orange-500" /> }
               ].map((item, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ y: -10 }}
                     className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all group"
                  >
                     <div className="mb-4">{item.icon}</div>
                     <h4 className="text-xl font-black text-blue-950 mb-2 group-hover:text-orange-500 transition-colors">{item.route}</h4>
                     <p className="text-slate-500 font-bold text-sm mb-4">{item.price}</p>
                     <div className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest">
                        Book Now <ArrowRight size={14} />
                     </div>
                  </motion.div>
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
         </div>
      </section>

      {/* Specialized Services SEO Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="px-8 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
                     <span className="text-3xl font-black text-blue-950">24/7</span>
                     <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Support</span>
                  </div>
                  <div className="px-8 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
                     <span className="text-3xl font-black text-blue-950">Elite</span>
                     <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Drivers</span>
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
                  <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
                     <h4 className="text-2xl font-black text-blue-950 mb-4">{service.title}</h4>
                     <p className="text-slate-500 font-medium mb-8 leading-relaxed">{service.desc}</p>
                     <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                           <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest">{tag}</span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Fleet limit={30} />
      
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
    </div>
  );
}
