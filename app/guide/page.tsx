"use client";
import { motion } from 'framer-motion';
import { Navigation, Map, Shield, Info, ArrowRight, Camera, Coffee, Fuel } from 'lucide-react';
import Image from 'next/image';

const guides = [
  {
    route: "Hyderabad ⇄ Vijayawada",
    distance: "275 Km",
    time: "5-6 Hours",
    stops: "Suryapet, Nandigama",
    image: "/banner.png",
    description: "The lifeline of Andhra-Telangana connectivity. This route follows the highly developed NH-65, offering a smooth driving experience with multiple high-end amenities along the way.",
    tips: "NH65 is highly maintained. Early morning departures are recommended to avoid city traffic at both ends. Suryapet is the best hub for multi-cuisine food stops.",
    highlights: ["Suryapet Food Courts", "Kanakadurga Varadhi", "Vijayawada City Skyline"]
  },
  {
    route: "Vijayawada ⇄ Vizag",
    distance: "350 Km",
    time: "7-8 Hours",
    stops: "Eluru, Rajahmundry, Tuni",
    image: "/banner.png",
    description: "A scenic coastal corridor that takes you through the heart of the Godavari districts. Experience the lush green fields of East and West Godavari before hitting the Vizag coast.",
    tips: "The scenic coastal highway offers great views. Rajahmundry is a perfect midpoint for a lunch break near the iconic Godavari bridge.",
    highlights: ["Godavari Arch Bridge", "Rajahmundry Pushkar Ghat", "Coastal Highway Views"]
  },
  {
    route: "Hyderabad ⇄ Tirupati",
    distance: "560 Km",
    time: "10-11 Hours",
    stops: "Kurnool, Nandyal",
    image: "/banner.png",
    description: "The most traveled pilgrimage route in South India. Our drivers are specially trained for the long stretch and mountain roads of Tirumala.",
    tips: "We provide special 24-hour packages for pilgrimage trips. Drivers are well-versed with temple rules and recommended darshan timings.",
    highlights: ["Kurnool Kondareddy Buruju", "Nallamala Forest View", "Alipiri Entry Point"]
  },
  {
     route: "Vijayawada ⇄ Guntur",
     distance: "35 Km",
     time: "45-60 Mins",
     stops: "Mangalagiri",
     image: "/banner.png",
     description: "The administrative and commercial link of the Amaravati capital region. A fast commute used daily by thousands of business professionals.",
     tips: "Fastest inter-city link. Perfect for business meetings and quick commutes. The Mangalagiri temple is a recommended 15-minute quick visit.",
     highlights: ["Mangalagiri Temple", "Benz Circle", "Prakasam Barrage"]
  }
];

export default function GuidePage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="pt-20">
         <div className="bg-blue-950 py-32 sm:py-48 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-20 bg-[url('/banner.png')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="max-w-5xl mx-auto relative z-10 px-4">
               <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-orange-500 font-black tracking-[0.5em] uppercase text-sm mb-6 block">The Ultimate Explorer</motion.span>
               <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-10">CITY TO CITY <br /> <span className="text-orange-500">EXPERIENCE</span></h1>
               <p className="text-blue-100/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">Forget just getting there. Our professional guides ensure you experience every mile with safety, comfort, and local insight.</p>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 py-32">
            <div className="grid gap-24">
               {guides.map((guide, i) => (
                  <motion.div 
                    key={guide.route}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row gap-16 items-center"
                  >
                     <div className={`lg:w-1/2 relative h-[400px] sm:h-[500px] w-full rounded-[4rem] overflow-hidden shadow-3xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <Image src={guide.image} alt={guide.route} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 text-white">
                           <div className="flex gap-4 mb-4">
                              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black uppercase flex items-center gap-2"><Navigation size={14} /> {guide.distance}</span>
                              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black uppercase flex items-center gap-2"><Map size={14} /> {guide.time}</span>
                           </div>
                        </div>
                     </div>

                     <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">{guide.route}</h2>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed italic">"{guide.description}"</p>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                              <h4 className="text-blue-950 font-black text-lg mb-4 flex items-center gap-3"><Camera size={20} className="text-orange-500" /> HIGHLIGHTS</h4>
                              <ul className="space-y-2">
                                 {guide.highlights.map(h => <li key={h} className="text-slate-500 font-bold text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {h}</li>)}
                              </ul>
                           </div>
                           <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                              <h4 className="text-blue-950 font-black text-lg mb-4 flex items-center gap-3"><Coffee size={20} className="text-orange-500" /> RECOMMENDED</h4>
                              <p className="text-slate-500 font-bold text-sm">{guide.stops}</p>
                           </div>
                        </div>

                        <div className="bg-orange-500 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                           <h4 className="text-blue-950 font-black text-xl mb-4 flex items-center gap-3 relative z-10"><Info size={24} /> EXPERT DRIVER TIP</h4>
                           <p className="text-white text-lg font-bold leading-relaxed relative z-10">{guide.tips}</p>
                        </div>

                        <motion.a 
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           href="tel:+919948924786"
                           className="inline-flex items-center gap-4 bg-blue-950 text-white font-black px-12 py-6 rounded-3xl text-xl tracking-tight shadow-xl"
                        >
                           BOOK THIS ROUTE <ArrowRight size={24} />
                        </motion.a>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* General Travel Security Section */}
         <div className="bg-slate-50 py-32 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
               <h3 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-16">TRAVELING WITH CONFIDENCE</h3>
               <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { icon: <Shield />, label: "Safety Protocols", desc: "Rigorous driver vetting" },
                    { icon: <Navigation />, label: "Live Hub", desc: "Real-time dispatch team" },
                    { icon: <Fuel />, label: "Vehicle Check", desc: "Before every long trip" },
                    { icon: <Shield />, label: "SOS Link", desc: "In-app safety triggers" },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col items-center bg-white p-10 rounded-[3rem] shadow-xl border border-slate-200/50">
                       <div className="text-orange-500 mb-4 scale-150">{f.icon}</div>
                       <p className="font-black text-blue-950 mb-2 uppercase tracking-tighter">{f.label}</p>
                       <p className="text-slate-400 text-xs font-bold">{f.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </motion.main>
  );
}
