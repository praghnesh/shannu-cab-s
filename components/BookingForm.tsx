"use client";
import { useState, useRef } from 'react';
import { MapPin, Calendar, Clock, Car, Phone, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tripTab, setTripTab] = useState("Outstation One-Way");

  const [fromLoc, setFromLoc] = useState("");
  const [toLoc, setToLoc] = useState("");
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const cities = [
    "Hyderabad", "Vijayawada", "Guntur", "Visakhapatnam (Vizag)", "Vizag", "Machilipatnam", 
    "Rajahmundry", "Kakinada", "Tirupati", "Warangal", "Nizamabad", "Khammam", 
    "Karimnagar", "Nellore", "Kurnool", "Anantapur", "Chittoor", "Eluru", "Ongole", 
    "Bangalore", "Chennai", "Mumbai", "Pune", "Delhi", "Amaravati", "Srisailam", 
    "Bhimavaram", "Tenali", "Proddatur", "Adoni", "Madanapalle"
  ];

  const pickupRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLInputElement>(null);

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
      pickup: formData.get('pickup'),
      drop: formData.get('drop'),
      tripType: tripTab,
      date: formData.get('date'),
      time: formData.get('time'),
      vehicle: formData.get('vehicle')
    };

    try {
      await fetch("https://formsubmit.co/ajax/hassanbabushaik1786@gmail.com", {
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
    } catch (error) {
      console.error("Email failed:", error);
    }

    setLoading(false);
    (e.target as HTMLFormElement).reset();
    
    setTimeout(() => {
        setSuccess(false);
    }, 8000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] w-full max-w-5xl mx-auto border border-gray-100"
    >
      {/* Smooth Horizontal Scrolling Tabs */}
      <div className="bg-gray-50 rounded-t-2xl border-b border-gray-100 overflow-hidden">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4">
          {["Outstation One-Way", "Round Trip", "Airport Transfer", "Local Hourly"].map((tab) => (
            <button 
              key={tab}
              type="button"
              onClick={() => setTripTab(tab)}
              className={`flex-1 min-w-[200px] sm:min-w-max px-8 py-6 font-black text-xs uppercase tracking-tighter transition-all flex flex-col items-center justify-center gap-2 border-r last:border-r-0 snap-center
                ${tripTab === tab 
                  ? 'bg-white text-blue-950 border-t-4 border-t-orange-500 shadow-sm z-10' 
                  : 'text-slate-400 hover:text-blue-950 bg-gray-50/50 hover:bg-gray-100 border-t-4 border-t-transparent'} last:pr-12`}
            >
              <div className={`p-2 rounded-xl transition-colors ${tripTab === tab ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                 {tab.includes('Airport') ? <MapPin size={18} /> : <Car size={18} />}
              </div>
              <span className="whitespace-nowrap">{tab}</span>
            </button>
          ))}
        </div>
      </div>
      
      {success && (
        <div className="m-6 bg-green-50 text-green-800 p-4 rounded-lg text-center font-medium border border-green-200">
          Booking process initiated successfully.
        </div>
      )}

      <form 
        onSubmit={handleSubmit} 
        className="p-6 sm:p-8"
      >
        
        {/* Row 1: Locations & Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_1fr_1fr] gap-4 mb-6 items-center">
          
          <div className="relative border border-gray-200 rounded-xl p-3 hover:bg-blue-50/50 transition cursor-text group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="text-xs font-bold text-gray-500 group-focus-within:text-blue-600 block mb-1">FROM</span>
            <input 
              name="pickup" 
              ref={pickupRef} 
              required 
              value={fromLoc} 
              onChange={(e) => {
                setFromLoc(e.target.value);
                setShowFromSuggestions(true);
              }}
              onFocus={() => setShowFromSuggestions(true)}
              onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
              className="w-full bg-transparent text-xl font-bold text-gray-900 outline-none placeholder-gray-300" 
              placeholder="City or Airport" 
              autoComplete="off"
            />
            
            <AnimatePresence>
              {showFromSuggestions && fromLoc.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar"
                >
                  {cities.filter(c => c.toLowerCase().includes(fromLoc.toLowerCase())).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setFromLoc(city);
                        setShowFromSuggestions(false);
                      }}
                      className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors font-bold text-blue-950 text-sm border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={14} className="text-orange-500" />
                        {city}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Swap Icon */}
          <button type="button" onClick={handleSwap} className="hidden md:flex bg-white shadow border border-gray-100 rounded-full p-2 z-10 -mx-6 text-blue-500 hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all cursor-pointer outline-none focus:ring-2 focus:ring-blue-500">
            <ArrowLeftRight size={20} />
          </button>

          <div className="relative border border-gray-200 rounded-xl p-3 hover:bg-blue-50/50 transition cursor-text group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="text-xs font-bold text-gray-500 group-focus-within:text-blue-600 block mb-1">TO</span>
            <input 
              name="drop" 
              ref={dropRef} 
              required 
              value={toLoc} 
              onChange={(e) => {
                setToLoc(e.target.value);
                setShowToSuggestions(true);
              }}
              onFocus={() => setShowToSuggestions(true)}
              onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
              className="w-full bg-transparent text-xl font-bold text-gray-900 outline-none placeholder-gray-300" 
              placeholder="Destination" 
              autoComplete="off"
            />

            <AnimatePresence>
              {showToSuggestions && toLoc.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar"
                >
                  {cities.filter(c => c.toLowerCase().includes(toLoc.toLowerCase())).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setToLoc(city);
                        setShowToSuggestions(false);
                      }}
                      className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors font-bold text-blue-950 text-sm border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={14} className="text-orange-500" />
                        {city}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border border-gray-200 rounded-xl p-3 hover:bg-blue-50/50 transition cursor-text group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="text-xs font-bold text-gray-500 group-focus-within:text-blue-600 block mb-1 flex items-center gap-1"><Calendar size={12}/> DEPARTURE</span>
            <input name="date" type="date" required className="w-full bg-transparent text-lg font-bold text-gray-800 outline-none" />
          </div>

          <div className="border border-gray-200 rounded-xl p-3 hover:bg-blue-50/50 transition cursor-text group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="text-xs font-bold text-gray-500 group-focus-within:text-blue-600 block mb-1 flex items-center gap-1"><Clock size={12}/> PICKUP TIME</span>
            <input name="time" type="time" required className="w-full bg-transparent text-lg font-bold text-gray-800 outline-none" />
          </div>

        </div>

        {/* Dynamic Map Embed */}
        {fromLoc.length > 2 && toLoc.length > 2 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-inner"
          >
            <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               loading="lazy" 
               allowFullScreen 
               src={`https://maps.google.com/maps?q=${encodeURIComponent(fromLoc)}+to+${encodeURIComponent(toLoc)}&t=&ie=UTF8&iwloc=&output=embed`}
            />
          </motion.div>
        )}

        {/* Row 2: Customer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-4 border-t border-gray-100">

          <div className="relative">
            <label className="text-xs font-black uppercase tracking-tight text-slate-400 block mb-1">Contact Number</label>
            <div className="flex items-center border-b border-gray-300 py-1 focus-within:border-orange-500 transition">
              <Phone size={18} className="text-gray-400 mr-2" />
              <input name="phone" type="tel" required className="w-full bg-transparent outline-none text-blue-950 font-bold" placeholder="+91" />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-black uppercase tracking-tight text-slate-400 block mb-1">Vehicle Class</label>
            <div className="flex items-center border-b border-gray-300 py-1 focus-within:border-orange-500 transition">
              <Car size={18} className="text-gray-400 mr-2" />
              <select name="vehicle" className="w-full bg-transparent outline-none text-blue-950 appearance-none font-bold">
                <option value="Sedan">Sedan (Swift Dzire/Etios)</option>
                <option value="SUV">SUV (Ertiga/Innova)</option>
                <option value="Innova Crysta">Innova Crysta (Premium)</option>
                <option value="Tempo Traveller">Tempo Traveller (Group)</option>
              </select>
            </div>
          </div>

        </div>



        {/* Big Search / Submit Button */}
        <div className="text-center mt-10 relative z-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            disabled={loading} 
            className="bg-orange-500 text-white font-black text-lg md:text-xl uppercase tracking-tighter py-5 px-12 md:px-20 rounded-full shadow-[0_20px_40px_rgba(249,115,22,0.4)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.6)] flex items-center gap-3 transition-all outline-none"
          >
            {loading ? <span className="animate-pulse">PROCESSING...</span> : 'BOOK TRIP NOW'}
          </motion.button>
        </div>

      </form>
    </motion.div>
  );
}
