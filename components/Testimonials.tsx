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
    role: "Tourist",
    content: "Took the Vijayawada to Hyderabad route. The Swift Dzire was very comfortable and the AC worked perfectly throughout the summer trip. Fair pricing too.",
    rating: 4
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="text-6xl text-orange-200 font-serif">"</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < testimonial.rating ? "#f97316" : "none"} stroke={i < testimonial.rating ? "#f97316" : "#cbd5e1"} />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
