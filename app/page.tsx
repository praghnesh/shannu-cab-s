"use client";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Brand Trust Bar */}
      <div className="bg-slate-50 py-10 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {["Premium Standard", "Govt. Verified", "24/7 Security", "Top Rated 2024", "South India Expert"].map(brand => (
             <span key={brand} className="font-black text-xl tracking-tighter text-blue-950 uppercase italic">{brand}</span>
           ))}
        </div>
      </div>

      <Process />
      
      <Services />
      
      {/* Massive Trust Reinforcement Section */}
      <section className="py-32 bg-blue-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/banner.png')] opacity-5 bg-cover bg-fixed"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-10">
               <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[0.9]">
                  WHY 50,000+ TRUST <br /> <span className="text-orange-500">FAST TRAVELS</span>
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
      <section className="bg-orange-500 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left text-white">
            <span className="font-black tracking-[0.3em] uppercase text-xs mb-4 block text-blue-950">Limited Executive Deal</span>
            <h3 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
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

      <Fleet limit={30} />
      
      {/* Testimonials */}
      <Testimonials />

      {/* Destinations Marquee (Visual Page Feel) */}
      <section className="py-20 bg-slate-50 overflow-hidden border-t border-slate-200">
         <div className="flex gap-20 animate-marquee whitespace-nowrap">
            {[
              "HYDERABAD · VIJAYAWADA · VIZAG · GUNTUR · NELLORE · TIRUPATI · RAJAHMUNDRY · KAKINADA · TUNI · NELLORE · OOTY · ARAKU",
              "HYDERABAD · VIJAYAWADA · VIZAG · GUNTUR · NELLORE · TIRUPATI · RAJAHMUNDRY · KAKINADA · TUNI · NELLORE · OOTY · ARAKU"
            ].map((text, i) => (
              <span key={i} className="text-7xl font-black text-slate-200 tracking-tighter uppercase">{text}</span>
            ))}
         </div>
      </section>
    </div>
  );
}
