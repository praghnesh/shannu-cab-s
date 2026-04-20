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
  const [selectedService, setSelectedService] = useState<any>(null);
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropLoc, setDropLoc] = useState("");

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

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedService) return;
    
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      Service: selectedService.title,
      Name: formData.get('name'),
      Phone: formData.get('phone'),
      PickupLocation: formData.get('pickup'),
      DropLocation: formData.get('drop'),
      PickupDate: formData.get('date'),
      PickupTime: formData.get('time'),
      Vehicle: formData.get('vehicle'),
      Details: formData.get('details')
    };

    try {
      await fetch("https://formsubmit.co/ajax/hassanbabushaik1786@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Service Booking: ${selectedService.title}`,
          ...data
        })
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    
    setTimeout(() => {
      setSuccess(false);
      setSelectedService(null);
    }, 3000);
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
                <button 
                  onClick={() => setSelectedService(service)}
                  className="mt-auto block w-full bg-orange-50 text-orange-600 font-bold py-3 text-center rounded-lg hover:bg-orange-500 hover:text-white transition shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6">
          <div className="flex min-h-full items-center justify-center py-6">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-400 hover:text-gray-900 font-bold text-xl bg-gray-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <h3 className="text-xl sm:text-2xl font-black text-blue-950 mb-2">Book Your Trip</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 pr-6">Fill out your details to request the <strong className="text-gray-900">{selectedService.title}</strong> package.</p>
            
            {success ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center font-medium border border-green-200">
                <p className="text-xl font-bold mb-2">Booking Requested!</p>
                <p>We have successfully received your details and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Your Name</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Mobile Number</label>
                    <input name="phone" type="tel" required placeholder="+91" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Pickup Location</label>
                    <input name="pickup" type="text" value={pickupLoc} onChange={(e) => setPickupLoc(e.target.value)} required placeholder="City or Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Drop Location</label>
                    <input name="drop" type="text" value={dropLoc} onChange={(e) => setDropLoc(e.target.value)} required placeholder="Destination" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Pickup Date</label>
                    <input name="date" type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Pickup Time</label>
                    <input name="time" type="time" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </div>
                
                {/* Dynamic Map Embed */}
                {pickupLoc.length > 2 && dropLoc.length > 2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    transition={{ duration: 0.4 }}
                    className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-gray-200 shadow-inner my-2"
                  >
                    <iframe 
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }} 
                       loading="lazy" 
                       allowFullScreen 
                       src={`https://maps.google.com/maps?q=${encodeURIComponent(pickupLoc)}+to+${encodeURIComponent(dropLoc)}&t=&ie=UTF8&iwloc=&output=embed`}
                    />
                  </motion.div>
                )}

                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Select Vehicle</label>
                  <select name="vehicle" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 appearance-none font-medium">
                    <option value="Sedan">Sedan (Swift Dzire/Etios)</option>
                    <option value="SUV">SUV (Ertiga/Innova)</option>
                    <option value="Innova Crysta">Innova Crysta (Premium)</option>
                    <option value="Tempo Traveller">Tempo Traveller (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Additional Details</label>
                  <textarea name="details" rows={2} placeholder="Any specific requirements...?" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 disabled:opacity-75 mt-2"
                >
                  {loading ? "Sending securely..." : "Submit Booking"}
                </button>
              </form>
            )}

            </div>
          </div>
        </div>
      )}

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
              
              <button 
                onClick={() => {
                  setSelectedService(activeItem);
                  setViewIndex(null);
                }}
                className="w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] mb-8 uppercase tracking-wide"
              >
                Book This Package
              </button>
              
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
