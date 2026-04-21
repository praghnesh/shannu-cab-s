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
      <div className="pt-20">
         <div className="bg-blue-950 py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full -top-24 -right-24"></div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative z-10">OUR SERVICES</h1>
            <p className="text-blue-200/60 text-xl font-medium mt-4 relative z-10">Elite travel solutions tailored for your unique journey.</p>
         </div>
         <Services />
      </div>
    </motion.main>
  );
}
