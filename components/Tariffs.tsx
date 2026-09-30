"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export const tariffData = [
  {
    title: "Local Trip",
    pill: "Toll Gates (If Any) & Parking Extra",
    items: [
      { label: "4Hrs 40Km", price: "₹1,300/-" },
      { label: "8Hrs 80Km", price: "₹2,200/-" },
      { label: "Per Extra Km", price: "₹13/-" },
      { label: "Per Extra Hour", price: "₹200/-" }
    ]
  },
  {
    title: "Day Rent Tariffs",
    pill: "Toll Gates & Parking Extra",
    items: [
      { label: "12 Hours", price: "₹1,300/-" },
      { label: "24 Hours", price: "₹2,000/-" },
      { label: "Fuel (By Customer)", price: "1Ltr per 10 Km" },
      { label: "Driver Batta Per Day", price: "₹500/-" },
      { label: "Night Halt", price: "₹500/-" }
    ]
  },
  {
    title: "Outstation Trips",
    pill: "Toll Gates, Border taxes & Parking Extra",
    items: [
      { label: "Per daylimit", price: "300Km" },
      { label: "Per Extra Km", price: "₹12/-" },
      { label: "Driver Batta Per Day", price: "₹500/-" },
      { label: "Night Halt", price: "₹500/-" }
    ]
  }
];

export default function Tariffs() {
  return (
    <section className="py-12 sm:py-20 bg-blue-950 relative overflow-hidden text-white">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 opacity-90 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Transparent Tariff Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-black text-xs sm:text-sm text-orange-500 uppercase tracking-[0.25em] block mb-2">
            Our Premium Tariffs
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Affordable & Transparent Pricing
          </h2>
        </motion.div>

        {/* Tariffs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left">
          {tariffData.map((tariff, index) => (
            <motion.div
              key={tariff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative bg-gradient-to-br from-blue-950/90 to-blue-900/50 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500 group"
            >
              {/* Decorative inner glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>

              <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-center text-yellow-400 tracking-tight mb-8 uppercase italic group-hover:text-orange-400 transition-colors">
                  {tariff.title}
                </h3>

                {/* Items list */}
                <div className="space-y-4">
                  {tariff.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                          <ArrowRight size={10} className="group-hover/item:translate-x-0.5 transition-transform" />
                        </div>
                        <span className="text-sm font-semibold text-white/90 leading-none">{item.label}</span>
                      </div>
                      <div className="flex-grow border-b border-dashed border-white/10 mx-3 self-end mb-1"></div>
                      <span className="text-sm font-black text-amber-300 shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pill & Book Now Button */}
              <div className="mt-8 text-center flex flex-col gap-3 items-center">
                <div className="inline-block bg-white text-blue-950 font-black text-[10px] sm:text-xs py-2 px-5 rounded-full shadow-md uppercase tracking-wider group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {tariff.pill}
                </div>
                <a
                  href="tel:+919948924786"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xs py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(34,197,94,0.2)] active:scale-95 transition-all uppercase tracking-widest"
                >
                  <Phone size={14} fill="currentColor" />
                  <span>BOOK NOW</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
