"use client";
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarCheck, Car, HeartHandshake } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <MousePointerClick size={40} />,
    title: "Instant Search",
    desc: "Enter your locations and dates in our premium booking portal."
  },
  {
    id: 2,
    icon: <CalendarCheck size={40} />,
    title: "Get Confirmation",
    desc: "Our VIP desk verifies your vehicle and sends trip details via SMS."
  },
  {
    id: 3,
    icon: <Car size={40} />,
    title: "Chauffeur Pickup",
    desc: "A pro-certified driver arrives 15 minutes early in a sanitized car."
  },
  {
    id: 4,
    icon: <HeartHandshake size={40} />,
    title: "Elite Journey",
    desc: "Enjoy your trip with 24/7 SOS support and live GPS tracking."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-4 sm:py-8 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs"
          >
            How it works
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter">Your Journey in <br /> 4 Simple Steps.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 sm:p-12 bg-slate-50 rounded-[2rem] sm:rounded-[4rem] text-center group hover:bg-blue-950 transition-all duration-700"
            >
              <div className="text-orange-500 mb-4 sm:mb-8 group-hover:scale-110 transition-transform flex justify-center scale-75 sm:scale-100">
                {step.icon}
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-blue-950 group-hover:text-white mb-2 sm:mb-4 tracking-tighter leading-tight">
                {step.title}
              </h3>
              <p className="text-[10px] sm:text-base text-slate-500 group-hover:text-blue-100/60 font-medium leading-tight sm:leading-relaxed">
                {step.desc}
              </p>
              
              <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white shadow-xl rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-950 font-black text-sm sm:text-xl border border-slate-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
