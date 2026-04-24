"use client";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Premium Member",
    content: "Booked an Innova for a family trip to Srisailam. The driver was exceptionally professional, the car was spotless, and the experience was truly VIP. Highly recommend Fast car Travels!",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Corporate Executive",
    content: "We use Fast car Travels for all our urgent corporate airport transfers in Hyderabad. They are never late, even for 3 AM flights. The 24/7 support is a lifesaver.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohan Lal",
    role: "Frequent Traveler",
    content: "The Force Urbania we booked for our office outing was incredible. Spacious, clean, and the booking process was seamless. Best in the business!",
    rating: 5
  },
  {
    id: 4,
    name: "Anitha Rao",
    role: "Family Traveler",
    content: "Most reliable cab service for long distances. I've tried many, but Fast car Travels' punctuality and elite driver behavior are unmatched in South India.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs block"
          >
            Client Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter"
          >
            Trusted by Thousands
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col relative group hover:bg-blue-950 transition-all duration-500 shadow-xl shadow-slate-100"
            >
              <Quote className="absolute top-8 right-8 text-slate-200 group-hover:text-white/10 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 group-hover:text-yellow-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 group-hover:text-white/80 font-medium leading-relaxed mb-8 flex-grow italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="text-blue-950 group-hover:text-white font-black text-xl tracking-tight leading-none mb-1">{testimonial.name}</p>
                <p className="text-slate-400 group-hover:text-orange-400 text-[10px] font-black uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
