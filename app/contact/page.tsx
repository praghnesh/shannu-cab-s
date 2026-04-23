"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      await fetch("https://formsubmit.co/ajax/hassanbabushaik1786@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New Contact Message from ${data.name}`,
          ...data
        })
      });
      setSuccess(true);
    } catch (error) {
      console.error("Message failed:", error);
    }

    setLoading(false);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="bg-blue-950 pt-32 pb-24 text-center relative overflow-hidden w-full">
         <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-50 z-0"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none mb-8 uppercase">CONNECT <br /> WITH US</h1>
            <p className="text-blue-100/70 text-xl md:text-2xl font-medium max-w-2xl mx-auto">Have a specific travel requirement? Our VIP concierge team is ready to assist you 24/7/365 across South India.</p>
         </div>
      </div>

         <div className="max-w-7xl mx-auto px-4 py-24 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20">
               
               {/* Contact Info Side */}
               <div className="space-y-16">
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter leading-none">Fast Travels Headquarters</h2>
                     <p className="text-slate-500 text-xl font-medium leading-relaxed">Serving the elite inter-city travel needs across Andhra Pradesh, Telangana, and the entire South India belt.</p>
                  </div>

                  <div className="space-y-8">
                     <div className="flex items-center gap-8 group">
                        <div className="bg-blue-950 text-white p-6 rounded-3xl shadow-xl group-hover:bg-orange-500 transition-colors">
                           <Phone size={32} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Direct Call (24/7)</p>
                           <p className="text-3xl font-black text-blue-950 tracking-tighter hover:text-orange-500 transition-colors cursor-pointer">+91 9948924786</p>
                        </div>
                     </div>

                     <div className="flex items-center gap-8 group">
                        <div className="bg-blue-950 text-white p-6 rounded-3xl shadow-xl group-hover:bg-orange-500 transition-colors">
                           <Mail size={32} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Email Support</p>
                           <p className="text-2xl font-black text-blue-950 tracking-tighter break-all">hassanbabushaik1786@gmail.com</p>
                        </div>
                     </div>

                     <div className="flex items-center gap-8 group">
                        <div className="bg-blue-950 text-white p-6 rounded-3xl shadow-xl group-hover:bg-orange-500 transition-colors">
                           <MapPin size={32} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Main Terminals</p>
                           <p className="text-2xl font-black text-blue-950 tracking-tighter">Hyderabad & Vijayawada</p>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { icon: <Clock size={20} />, label: "Always Active", val: "24/7 Available" },
                       { icon: <ShieldCheck size={20} />, label: "Security Hub", val: "Live Tracked" },
                       { icon: <Heart size={20} />, label: "Customer Care", val: "VIP Support" },
                       { icon: <CheckCircle size={20} />, label: "Compliance", val: "100% Legal" },
                     ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all">
                           <div className="text-orange-500 mb-2">{stat.icon}</div>
                           <span className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">{stat.label}</span>
                           <span className="text-lg font-black text-blue-950 tracking-tighter leading-none">{stat.val}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Contact Form Side */}
               <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[4rem] p-10 sm:p-16 shadow-3xl border border-slate-100 relative z-10"
                  >
                     <h3 className="text-4xl font-black text-blue-950 mb-4 tracking-tighter">Send A Secure Message</h3>
                     <p className="text-slate-500 font-medium mb-10">We usually reply within 5 minutes for urgent bookings and queries.</p>

                     {success && (
                        <div className="mb-8 bg-green-50 text-green-700 p-6 rounded-3xl flex items-center gap-4 font-black text-xl border border-green-200">
                           <CheckCircle size={32} /> MESSAGE SENT SUCCESSFULLY!
                        </div>
                     )}

                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Full Name</label>
                              <input name="name" required className="w-full bg-slate-50 rounded-2xl py-5 px-8 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-transparent transition-all font-bold text-blue-950" placeholder="John Doe" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Phone Number</label>
                              <input name="phone" required type="tel" className="w-full bg-slate-50 rounded-2xl py-5 px-8 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-transparent transition-all font-bold text-blue-950" placeholder="+91" />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Email Address</label>
                           <input name="email" required type="email" className="w-full bg-slate-50 rounded-2xl py-5 px-8 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-transparent transition-all font-bold text-blue-950" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Your Requirement</label>
                           <textarea name="message" required rows={4} className="w-full bg-slate-50 rounded-3xl py-6 px-8 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-transparent transition-all font-bold text-blue-950 resize-none" placeholder="How can our VIP team help you?"></textarea>
                        </div>

                        <motion.button 
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           type="submit"
                           disabled={loading}
                           className="w-full bg-blue-950 text-white font-black text-2xl py-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(23,_37,_84,_0.3)] hover:bg-orange-500 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                        >
                           {loading ? "SENDING..." : <><Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /> SUBMIT MESSAGE</>}
                        </motion.button>
                     </form>
                  </motion.div>
                  <div className="absolute inset-0 bg-blue-950 rounded-[5rem] translate-x-4 translate-y-4 -z-0"></div>
               </div>
            </div>
         </div>
      </motion.main>
   );
}
