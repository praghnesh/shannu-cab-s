import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <div className="relative bg-blue-950 pt-20 lg:pt-28 pb-10 overflow-visible">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/90 to-blue-950 z-10"></div>
        <img src="/banner.png" alt="Luxury Travel Layout" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content Centered */}
        <div className="text-center pt-8 pb-32 lg:pb-36">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-500/20 text-orange-400 font-bold tracking-wider text-sm mb-6 border border-orange-500/30 uppercase">
            #1 Premier Travel Booking App
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Book Intercity & Local <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Cabs With Ease</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
            India's most trusted outstation car rentals. Enjoy premium vehicles, transparent pricing, and rigorously vetted professional chauffeurs.
          </p>
        </div>
      </div>

      {/* Horizontal Trip Form anchored over the bottom of the hero */}
      <div id="main-booking-form" className="relative z-20 w-full px-4 sm:px-6 lg:px-8 mt-[-80px] lg:mt-[-100px] mb-8 pb-10">
        <BookingForm />
      </div>
    </div>
  );
}
