"use client";
import { useState } from 'react';
import Link from 'next/link';

const fleetData = [
  // Hyderabad ⇄ Vijayawada
  { id: 1, name: "Sedan (Swift Dzire)", price: "₹5,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-blue-50" },
  { id: 2, name: "SUV (Ertiga)", price: "₹6,500", route: "Hyderabad ⇄ Vijayawada", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-blue-50" },
  { id: 3, name: "Premium SUV (Innova)", price: "₹8,000", route: "Hyderabad ⇄ Vijayawada", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-blue-50" },
  { id: 4, name: "Innova Crysta", price: "₹9,000", route: "Hyderabad ⇄ Vijayawada", perKm: "₹21/Km", capacity: "7 Seats", image: "/innova.png", type: "Luxury", bgColor: "bg-blue-50" },
  { id: 201, name: "Force Urbania", price: "On Request", route: "Hyderabad ⇄ Vijayawada", perKm: "₹28/Km", capacity: "7/17 Seats", image: "/urbania.png", type: "Premium Van", bgColor: "bg-blue-50" },
  { id: 202, name: "40 Seater Luxury Bus (AC/Non-AC)", price: "On Request", route: "Hyderabad ⇄ Vijayawada", perKm: "₹45/Km", capacity: "40 Seats", image: "/bus.png", type: "Heavy Vehicle", bgColor: "bg-blue-50" },
  { id: 104, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Vijayawada", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-blue-50" },

  // Hyderabad ⇄ Guntur
  { id: 5, name: "Sedan (Swift Dzire)", price: "₹5,500", route: "Hyderabad ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-purple-50" },
  { id: 6, name: "SUV (Ertiga)", price: "₹6,500", route: "Hyderabad ⇄ Guntur", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-purple-50" },
  { id: 7, name: "Premium SUV (Innova)", price: "₹8,000", route: "Hyderabad ⇄ Guntur", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-purple-50" },
  { id: 8, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Guntur", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-purple-50" },

  // Hyderabad ⇄ Gudivada
  { id: 9, name: "Sedan (Swift Dzire)", price: "₹6,000", route: "Hyderabad ⇄ Gudivada", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-indigo-50" },
  { id: 10, name: "SUV (Ertiga)", price: "₹7,000", route: "Hyderabad ⇄ Gudivada", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-indigo-50" },
  { id: 11, name: "Premium SUV (Innova)", price: "₹8,500", route: "Hyderabad ⇄ Gudivada", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-indigo-50" },
  { id: 12, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Gudivada", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-indigo-50" },

  // Hyderabad ⇄ Machilipatnam
  { id: 13, name: "Sedan (Swift Dzire)", price: "₹6,500", route: "Hyderabad ⇄ Machilipatnam", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-sky-50" },
  { id: 14, name: "SUV (Ertiga)", price: "₹7,500", route: "Hyderabad ⇄ Machilipatnam", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-sky-50" },
  { id: 15, name: "Premium SUV (Innova)", price: "₹9,000", route: "Hyderabad ⇄ Machilipatnam", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-sky-50" },
  { id: 16, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Machilipatnam", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-sky-50" },

  // Hyderabad ⇄ Eluru
  { id: 17, name: "Sedan (Swift Dzire)", price: "₹6,500", route: "Hyderabad ⇄ Eluru", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-cyan-50" },
  { id: 18, name: "SUV (Ertiga)", price: "₹7,500", route: "Hyderabad ⇄ Eluru", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-cyan-50" },
  { id: 19, name: "Premium SUV (Innova)", price: "₹9,000", route: "Hyderabad ⇄ Eluru", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-cyan-50" },
  { id: 20, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Eluru", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-cyan-50" },

  // Hyderabad ⇄ Ongole
  { id: 21, name: "Sedan (Swift Dzire)", price: "₹7,000", route: "Hyderabad ⇄ Ongole", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-rose-50" },
  { id: 22, name: "SUV (Ertiga)", price: "₹8,000", route: "Hyderabad ⇄ Ongole", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-rose-50" },
  { id: 23, name: "Premium SUV (Innova)", price: "₹9,500", route: "Hyderabad ⇄ Ongole", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-rose-50" },
  { id: 24, name: "Tempo Traveller", price: "On Request", route: "Hyderabad ⇄ Ongole", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-rose-50" },

  // Vijayawada ⇄ Vizag
  { id: 41, name: "Sedan (Swift Dzire)", price: "₹7,500", route: "Vijayawada ⇄ Vizag", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-teal-50" },
  { id: 42, name: "SUV (Ertiga)", price: "₹8,500", route: "Vijayawada ⇄ Vizag", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-teal-50" },
  { id: 43, name: "Premium SUV (Innova)", price: "₹11,000", route: "Vijayawada ⇄ Vizag", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-teal-50" },
  { id: 44, name: "Tempo Traveller", price: "On Request", route: "Vijayawada ⇄ Vizag", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-teal-50" },

  // Vijayawada ⇄ Tirupati
  { id: 45, name: "Sedan (Swift Dzire)", price: "₹8,500", route: "Vijayawada ⇄ Tirupati", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-orange-50" },
  { id: 46, name: "SUV (Ertiga)", price: "₹10,500", route: "Vijayawada ⇄ Tirupati", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-orange-50" },
  { id: 47, name: "Premium SUV (Innova)", price: "₹13,000", route: "Vijayawada ⇄ Tirupati", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-orange-50" },
  { id: 48, name: "Tempo Traveller", price: "On Request", route: "Vijayawada ⇄ Tirupati", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-orange-50" },
  // Vijayawada ⇄ Guntur
  { id: 49, name: "Sedan (Swift Dzire)", price: "₹2,500", route: "Vijayawada ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-violet-50" },
  { id: 50, name: "SUV (Ertiga)", price: "₹3,500", route: "Vijayawada ⇄ Guntur", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-violet-50" },
  { id: 51, name: "Premium SUV (Innova)", price: "₹4,500", route: "Vijayawada ⇄ Guntur", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-violet-50" },
  { id: 52, name: "Tempo Traveller", price: "On Request", route: "Vijayawada ⇄ Guntur", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-violet-50" },

  // Vijayawada ⇄ Machilipatnam
  { id: 53, name: "Sedan (Swift Dzire)", price: "₹3,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹12/Km", capacity: "4 Seats", image: "/sedan.png", type: "Budget", bgColor: "bg-sky-50" },
  { id: 54, name: "SUV (Ertiga)", price: "₹4,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹15/Km", capacity: "6 Seats", image: "/suv.png", type: "Family", bgColor: "bg-sky-50" },
  { id: 55, name: "Premium SUV (Innova)", price: "₹5,500", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹19/Km", capacity: "7 Seats", image: "/innova.png", type: "Premium", bgColor: "bg-sky-50" },
  { id: 56, name: "Tempo Traveller", price: "On Request", route: "Vijayawada ⇄ Machilipatnam", perKm: "₹24/Km", capacity: "12-17 Seats", image: "/tempo.png", type: "Group", bgColor: "bg-sky-50" },

  // Group Travel & Buses (Special Category)
  { id: 301, name: "Force Urbania", price: "On Request", route: "Buses & Group Travel", perKm: "₹28/Km", capacity: "17 Seats", image: "/urbania.png", type: "Premium Van", bgColor: "bg-gray-100" },
  { id: 302, name: "40 Seater Luxury Bus (AC)", price: "On Request", route: "Buses & Group Travel", perKm: "₹45/Km", capacity: "40 Seats", image: "/bus.png", type: "Heavy Vehicle", bgColor: "bg-gray-100" },
  { id: 303, name: "40 Seater Bus (Non-AC)", price: "On Request", route: "Buses & Group Travel", perKm: "₹35/Km", capacity: "40 Seats", image: "/bus.png", type: "Heavy Vehicle", bgColor: "bg-gray-100" },
];

interface FleetProps {
  limit?: number;
  hideViewAll?: boolean;
}

export default function Fleet({ limit, hideViewAll }: FleetProps = {}) {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<string>("Hyderabad ⇄ Vijayawada");

  // Filter logic: Filter by EXACT route match to ensure only 4 cars show
  const filteredFleet = fleetData.filter(car => car.route === selectedRoute);

  const activeItem = viewIndex !== null ? filteredFleet[viewIndex] : null;

  const handleNext = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === filteredFleet.length - 1 ? 0 : viewIndex + 1);
    }
  };

  const handlePrev = () => {
    if (viewIndex !== null) {
      setViewIndex(viewIndex === 0 ? filteredFleet.length - 1 : viewIndex - 1);
    }
  };

  const routes = [
    { label: "Vijayawada ⇄ Hyderabad", value: "Hyderabad ⇄ Vijayawada" },
    { label: "Hyderabad ⇄ Guntur", value: "Hyderabad ⇄ Guntur" },
    { label: "Hyderabad ⇄ Gudivada", value: "Hyderabad ⇄ Gudivada" },
    { label: "Hyderabad ⇄ Machilipatnam", value: "Hyderabad ⇄ Machilipatnam" },
    { label: "Hyderabad ⇄ Eluru", value: "Hyderabad ⇄ Eluru" },
    { label: "Hyderabad ⇄ Ongole", value: "Hyderabad ⇄ Ongole" },
    { label: "Vijayawada ⇄ Vizag", value: "Vijayawada ⇄ Vizag" },
    { label: "Vijayawada ⇄ Tirupati", value: "Vijayawada ⇄ Tirupati" },
    { label: "Vijayawada ⇄ Guntur", value: "Vijayawada ⇄ Guntur" },
    { label: "Vijayawada ⇄ Machilipatnam", value: "Vijayawada ⇄ Machilipatnam" },
    { label: "Group Travel & Buses", value: "Buses & Group Travel" }
  ];


  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Vehicles</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">Choose Your Ride</h3>
          
          {/* Centered & Enlarged Route Selector */}
          <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl border-2 border-blue-600/30 mx-auto max-w-2xl transition-all hover:border-blue-600/50">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <div className="bg-blue-600 text-white px-8 py-5 rounded-xl flex items-center justify-center gap-3 font-bold whitespace-nowrap text-lg shadow-lg">
                <span>📍</span> SELECT YOUR ROUTE
              </div>
              <div className="relative flex-grow">
                <select 
                  value={selectedRoute}
                  onChange={(e) => {
                    setSelectedRoute(e.target.value);
                    setViewIndex(null); 
                  }}
                  className="w-full bg-transparent px-8 py-5 text-gray-900 font-extrabold text-xl outline-none cursor-pointer appearance-none text-center sm:text-left"
                >
                  {routes.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 font-bold scale-125">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFleet.map((car, idx) => (
            <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100">
              <div 
                className={`relative h-48 ${car.bgColor || 'bg-gray-200'} overflow-hidden cursor-pointer`}
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
                  onClick={() => setViewIndex(idx)}
                  className="mt-auto block w-full bg-gray-50 text-blue-950 text-center font-bold py-3 rounded-lg hover:bg-blue-950 hover:text-white transition border border-gray-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Removed View All Bottom Section */}
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
              <div className={`md:w-1/2 relative rounded-2xl overflow-hidden ${activeItem.bgColor || 'bg-gray-50'} flex items-center justify-center border border-gray-100 p-4 h-48 sm:h-64 md:h-auto`}>
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
              
              <a 
                href="tel:+919948924786"
                className="w-full block text-center bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] mb-8 uppercase tracking-wide"
              >
                Book This Vehicle
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
                  {filteredFleet.map((_, idx) => (
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
