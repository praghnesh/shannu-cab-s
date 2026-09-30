"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    image: "/taxi-app-1.png",
    title: "Instant Search",
    desc: "Enter your locations, date, and car type in our fast booking portal."
  },
  {
    id: 2,
    image: "/taxi-app-2.png",
    title: "Get Confirmation",
    desc: "Our VIP desk verifies your vehicle and confirms instantly on WhatsApp."
  },
  {
    id: 3,
    image: "/taxi-app-3.png",
    title: "Chauffeur Pickup",
    desc: "A verified driver arrives 15 minutes early at your doorstep in a sanitized car."
  },
  {
    id: 4,
    image: "/taxi-app-4.png",
    title: "Elite Journey",
    desc: "Enjoy your comfortable trip with 24/7 support and zero hidden fees."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-8 sm:py-16 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs"
          >
            How it works
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-black text-blue-950 tracking-tighter">
            Your Journey in <br /> 4 Simple Steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 sm:p-8 bg-slate-50 rounded-[2.5rem] text-center group hover:bg-blue-950 transition-all duration-500 border border-slate-100 shadow-lg flex flex-col justify-between"
            >
              {/* Step Graphic */}
              <div className="relative w-full h-36 sm:h-44 mb-4 rounded-2xl overflow-hidden bg-white p-2 shadow-sm border border-slate-100/60 group-hover:border-white/10 transition-colors">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-blue-950 group-hover:text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 group-hover:text-blue-100/70 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
              
              {/* Number Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-blue-950 font-black text-xs sm:text-sm border border-slate-200 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
