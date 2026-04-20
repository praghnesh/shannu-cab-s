"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "City Tour Packages",
    description: "Explore the historic landmarks, shopping districts, and vibrant culture of the Pearl City.",
    image: "/city.png"
  },
  {
    id: 2,
    title: "Temple & Pilgrimage",
    description: "Divine journeys to Tirupati, Srisailam, and other sacred destinations in South India.",
    image: "/temple.png"
  },
  {
    id: 3,
    title: "Ooty Hill Station Trip",
    description: "Experience the cool breeze and lush tea gardens of Ooty. A perfect weekend getaway from the city heat.",
    image: "/ooty_hills.png"
  },
  {
    id: 4,
    title: "Araku Valley Getaway",
    description: "Explore the scenic beauty, coffee plantations, and waterfalls of Araku Valley on a curated trip.",
    image: "/araku_valley.png"
  },
  {
    id: 5,
    title: "Airport Transfers",
    description: "Extremely punctual and hassle-free pickups and drops to all metropolitan airports.",
    image: "/airport.png"
  },
  {
    id: 6,
    title: "Outstation Cabs",
    description: "Reliable one-way or round trips across cities with top-tier professional chauffeurs.",
    image: "/outstation.png"
  }
];

export default function Services() {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const activeItem = viewIndex !== null ? services[viewIndex] : null;

  const handleNext = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === services.length - 1 ? 0 : viewIndex + 1);
    }
  };

  const handlePrev = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === 0 ? services.length - 1 : viewIndex - 1);
    }
  };



  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore our wide range of services specifically designed to cater to your every travel need in South India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100">
              <div 
                className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setViewIndex(idx)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 
                  className="text-xl font-bold text-gray-900 mb-3 cursor-pointer hover:text-orange-500 transition"
                  onClick={() => setViewIndex(idx)}
                >
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow bg-blue-50/50 p-4 rounded-xl mb-4">
                  {service.description}
                </p>
                <a 
                  href="tel:+919948924786"
                  className="mt-auto block w-full bg-orange-50 text-orange-600 font-bold py-3 text-center rounded-lg hover:bg-orange-500 hover:text-white transition shadow-sm"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Detailed Slide Modal for Places */}
      {viewIndex !== null && activeItem && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/80 backdrop-blur-md p-4 sm:p-6">
          <div className="flex min-h-full items-center justify-center py-10">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 max-w-5xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row gap-6 lg:gap-12 border border-blue-100/20">
              
              <button 
                onClick={() => setViewIndex(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-red-500 font-light text-2xl sm:text-3xl z-50 transition-colors bg-gray-100 hover:bg-red-50 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center shadow-sm"
              >
                ✕
              </button>

              {/* Left Image Section */}
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 h-48 sm:h-64 md:h-auto md:min-h-[300px]">
                 <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover rounded-xl" />
              </div>

            {/* Right Details Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 leading-tight">
                {activeItem.title}
              </h2>
              
              <h3 className="font-bold text-orange-500 tracking-wide uppercase text-sm mb-6 pb-4 border-b border-gray-100">Premium Destination Experience</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeItem.description} Enhance your journey with our highly rated chauffeurs. We guarantee absolute comfort and flawless execution for your entire trip itinerary.
              </p>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold block mb-2 text-blue-950">Trip Highlights</span>
                <p className="text-gray-600 leading-relaxed text-sm">
                  • Flexible Sightseeing • Multilingual Guide Support • Premium AC Vehicles • Pre-Planned Routes • 24/7 Booking Assistance
                </p>
              </div>
              
              <div className="mb-8 font-extrabold text-blue-950 text-2xl flex items-end">
                Status: <span className="text-green-600 uppercase tracking-wider text-sm font-bold ml-3 mb-1 bg-green-100 px-3 py-1 rounded-full">Available Now</span>
              </div>
              
              <a 
                href="tel:+919948924786"
                className="w-full block text-center bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] mb-8 uppercase tracking-wide"
              >
                Book This Package
              </a>
              
              {/* Pagination Controls */}
              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <button onClick={handlePrev} className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition flex-1 text-center">
                    ← Prev
                  </button>
                  <button onClick={handleNext} className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition flex-1 text-center">
                    Next →
                  </button>
                </div>
                
                {/* Dots */}
                <div className="flex justify-center gap-2">
                  {services.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setViewIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${idx === viewIndex ? 'w-8 bg-blue-950' : 'w-2 bg-gray-200 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

    </section>
  );
}
