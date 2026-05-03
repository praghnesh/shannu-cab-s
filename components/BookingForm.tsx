"use client";
import { useState, useRef } from 'react';
import { MapPin, Calendar, Clock, Car, Phone, ArrowLeftRight, CheckCircle, ShieldCheck, Zap, Plus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mainTab, setMainTab] = useState("OUTSTATION");
  const [tripType, setTripType] = useState("ONE WAY");

  const [fromLoc, setFromLoc] = useState("");
  const [toLoc, setToLoc] = useState("");
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const cities = [
    "Hyderabad", "Shamshabad Airport", "Vijayawada", "Guntur", "Visakhapatnam (Vizag)", "Vizag", "Machilipatnam", 
    "Rajahmundry", "Kakinada", "Tirupati", "Warangal", "Nizamabad", "Khammam", 
    "Karimnagar", "Nellore", "Kurnool", "Anantapur", "Chittoor", "Eluru", "Ongole", 
    "Bangalore", "Chennai", "Mumbai", "Pune", "Delhi", "Amaravati", "Srisailam", 
    "Bhimavaram", "Tenali", "Proddatur", "Adoni", "Madanapalle"
  ];

  const handleSwap = () => {
    const temp = fromLoc;
    setFromLoc(toLoc);
    setToLoc(temp);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      phone: formData.get('phone'),
      pickup: fromLoc,
      drop: toLoc,
      mainCategory: mainTab,
      tripType: tripType,
      date: formData.get('date'),
      time: formData.get('time'),
      vehicle: formData.get('vehicle')
    };

    try {
      await fetch("https://formsubmit.co/ajax/fastcartravels4@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Cab Booking from ${data.phone}`,
          ...data
        })
      });
      setSuccess(true);
      
      const message = `*New Booking Request*%0A%0A*Phone:* ${data.phone}%0A*Category:* ${data.mainCategory}%0A*Trip:* ${data.tripType}%0A*From:* ${data.pickup}%0A*To:* ${data.drop}%0A*Date:* ${data.date}%0A*Time:* ${data.time}%0A*Vehicle:* ${data.vehicle}`;
      window.open(`https://wa.me/919948924786?text=${message}`, '_blank');
    } catch (error) {
      console.error("Email failed:", error);
    }

    setLoading(false);
    setTimeout(() => setSuccess(false), 8000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] w-full max-w-[480px] mx-auto border border-gray-100 overflow-hidden"
    >
      {/* Top Tabs */}
      <div className="flex bg-white border-b border-gray-100">
        {["OUTSTATION", "LOCAL", "AIRPORT"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setMainTab(tab)}
            className={`flex-1 py-4 text-xs font-black tracking-widest transition-all ${
              mainTab === tab 
                ? 'bg-blue-400 text-white' 
                : 'bg-white text-slate-500 hover:bg-slate-50'
            } first:rounded-tl-[2rem] border-r last:border-r-0 border-gray-100`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        {/* Header Label */}
        <div className="flex items-center gap-3 mb-8">
           <div className="h-[1px] flex-grow bg-blue-400"></div>
           <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest whitespace-nowrap">India's Premier Intercity Cabs</span>
           <div className="h-[1px] flex-grow bg-blue-400"></div>
        </div>

        {/* Trip Type Toggle */}
        <div className="flex bg-slate-100 rounded-xl p-1 mb-8 max-w-[300px] mx-auto">
          {["ONE WAY", "ROUND TRIP"].map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`flex-1 py-3 rounded-lg text-[10px] font-black transition-all ${
                tripType === type 
                  ? 'bg-blue-400 text-white shadow-lg shadow-blue-400/20' 
                  : 'text-slate-500'
              }`}
            >
              {type}
              <span className="block text-[7px] font-bold opacity-60">
                {type === "ONE WAY" ? "Drop-off Only" : "Return With Same Cab"}
              </span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* From Input */}
          <div className="relative bg-blue-50/30 border border-blue-100 rounded-2xl p-4 transition-all focus-within:border-blue-400 group">
             <div className="flex items-center gap-4">
                <MapPin size={20} className="text-slate-400 group-focus-within:text-blue-500" />
                <div className="flex flex-col flex-grow">
                   <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">FROM</span>
                   <input 
                      required
                      value={fromLoc}
                      onChange={(e) => {
                        setFromLoc(e.target.value);
                        setShowFromSuggestions(true);
                      }}
                      onFocus={() => setShowFromSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                      placeholder="Enter Departure City"
                      className="bg-transparent text-sm font-black text-blue-950 outline-none placeholder-slate-300"
                   />
                </div>
             </div>
             
             {/* Swap Button */}
             <button 
                type="button" 
                onClick={handleSwap}
                className="absolute -bottom-4 right-6 bg-white border border-blue-100 shadow-lg rounded-full p-2 z-10 text-blue-500 hover:scale-110 transition-transform active:scale-95"
             >
                <ArrowLeftRight size={16} />
             </button>

             <AnimatePresence>
               {showFromSuggestions && fromLoc.length > 0 && (
                 <motion.div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar">
                   {cities.filter(c => c.toLowerCase().includes(fromLoc.toLowerCase())).map((city) => (
                     <button key={city} type="button" onClick={() => setFromLoc(city)} className="w-full text-left px-6 py-4 hover:bg-blue-50 font-bold text-blue-950 text-xs border-b border-gray-50 last:border-0">{city}</button>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          {/* To Input */}
          <div className="relative bg-blue-50/30 border border-blue-100 rounded-2xl p-4 transition-all focus-within:border-blue-400 group">
             <div className="flex items-center gap-4">
                <MapPin size={20} className="text-slate-400 group-focus-within:text-blue-500" />
                <div className="flex flex-col flex-grow">
                   <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">TO</span>
                   <input 
                      required
                      value={toLoc}
                      onChange={(e) => {
                        setToLoc(e.target.value);
                        setShowToSuggestions(true);
                      }}
                      onFocus={() => setShowToSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                      placeholder="Enter Destination City"
                      className="bg-transparent text-sm font-black text-blue-950 outline-none placeholder-slate-300"
                   />
                </div>
             </div>

             <AnimatePresence>
               {showToSuggestions && toLoc.length > 0 && (
                 <motion.div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar">
                   {cities.filter(c => c.toLowerCase().includes(toLoc.toLowerCase())).map((city) => (
                     <button key={city} type="button" onClick={() => setToLoc(city)} className="w-full text-left px-6 py-4 hover:bg-blue-50 font-bold text-blue-950 text-xs border-b border-gray-50 last:border-0">{city}</button>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          {/* Add Stops */}
          <button type="button" className="inline-flex items-center gap-2 text-blue-400 text-[10px] font-black border border-blue-100 px-4 py-2 rounded-lg hover:bg-blue-50">
             <Plus size={14} /> Add Stops
          </button>

          {/* Date & Time Combine */}
          <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 transition-all focus-within:border-blue-400 flex items-center gap-4 group">
             <Calendar size={20} className="text-slate-400 group-focus-within:text-blue-500" />
             <div className="flex flex-col flex-grow">
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Trip Start</span>
                <div className="flex gap-4">
                   <input name="date" type="date" required className="bg-transparent text-xs font-black text-blue-950 outline-none w-full" />
                   <input name="time" type="time" required className="bg-transparent text-xs font-black text-blue-950 outline-none w-full" />
                </div>
             </div>
          </div>

          {/* Phone Number Field */}
          <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 transition-all focus-within:border-blue-400 flex items-center gap-4 group">
             <Phone size={20} className="text-slate-400 group-focus-within:text-blue-500" />
             <div className="flex flex-col flex-grow">
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Contact Number</span>
                <input name="phone" type="tel" required placeholder="+91" className="bg-transparent text-sm font-black text-blue-950 outline-none placeholder-slate-300" />
             </div>
          </div>

          {/* 3 Car Dropdowns / Selection */}
          <div className="space-y-3 pt-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Select Preferred Vehicle Class</span>
            <div className="grid grid-cols-1 gap-2">
               <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-xl border border-slate-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm"><Car size={16} className="text-blue-400" /></div>
                  <select name="vehicle" className="bg-transparent flex-grow text-xs font-black text-blue-950 outline-none py-2 cursor-pointer">
                     <option value="">Choose your ride...</option>
                     <optgroup label="SEDANS">
                        <option value="Swift Dzire">Swift Dzire (4 Seats)</option>
                        <option value="Etios">Toyota Etios (4 Seats)</option>
                     </optgroup>
                     <optgroup label="SUVS">
                        <option value="Ertiga">Maruti Ertiga (6 Seats)</option>
                        <option value="Innova">Toyota Innova (7 Seats)</option>
                        <option value="Innova Crysta">Innova Crysta (Premium)</option>
                     </optgroup>
                     <optgroup label="GROUP TRAVEL">
                        <option value="Tempo Traveller">Tempo Traveller (12+ Seats)</option>
                        <option value="Luxury Bus">Luxury AC Bus (40 Seats)</option>
                     </optgroup>
                  </select>
               </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading} 
            className="w-full bg-orange-500 text-white font-black text-sm uppercase tracking-widest py-5 rounded-[1.2rem] shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all flex items-center justify-center gap-3 mt-6"
          >
            {loading ? 'PROCESSING...' : 'Explore Cabs'}
          </motion.button>
        </form>

        {/* Success Message */}
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-green-50 text-green-600 rounded-xl text-center text-[10px] font-black border border-green-100">
             BOOKING REQUEST SENT SUCCESSFULLY!
          </motion.div>
        )}

        {/* Trust Signals Footer */}
        <div className="mt-8 pt-6 border-t border-gray-50 grid grid-cols-3 gap-2">
           <div className="flex flex-col items-center gap-1.5">
              <CheckCircle size={14} className="text-blue-400" />
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest text-center">Verified Drivers</span>
           </div>
           <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-400" />
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest text-center">Transparent Pricing</span>
           </div>
           <div className="flex flex-col items-center gap-1.5">
              <Zap size={14} className="text-blue-400" />
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest text-center">24x7 Support</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
