import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    content: "Booked an Innova for a family trip to Srisailam. The driver was very professional, car was spotless, and the driving was very safe. Highly recommend Shannu Cabs!",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Corporate Client",
    content: "We use Shannu Travels for all our corporate airport transfers in Hyderabad. They are always on time, even for 3 AM flights. Excellent service.",
    rating: 5
  },
  {
    id: 3,
    name: "Venkatesh Rao",
    role: "Regular Traveler",
    content: "Took the Vijayawada to Hyderabad route. The Swift Dzire was very comfortable and the AC worked perfectly throughout the summer trip. Fair pricing too.",
    rating: 5
  },
  {
    id: 4,
    name: "Ananya Sharma",
    role: "Tourist",
    content: "Booked a group tour for Vizag and Araku. The Tempo Traveller was very spacious and the driver knew all the best viewpoints. Absolutely loved the experience!",
    rating: 5
  },
  {
    id: 5,
    name: "Kiran Dev",
    role: "Business Traveler",
    content: "Most reliable cab service for long distances. I've tried many, but Shannu travels' punctuality and driver behavior are unmatched in the region.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">What Our Riders Say</h3>
          <p className="text-gray-600 text-lg">Trust comes from experience. Read what our satisfied customers have to say about their journeys.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative group flex flex-col">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-sm">
                <span className="text-4xl text-orange-500 font-serif leading-none opacity-20 group-hover:opacity-100 transition-opacity">“</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "#f97316" : "none"} stroke={i < testimonial.rating ? "#f97316" : "#cbd5e1"} />
                ))}
              </div>
              <p className="text-gray-700 mb-8 font-medium leading-relaxed flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center pt-6 border-t border-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-blue-900 font-bold text-lg mr-4 border border-blue-200/50">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 tracking-tight">{testimonial.name}</h4>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
