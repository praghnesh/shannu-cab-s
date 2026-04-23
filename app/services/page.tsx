"use client";
import Services from '@/components/Services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="bg-blue-950 pt-32 pb-24 text-center relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-0"></div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative z-10 uppercase">OUR SERVICES</h1>
        <p className="text-blue-100/70 text-xl font-medium mt-6 max-w-2xl mx-auto relative z-10 leading-tight">Elite travel solutions tailored for your unique journey across South India.</p>
      </div>
      <Services />
    </motion.main>
  );
}
