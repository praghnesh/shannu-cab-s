import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-4xl font-black tracking-tighter text-white mb-4 block">Fast car <span className="text-orange-500">Travels</span></span>
            <p className="text-sm leading-relaxed mb-6">
              Premium car travel agency providing outstation cab booking, airport transfers, and corporate rentals across Hyderabad and Vijayawada.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-orange-400 transition">About Fast car Travels</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition">Premium Services</Link></li>
              <li><Link href="/fleet" className="hover:text-orange-400 transition">Elite Fleet Catalog</Link></li>
              <li><Link href="/guide" className="hover:text-orange-400 transition">City Travel Guide</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact VIP Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-black uppercase tracking-widest mb-6">Popular Routes</h3>
            <ul className="grid grid-cols-1 gap-4 text-xl font-black">
              {[
                "Hyderabad ⇄ Vijayawada Cab", "Vijayawada ⇄ Hyderabad Taxi", "Hyderabad ⇄ Guntur Cabs",
                "Hyderabad ⇄ Bengaluru Cabs", "Hyderabad ⇄ Tirupati Taxi", "Vijayawada ⇄ Rajahmundry Cab",
                "Vijayawada ⇄ Chennai Cabs", "Hyderabad ⇄ Srisailam Cabs", "Guntur ⇄ Hyderabad Taxi"
              ].map(route => (
                <li key={route} className="text-white hover:text-orange-500 transition cursor-pointer flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  {route}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-black uppercase tracking-widest mb-6">Our Services</h3>
            <ul className="grid grid-cols-1 gap-4 text-xl font-black">
              {[
                "Taxi service Vijayawada", "Car travels Vijayawada", "Hyderabad taxi service",
                "Guntur car travels", "Tempo traveller Vijayawada", "Mini bus Vijayawada",
                "Taxi service near me", "Car travels near me", "Best car travels Vijayawada"
              ].map(service => (
                <li key={service} className="text-white hover:text-orange-500 transition cursor-pointer flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">📍</span>
                <span>Vijayawada & Hyderabad,<br/>Andhra Pradesh & Telangana</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">📞</span>
                <span>+91 9948924786</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✉️</span>
                <span>fastcartravels4@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* SEO Keywords Section */}
        <div className="border-t border-slate-800 py-12 mb-8">
          <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-50 text-center">Comprehensive Service Network & Popular Searches</h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-300 font-bold">
            {[
              "Hyderabad to Vijayawada", "Vijayawada to Hyderabad cab", "Vijayawada to Hyderabad Cabs", "Vijayawada to Hyderabad taxi", 
              "Hyderabad to Vijayawada cab", "Hyderabad to Vijayawada Cabs", "Hyderabad to Vijayawada taxi", "Guntur to Hyderabad taxi", 
              "Guntur to Hyderabad Cabs", "Guntur to Hyderabad cab", "Hyderabad to Guntur cab", "Hyderabad to Guntur taxi", 
              "Hyderabad to Guntur Cabs", "Hyderabad to Bengaluru Cabs", "Hyderabad to Bengaluru taxi", "Hyderabad to Tirupati Cabs", 
              "Hyderabad to Chennai cabs", "Vijayawada to Ongole taxi", "Vijayawada to Ongole cab", "Vijayawada to Rajahmundry cab", 
              "Vijayawada to Rajahmundry Cabs", "Vijayawada to Tirupati cab", "Vijayawada to Tirupati Cabs", "Vijayawada to Tirupati taxi", 
              "Vijayawada to Chennai cab", "Vijayawada to Chennai taxi", "Vijayawada to Bhimavaram Cabs", "Vijayawada to Eluru Cabs", 
              "Vijayawada to Tadepalligudem Cabs", "Vijayawada to Tanuku Cabs", "Vijayawada to Srisailam cabs", "Ongole to Vijayawada Cabs", 
              "Tirupati to Vijayawada Cabs", "Chennai to Hyderabad taxi", "Chennai to Hyderabad cab", "Hyderabad to Rajahmundry cab", 
              "Hyderabad to Rajahmundry taxi", "Hyderabad to Eluru cab", "Hyderabad to Eluru taxi", "Hyderabad to Tenali cab", 
              "Hyderabad to Tenali taxi", "Hyderabad to Bapatla cab", "Hyderabad to Bapatla taxi", "Hyderabad to Ongole taxi", 
              "Hyderabad to Ongole Cab", "Hyderabad to Tirupati taxi", "Hyderabad to Tanuku cabs", "Hyderabad to Tadepalligudem Cabs", 
              "Hyderabad to Machilipatnam cabs", "Hyderabad to Gudivada cabs", "Hyderabad to Srisailam cabs", "Taxi service Vijayawada", 
              "Car travels Vijayawada", "Taxi service near me", "Car travels near me", "Vijayawada taxi service", "Vijayawada car travels", 
              "Best car travels Vijayawada", "Tempo traveller Vijayawada", "Mini bus Vijayawada", "Tempo traveller hire Vijayawada", 
              "Taxi service Hyderabad", "Car travels in Hyderabad", "Hyderabad taxi service", "Hyderabad car travels", 
              "Cab service Vijayawada", "Cab service Hyderabad", "Car travels Guntur", "Taxi service Guntur", "Guntur taxi service", 
              "Guntur car travels", "Car travels Tenali", "Taxi service Tenali", "Taxi service Machilipatnam", "Car travels Machilipatnam", 
              "Urbaniya Tempo Traveller", "Best car travels"
            ].map((keyword, idx) => (
              <span key={idx} className="hover:text-orange-500 transition cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></span>
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Fast car Travels. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
