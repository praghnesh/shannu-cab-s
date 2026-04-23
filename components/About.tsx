"use client";
import { motion } from 'framer-motion';
import { Star, Shield, Users, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-3xl z-10">
              <Image src="/banner.png" alt="Fast car Travels Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-950/20"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-12 rounded-[3rem] shadow-2xl z-20 hidden md:block">
               <p className="text-6xl font-black tracking-tighter">15+</p>
               <p className="text-sm font-black uppercase tracking-widest opacity-80">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-8"
          >
            <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs block">Legacy & Vision</span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              More Than Just <br /> A Cab Service.
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              Founded on the principles of <strong>Speed, Safety, and Sophistication</strong>, Fast car Travels has grown into South India's premier choice for intercity mobility. We don't just move people; we move memories.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600"><Shield size={24} /></div>
                  <h4 className="font-black text-blue-950 text-xl tracking-tight">Safety First</h4>
                  <p className="text-slate-400 text-sm font-medium">Every vehicle is GPS-tracked and every driver is vetted for absolute security.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600"><Users size={24} /></div>
                  <h4 className="font-black text-blue-950 text-xl tracking-tight">Customer Centric</h4>
                  <p className="text-slate-400 text-sm font-medium">Over 50,000 happy travelers trust us for their most important journeys.</p>
               </div>
            </div>
            <div className="pt-8 border-t border-slate-200 flex items-center gap-10">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-300"></div>
                  ))}
               </div>
               <div>
                  <p className="font-black text-blue-950 tracking-tight">Trusted by 5,000+ Regulars</p>
                  <div className="flex gap-1 text-orange-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
