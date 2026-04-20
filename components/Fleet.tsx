"use client";
import { useState } from 'react';

const fleetData = [
  {
    id: 1,
    name: "Sedan (Swift Dzire / Etios)",
    price: "₹5,500",
    route: "Hyd ⇄ VJA",
    perKm: "₹12/Km (Outstation)",
    capacity: "4 Seats + luggage",
    image: "/sedan.png", 
    type: "Budget"
  },
  {
    id: 2,
    name: "SUV (Ertiga / Carens)",
    price: "₹6,500",
    route: "Hyd ⇄ VJA",
    perKm: "₹15/Km (Outstation)",
    capacity: "6 Seats + luggage",
    image: "/suv.png",
    type: "Family"
  },
  {
    id: 3,
    name: "Premium SUV (Innova Crysta)",
    price: "₹8,000",
    route: "Hyd ⇄ VJA",
    perKm: "₹19/Km (Outstation)",
    capacity: "7 Seats + luggage",
    image: "/innova.png",
    type: "Premium"
  },
  {
    id: 4,
    name: "Tempo Traveller",
    price: "On Request",
    route: "Anywhere",
    perKm: "₹24/Km",
    capacity: "12-17 Seats",
    image: "/tempo.png",
    type: "Group"
  }
];

export default function Fleet() {
  const [viewIndex, setViewIndex] = useState<number | null>(null);

  const activeItem = viewIndex !== null ? fleetData[viewIndex] : null;

  const handleNext = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === fleetData.length - 1 ? 0 : viewIndex + 1);
    }
  };

  const handlePrev = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === 0 ? fleetData.length - 1 : viewIndex - 1);
    }
  };

  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Vehicles</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Ride</h3>
            <p className="text-gray-600 mt-4 text-lg">Well-maintained, sanitized, and air-conditioned vehicles for every travel requirement.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border-2 border-blue-950 text-blue-950 font-bold rounded-lg hover:bg-blue-950 hover:text-white transition">
            View All Vehicles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetData.map((car, idx) => (
            <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100">
              <div 
                className="relative h-48 bg-gray-200 overflow-hidden cursor-pointer"
                onClick={() => setViewIndex(idx)}
              >
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider pointer-events-none">
                  {car.type}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h4>
                <div className="flex items-center text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="mr-3 flex items-center">🚘 {car.capacity}</span>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">{car.route}</span>
                    <span className="text-blue-600 font-bold text-lg">{car.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Per KM Charge</span>
                    <span className="font-semibold text-gray-900">{car.perKm}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setViewIndex(fleetData.indexOf(car))}
                  className="mt-auto block w-full bg-gray-50 text-blue-950 text-center font-bold py-3 rounded-lg hover:bg-blue-950 hover:text-white transition border border-gray-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Slide Modal */}
      {viewIndex !== null && activeItem && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/80 backdrop-blur-md p-4 sm:p-6">
          <div className="flex min-h-full items-center justify-center py-10 flex-col">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 max-w-5xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 border border-blue-100/20">
              
              <button 
                onClick={() => setViewIndex(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-red-500 font-light text-2xl sm:text-3xl z-50 transition-colors bg-gray-100 hover:bg-red-50 rounded-full h-10 w-10 flex items-center justify-center shadow-sm"
              >
                ✕
              </button>

              {/* Left Image Section */}
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 p-4 h-48 sm:h-64 md:h-auto">
                 <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-contain rounded-xl mix-blend-multiply" />
              </div>

            {/* Right Details Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 leading-tight">
                {activeItem.name}
              </h2>
              
              <h3 className="font-bold text-orange-500 tracking-wide uppercase text-sm mb-6 pb-4 border-b border-gray-100">{activeItem.type} Vehicle</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience ultimate comfort with our premium {activeItem.type.toLowerCase()} vehicle. Equipped with an advanced AC system, free connectivity, and plush seating for up to {activeItem.capacity}. Perfect for {activeItem.route}.
              </p>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold block mb-2 text-blue-950">Premium Features</span>
                <p className="text-gray-600 leading-relaxed text-sm">
                  • Automatic Transmission • Premium Leather Seats • Powerful AC • GPS Navigation • High-End Audio • 360° Camera • Sanitized Daily
                </p>
              </div>
              
              <div className="mb-8 font-extrabold text-blue-950 text-2xl flex items-end">
                {activeItem.perKm} <span className="text-sm font-semibold text-gray-400 ml-2 mb-1">(Outstation)</span>
              </div>
              
              <button 
                onClick={() => {
                  setViewIndex(null);
                  setTimeout(() => {
                    document.getElementById('main-booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 150);
                }}
                className="w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] mb-8 uppercase tracking-wide"
              >
                Book This Vehicle
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
                  {fleetData.map((_, idx) => (
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
