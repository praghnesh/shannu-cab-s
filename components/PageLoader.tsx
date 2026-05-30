"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-blue-950 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center gap-6 mb-8 justify-center">
              <div className="h-32 w-32 md:h-44 md:w-44 flex items-center justify-center shrink-0 shadow-2xl">
                <img
                  src="/logo-clean.png"
                  alt="Fast Car Travels Logo"
                  className="w-full h-full object-contain block"
                />
              </div>
              <span className="text-5xl md:text-7xl font-black tracking-tighter text-red-600">
                Fast car Travels
              </span>
            </div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-orange-500 shadow-[0_0_20px_#f97316]"
              />
            </div>
            <p className="text-blue-200/50 text-[10px] font-black uppercase tracking-[0.4em] mt-6">Initializing VIP Access</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
