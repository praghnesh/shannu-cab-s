import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

interface LiveMapProps {
  location?: string;
  destination?: string;
  isVisible: boolean;
}

function sanitizeForMap(loc: string): string {
  if (!loc) return "";
  let clean = loc.split('(')[0].trim();
  const parts = clean.split(',');
  if (parts.length > 1 && /^\d{5,6}$/.test(parts[0].trim())) {
    clean = parts.slice(1).join(',').trim();
  }
  return clean || loc;
}

export default function LiveMap({ location, destination, isVisible }: LiveMapProps) {
  const [distance, setDistance] = useState<string>("274 km");
  const [loading, setLoading] = useState(false);

  const cleanLocation = (loc: string) => loc.split('(')[0].trim();
  const rawFrom = cleanLocation(location || "");
  const rawTo = cleanLocation(destination || "");

  const activeFrom = rawFrom || "Hyderabad";
  const activeTo = rawTo || "Vijayawada";

  const mapFrom = sanitizeForMap(activeFrom);
  const mapTo = sanitizeForMap(activeTo);

  useEffect(() => {
    const fetchRouteInfo = async () => {
      setLoading(true);

      try {
        const response = await fetch(`/api/route-info?from=${encodeURIComponent(activeFrom)}&to=${encodeURIComponent(activeTo)}`);
        const data = await response.json();

        if (data.distance) {
          setDistance(data.distance);
        }
      } catch (error) {
        console.error("Distance calculation failed:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isVisible) {
      fetchRouteInfo();
    }
  }, [activeFrom, activeTo, isVisible]);

  const embedUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(mapFrom)}&daddr=${encodeURIComponent(mapTo)}&output=embed`;

  const numericKm = parseFloat(distance) || 274;
  const estHours = (numericKm / 60).toFixed(1);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full lg:w-[540px] h-[350px] lg:h-[600px] bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
        >
          {/* Map Header */}
          <div className="absolute top-0 left-0 right-0 z-10 p-3 lg:p-4 bg-white/90 backdrop-blur-md border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-md">
                <Navigation size={16} className="lg:w-[18px] lg:h-[18px]" />
              </div>
              <div>
                <h4 className="text-[10px] lg:text-xs font-black text-slate-900 uppercase tracking-widest leading-none mb-1">ROUTE DETAILS</h4>
                <p className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-tighter truncate max-w-[170px] lg:max-w-none">
                   {`${mapFrom} → ${mapTo}`}
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest transition-colors ${loading ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
               <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></div>
               {loading ? 'CALCULATING...' : 'OPTIMAL ROUTE'}
            </div>
          </div>

          {/* Iframe Map */}
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={embedUrl}
            allowFullScreen
            loading="eager"
            className="grayscale-[0.1] contrast-[1.05]"
          ></iframe>

          {/* Map Controls Card */}
          <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-10">
            <motion.div 
              layout
              className="bg-white p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                  <MapPin size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Distance</span>
                  <span className="text-base lg:text-xl font-black text-slate-900 leading-none mt-1">
                    {distance}
                  </span>
                </div>
              </div>
              
              <div className="h-10 w-[1px] bg-slate-100 hidden sm:block"></div>

              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest">Est. Travel Time</span>
                <span className="text-sm lg:text-base font-black text-blue-600 mt-1">
                   {`${estHours} hrs`}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
