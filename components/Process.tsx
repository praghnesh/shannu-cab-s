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
    <section id="process" className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-12 bg-slate-50 rounded-[4rem] text-center group hover:bg-blue-950 transition-all duration-700"
            >
              <div className="text-orange-500 mb-8 group-hover:scale-110 transition-transform flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-3xl font-black text-blue-950 group-hover:text-white mb-4 tracking-tighter leading-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 group-hover:text-blue-100/60 font-medium leading-relaxed">
                {step.desc}
              </p>
              
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-950 font-black text-xl border border-slate-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
