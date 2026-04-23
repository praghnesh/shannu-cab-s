"use client";
import Fleet from '@/components/Fleet';
import { motion } from 'framer-motion';

export default function FleetPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="bg-blue-950 pt-32 pb-24 text-center relative overflow-hidden w-full">
         <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-0"></div>
         <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative z-10 uppercase">THE FLEET</h1>
         <p className="text-blue-100/70 text-xl font-medium mt-6 max-w-2xl mx-auto relative z-10 leading-tight">Premium vehicles for every distance and destination across South India.</p>
      </div>
      <Fleet />
    </motion.main>
  );
}
