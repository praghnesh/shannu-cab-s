"use client";
import { motion } from 'framer-motion';
import { MapPin, ArrowRightLeft, Star, Clock, ShieldCheck, Navigation } from 'lucide-react';
import Image from 'next/image';

const hyderabadPlaces = [
  { name: "Charminar", desc: "The iconic heart of Hyderabad's history.", img: "/places/charminar.png" },
  { name: "Golconda Fort", desc: "Majestic fortress with acoustic wonders.", img: "/places/golconda.png" },
  { name: "Hussain Sagar", desc: "Beautiful lake with the giant Buddha statue.", img: "/places/hussainsagar.png" },
  { name: "Ramoji Film City", desc: "The world's largest integrated film city.", img: "/img.png" },
  { name: "Birla Mandir", desc: "Stunning white marble temple on a hill.", img: "/temple.png" },
  { name: "Salat Jung Museum", desc: "A treasure trove of art and history.", img: "/city.png" },
];

export default function HyderabadRoute() {
  return (
    <section id="hyd-vja" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest">
              <Navigation size={14} /> Most Popular Route
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Vijayawada ⇄ <br /> <span className="text-orange-500">Hyderabad</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
              "Connecting the two most vibrant hubs of South India with unparalleled comfort and speed. Whether it's for business or leisure, our dedicated express line ensures you reach your destination refreshed."
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600"><Clock size={24} /></div>
                <div>
                  <p className="font-black text-blue-950">4.5 Hours</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Average Time</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-50 p-4 rounded-2xl text-orange-600"><ShieldCheck size={24} /></div>
                <div>
                  <p className="font-black text-blue-950">Express Way</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Safe Passage</p>
                </div>
              </div>
            </div>
            <a href="tel:+919948924786" className="inline-flex items-center gap-4 bg-blue-950 text-white font-black px-10 py-5 rounded-3xl hover:bg-orange-500 transition-all shadow-xl group">
              BOOK THIS ROUTE <ArrowRightLeft size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image src="/outstation.png" alt="Hyderabad Highway" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-5xl font-black tracking-tighter">Premium Highway <br /> Experience.</p>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-blue-950 tracking-tighter mb-4">Top Places to Explore in Hyderabad</h3>
            <p className="text-slate-500 font-medium">Don't just visit Hyderabad, experience it with our curated local guides.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hyderabadPlaces.map((place, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <Image src={place.img} alt={place.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <h4 className="font-black text-blue-950 tracking-tight">{place.name}</h4>
                <p className="text-xs text-slate-400 font-bold leading-tight uppercase tracking-widest">{place.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
