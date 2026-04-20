import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      
      {/* Offers Section */}
      <section className="bg-orange-500 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0 text-left">
            <h3 className="text-2xl font-bold mb-2">Get 10% Off on Round Trips!</h3>
            <p className="text-orange-100">Valid for Innova and Sedan bookings from Hyderabad & Vijayawada.</p>
          </div>
          <a href="tel:+919948924786" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg whitespace-nowrap">
            Claim Offer Now
          </a>
        </div>
      </section>

      <Fleet />
      <Testimonials />
    </>
  );
}
