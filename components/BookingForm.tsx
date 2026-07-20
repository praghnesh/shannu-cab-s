"use client";
import { useState, useEffect } from 'react';
import { Calendar, Clock, Car, Phone, X, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LiveMap from './LiveMap';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mainTab] = useState("OUTSTATION"); // Default, visually hidden
  const [tripType, setTripType] = useState("ONE WAY");

  const [fromLoc, setFromLoc] = useState("");
  const [toLoc, setToLoc] = useState("");
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
  const [toSuggestions, setToSuggestions] = useState<string[]>([]);

  const cities = [
    "Hyderabad", "Shamshabad Airport", "Vijayawada", "Guntur", "Visakhapatnam (Vizag)", "Vizag", "Machilipatnam", 
    "Rajahmundry", "Kakinada", "Tirupati", "Warangal", "Nizamabad", "Khammam", 
    "Karimnagar", "Nellore", "Kurnool", "Anantapur", "Chittoor", "Eluru", "Ongole", 
    "Bangalore", "Chennai", "Mumbai", "Pune", "Delhi", "Amaravati", "Srisailam", 
    "Bhimavaram", "Tenali", "Proddatur", "Adoni", "Madanapalle"
  ];

  const pincodeMap: { [key: string]: string[] } = {
    "500": ["Hyderabad", "Shamshabad Airport"],
    "501": ["Hyderabad", "Shamshabad Airport"],
    "502": ["Hyderabad", "Shamshabad Airport"],
    "503": ["Nizamabad"],
    "504": ["Nizamabad", "Karimnagar"],
    "505": ["Karimnagar"],
    "506": ["Warangal"],
    "507": ["Khammam"],
    "508": ["Hyderabad", "Khammam"],
    "509": ["Hyderabad", "Kurnool"],
    "515": ["Anantapur"],
    "516": ["Proddatur", "Tirupati"],
    "517": ["Tirupati", "Chittoor", "Madanapalle"],
    "518": ["Kurnool", "Adoni"],
    "520": ["Vijayawada"],
    "521": ["Vijayawada", "Machilipatnam"],
    "522": ["Guntur", "Tenali"],
    "523": ["Ongole"],
    "524": ["Nellore"],
    "530": ["Visakhapatnam (Vizag)", "Vizag"],
    "531": ["Visakhapatnam (Vizag)", "Vizag"],
    "532": ["Visakhapatnam (Vizag)", "Vizag", "Kakinada"],
    "533": ["Rajahmundry", "Kakinada"],
    "534": ["Eluru", "Bhimavaram"],
    "535": ["Visakhapatnam (Vizag)", "Vizag"],
    "560": ["Bangalore"],
    "600": ["Chennai"],
    "400": ["Mumbai"],
    "411": ["Pune"],
    "110": ["Delhi"]
  };

  const getSuggestions = (val: string) => {
    const cleanVal = val.trim().replace(/\s+/g, '');
    if (!cleanVal) return [];
    
    if (/^\d+$/.test(cleanVal)) {
      const matchedCities: string[] = [];
      Object.keys(pincodeMap).forEach(prefix => {
        if (prefix.startsWith(cleanVal) || cleanVal.startsWith(prefix)) {
          matchedCities.push(...pincodeMap[prefix]);
        }
      });
      return Array.from(new Set(matchedCities));
    }
    
    return cities.filter(c => c.toLowerCase().includes(cleanVal.toLowerCase()));
  };

  useEffect(() => {
    const offline = getSuggestions(fromLoc);
    setFromSuggestions(offline);

    if (fromLoc.trim().length < 3) return;

    const delayDebounceFn = setTimeout(async () => {
      try {
        const res = await fetch(`/api/suggestions?q=${encodeURIComponent(fromLoc)}`);
        const data = await res.json();
        
        const apiCities = data.map((item: any) => {
          const parts = item.display_name.split(',');
          if (parts.length <= 1) return item.display_name;
          
          const place = parts[0].trim();
          const state = parts[parts.length - 3]?.trim() || "";
          
          let city = parts[1]?.trim() || "";
          if (city.toLowerCase().includes("district") || city.toLowerCase().includes("state") || city === state) {
            city = "";
          }
          
          if (city) {
            return `${place}, ${city} (${state})`;
          }
          return `${place} (${state})`;
        });

        setFromSuggestions(prev => Array.from(new Set([...prev, ...apiCities])));
      } catch (err) {
        console.error("Error fetching from suggestions:", err);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [fromLoc]);

  useEffect(() => {
    const offline = getSuggestions(toLoc);
    setToSuggestions(offline);

    if (toLoc.trim().length < 3) return;

    const delayDebounceFn = setTimeout(async () => {
      try {
        const res = await fetch(`/api/suggestions?q=${encodeURIComponent(toLoc)}`);
        const data = await res.json();
        
        const apiCities = data.map((item: any) => {
          const parts = item.display_name.split(',');
          if (parts.length <= 1) return item.display_name;
          
          const place = parts[0].trim();
          const state = parts[parts.length - 3]?.trim() || "";
          
          let city = parts[1]?.trim() || "";
          if (city.toLowerCase().includes("district") || city.toLowerCase().includes("state") || city === state) {
            city = "";
          }
          
          if (city) {
            return `${place}, ${city} (${state})`;
          }
          return `${place} (${state})`;
        });

        setToSuggestions(prev => Array.from(new Set([...prev, ...apiCities])));
      } catch (err) {
        console.error("Error fetching to suggestions:", err);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [toLoc]);

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

    // Prepare WhatsApp message
    const message = `*New Booking Request*%0A%0A*Phone:* ${data.phone}%0A*Category:* ${data.mainCategory}%0A*Trip:* ${data.tripType}%0A*From:* ${data.pickup}%0A*To:* ${data.drop}%0A*Date:* ${data.date}%0A*Time:* ${data.time}%0A*Vehicle:* ${data.vehicle}`;

    try {
      // 1. Submit to Email (Web3Forms)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
          subject: `NEW BOOKING: ${data.pickup} to ${data.drop}`,
          from_name: "Amaravathi Fast Car Travels Website",
          ...data
        })
      });

      if (response.ok) {
        setSuccess(true);
        // 2. Open WhatsApp
        window.open(`https://wa.me/919948924786?text=${message}`, '_blank');
      } else {
        // Fallback to WhatsApp even if email fails
        window.open(`https://wa.me/919948924786?text=${message}`, '_blank');
      }
      
    } catch (error) {
      console.error("Submission error:", error);
      window.open(`https://wa.me/919948924786?text=${message}`, '_blank');
    }

    setLoading(false);
    setTimeout(() => setSuccess(false), 8000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto overflow-visible"
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Form Container */}
        <div className="w-full max-w-[420px] bg-black rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative border border-white/10 z-20">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="fromLoc" value={fromLoc} />
              <input type="hidden" name="toLoc" value={toLoc} />
              <input type="hidden" name="mainTab" value={mainTab} />
              <input type="hidden" name="tripType" value={tripType} />

              {/* Trip Type Toggle (One Way vs Round Trip) */}
              <div className="grid grid-cols-2 bg-[#f3f3f3]/10 border border-white/10 rounded-2xl p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setTripType("ONE WAY")}
                  className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    tripType === "ONE WAY"
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  One Way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("ROUND TRIP")}
                  className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    tripType === "ROUND TRIP"
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Round Trip
                </button>
              </div>

              {/* Location Inputs Block */}
              <div className="relative bg-[#f3f3f3] rounded-2xl flex flex-col p-1.5 z-50">
                {/* Connecting Line */}
                <div className="absolute left-[21px] top-[38px] bottom-[38px] w-[2px] bg-black/20 z-0"></div>
                
                {/* From Input */}
                <div className={`relative flex items-center gap-4 bg-transparent p-3 border-b border-gray-300/50 transition-all ${showFromSuggestions ? 'z-30' : 'z-10'}`}>
                   <div className="w-3 h-3 bg-white rounded-full border-[3px] border-black flex-shrink-0 ml-1"></div>
                    <div className="flex flex-col flex-grow relative">
                       <span className="text-xs sm:text-sm font-black text-gray-700 mb-0.5 uppercase tracking-wider">From</span>
                       <input 
                         required
                         value={fromLoc}
                         onChange={(e) => {
                           setFromLoc(e.target.value);
                           setShowFromSuggestions(true);
                           setIsSearching(true);
                         }}
                         onFocus={() => setShowFromSuggestions(true)}
                         onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                         placeholder="Enter Departure City"
                         className="bg-transparent text-base font-semibold text-black outline-none placeholder-gray-400 w-full"
                      />
                   </div>
                   {fromLoc && (
                     <button type="button" onClick={() => setFromLoc("")} className="text-gray-400 hover:text-black">
                       <X size={20} />
                     </button>
                   )}

                    <AnimatePresence>
                      {showFromSuggestions && fromLoc.length > 0 && (
                        <motion.div className="absolute left-0 right-0 top-full mt-3 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar">
                          {fromSuggestions.map((city) => (
                            <button key={city} type="button" onMouseDown={() => setFromLoc(city)} className="w-full text-left px-5 py-3 hover:bg-gray-100 font-semibold text-black text-sm border-b border-gray-100 last:border-0">{city}</button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>

                <div className={`relative flex items-center gap-4 bg-transparent p-3 transition-all ${showToSuggestions ? 'z-30' : 'z-10'}`}>
                   <div className="w-3 h-3 bg-black flex-shrink-0 ml-1"></div>
                    <div className="flex flex-col flex-grow relative">
                       <span className="text-xs sm:text-sm font-black text-gray-700 mb-0.5 uppercase tracking-wider">To</span>
                       <input 
                         required
                         value={toLoc}
                         onChange={(e) => {
                           setToLoc(e.target.value);
                           setShowToSuggestions(true);
                           setIsSearching(true);
                         }}
                         onFocus={() => setShowToSuggestions(true)}
                         onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                         placeholder="Enter Destination City"
                         className="bg-transparent text-base font-semibold text-black outline-none placeholder-gray-400 w-full"
                      />
                   </div>
                   {toLoc && (
                     <button type="button" onClick={() => setToLoc("")} className="text-gray-400 hover:text-black">
                       <X size={20} />
                     </button>
                   )}

                    <AnimatePresence>
                      {showToSuggestions && toLoc.length > 0 && (
                        <motion.div className="absolute left-0 right-0 top-full mt-3 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto no-scrollbar">
                          {toSuggestions.map((city) => (
                            <button key={city} type="button" onMouseDown={() => setToLoc(city)} className="w-full text-left px-5 py-3 hover:bg-gray-100 font-semibold text-black text-sm border-b border-gray-100 last:border-0">{city}</button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              </div>

              <div className="flex gap-2">
                 <div className="flex-1 bg-[#f3f3f3] rounded-2xl flex items-center px-3 py-3 gap-2 relative z-40 overflow-hidden">
                    <Calendar size={16} className="text-black flex-shrink-0" />
                    <input 
                      name="date" 
                      type="date" 
                      required 
                      className="bg-transparent text-sm font-semibold text-black outline-none w-full min-w-0"
                    />
                 </div>
                 <div className="flex-1 bg-[#f3f3f3] rounded-2xl flex items-center px-3 py-3 gap-2 relative z-40 overflow-hidden">
                    <Clock size={16} className="text-black flex-shrink-0" />
                    <input 
                      name="time" 
                      type="time" 
                      required 
                      className="bg-transparent text-sm font-semibold text-black outline-none w-full min-w-0"
                    />
                 </div>
              </div>

              {/* Phone & Vehicle Row */}
              <div className="flex gap-2">
                 <div className="flex-1 bg-[#f3f3f3] rounded-2xl flex items-center px-3 py-3 gap-2 overflow-hidden">
                    <Phone size={16} className="text-black flex-shrink-0" />
                    <input 
                      name="phone" 
                      type="tel" 
                      required 
                      placeholder="Phone No." 
                      className="bg-transparent text-sm font-semibold text-black outline-none w-full min-w-0 placeholder-gray-500"
                    />
                 </div>
                 <div className="flex-1 bg-[#f3f3f3] rounded-2xl flex items-center px-3 py-3 gap-2 relative overflow-hidden">
                    <Car size={16} className="text-black flex-shrink-0" />
                    <select name="vehicle" required className="bg-transparent text-sm font-semibold text-black outline-none w-full min-w-0 appearance-none pr-4 cursor-pointer">
                       <option value="">Vehicle</option>
                       <option value="Swift Dzire">Swift Dzire</option>
                       <option value="Etios">Toyota Etios</option>
                       <option value="Ertiga">Maruti Ertiga</option>
                       <option value="Innova">Toyota Innova</option>
                       <option value="Innova Crysta">Innova Crysta</option>
                       <option value="Tempo Traveller / Force Urbania">Tempo Traveller / Force Urbania</option>
                    </select>
                    <ChevronDown size={14} className="text-black absolute right-3 pointer-events-none" />
                 </div>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={loading} 
                className="w-full bg-green-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-green-600 transition-colors mt-2"
              >
                {loading ? 'Processing...' : 'Explore Cabs'}
              </motion.button>
            </form>

            {/* Success Message */}
            {success && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-xl text-center text-xs font-bold border border-green-500/30">
                 Booking Request Sent Successfully!
              </motion.div>
            )}

            {/* Mobile Map View */}
            <div className="lg:hidden w-full mt-6 rounded-2xl overflow-hidden border border-white/10 h-[350px] relative">
               <LiveMap 
                 location={fromLoc} 
                 destination={toLoc} 
                 isVisible={isSearching || fromLoc.length > 0 || toLoc.length > 0} 
               />
            </div>
          </div>
        </div>

        {/* Desktop Map Integration */}
        <div className="hidden lg:block w-full max-w-[500px] h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.3)] bg-black">
           <LiveMap 
             location={fromLoc} 
             destination={toLoc} 
             isVisible={true} 
           />
        </div>
      </div>
    </motion.div>
  );
}

