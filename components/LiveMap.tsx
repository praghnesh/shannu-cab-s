import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

interface LiveMapProps {
  location?: string;
  destination?: string;
  isVisible: boolean;
}

export default function LiveMap({ location, destination, isVisible }: LiveMapProps) {
  const [distance, setDistance] = useState<string>("Calculating...");
  const [loading, setLoading] = useState(false);

  const cleanLocation = (loc: string) => loc.split('(')[0].trim();
  const cleanFrom = cleanLocation(location || "");
  const cleanTo = cleanLocation(destination || "");

  useEffect(() => {
    const fetchRouteInfo = async () => {
      if (!cleanFrom || !cleanTo) return;
      
      setLoading(true);
      setDistance("Calculating...");

      try {
        const response = await fetch(`/api/route-info?from=${encodeURIComponent(cleanFrom)}&to=${encodeURIComponent(cleanTo)}`);
        const data = await response.json();

        if (data.distance) {
          setDistance(data.distance);
        } else {
          setDistance("Calculated");
        }
      } catch (error) {
        console.error("Distance calculation failed:", error);
        setDistance("Calculated");
      } finally {
        setLoading(false);
      }
    };

    if (isVisible && cleanFrom && cleanTo) {
      fetchRouteInfo();
    }
  }, [cleanFrom, cleanTo, isVisible]);

  let embedUrl = "";
  if (cleanFrom && cleanTo) {
    embedUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(cleanFrom)}&daddr=${encodeURIComponent(cleanTo)}&output=embed`;
  } else {
    const searchQuery = cleanTo || cleanFrom || "Hyderabad";
    embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full lg:w-[540px] h-[350px] lg:h-[600px] bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
        >
          {/* Map Header - More Uber-like / Minimal */}
          <div className="absolute top-0 left-0 right-0 z-10 p-3 lg:p-4 bg-white/90 backdrop-blur-md border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
                <Navigation size={16} className="lg:w-[18px] lg:h-[18px]" />
              </div>
              <div>
                <h4 className="text-[10px] lg:text-xs font-black text-slate-900 uppercase tracking-widest leading-none mb-1">Route Details</h4>
                <p className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-tighter truncate max-w-[150px] lg:max-w-none">
                   {cleanFrom && cleanTo ? `${cleanFrom} → ${cleanTo}` : cleanTo ? `To: ${cleanTo}` : cleanFrom ? `From: ${cleanFrom}` : "Set locations"}
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest transition-colors ${loading ? 'bg-slate-100 text-slate-400' : 'bg-green-100 text-green-600'}`}>
               <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-slate-300 animate-pulse' : 'bg-green-500'}`}></div>
               {loading ? 'Updating...' : 'Optimal Route'}
            </div>
          </div>

          {/* Iframe Map */}
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            className="grayscale-[0.1] contrast-[1.05]"
          ></iframe>

          {/* Map Controls Card - Uber Style */}
          <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-10">
            <motion.div 
              layout
              className="bg-white p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <MapPin size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Distance</span>
                  <span className="text-base lg:text-xl font-black text-slate-900 leading-none mt-1">
                    {cleanFrom && cleanTo ? (isNaN(parseFloat(distance)) ? "Calculating..." : distance) : "— km"}
                  </span>
                </div>
              </div>
              
              {cleanFrom && cleanTo && (
                <div className="h-10 w-[1px] bg-slate-100 hidden sm:block"></div>
              )}

              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest">Est. Travel Time</span>
                <span className="text-sm lg:text-base font-black text-blue-600 mt-1">
                   {distance && !isNaN(parseFloat(distance)) 
                     ? `${(parseFloat(distance) / 60).toFixed(1)} hrs` 
                     : "Calculating..."}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
