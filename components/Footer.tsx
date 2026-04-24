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
            <h3 className="text-white text-lg font-semibold mb-4">Popular Routes</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li className="hover:text-white transition">Hyderabad ⇄ Vijayawada Cab</li>
              <li className="hover:text-white transition">Vijayawada ⇄ Hyderabad Taxi</li>
              <li className="hover:text-white transition">Hyderabad ⇄ Guntur Cabs</li>
              <li className="hover:text-white transition">Hyderabad ⇄ Bengaluru Cabs</li>
              <li className="hover:text-white transition">Hyderabad ⇄ Tirupati Taxi</li>
              <li className="hover:text-white transition">Vijayawada ⇄ Rajahmundry Cab</li>
              <li className="hover:text-white transition">Vijayawada ⇄ Chennai Cabs</li>
              <li className="hover:text-white transition">Hyderabad ⇄ Srisailam Cabs</li>
              <li className="hover:text-white transition">Guntur ⇄ Hyderabad Taxi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li className="hover:text-white transition">Taxi service Vijayawada</li>
              <li className="hover:text-white transition">Car travels Vijayawada</li>
              <li className="hover:text-white transition">Hyderabad taxi service</li>
              <li className="hover:text-white transition">Guntur car travels</li>
              <li className="hover:text-white transition">Tempo traveller Vijayawada</li>
              <li className="hover:text-white transition">Mini bus Vijayawada</li>
              <li className="hover:text-white transition">Taxi service near me</li>
              <li className="hover:text-white transition">Car travels near me</li>
              <li className="hover:text-white transition">Best car travels Vijayawada</li>
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
                <span>hassanbabushaik1786@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* SEO Keywords Section */}
        <div className="border-t border-slate-800 py-12 mb-8">
          <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-50 text-center">Comprehensive Service Network & Popular Searches</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] text-slate-500 font-medium">
            {[
              "Hyderabad to vijayawada", "Vijayawada to Hyderabad cab", "Vijayawada to Hyderabad Cabs", "Vijayawada to Hyderabad taxi", 
              "Hyderabad to Vijayawada cab", "Hyderabad to Vijayawada Cabs", "Hyderabad to Vijayawada taxi", "Guntur to Hyderabad taxi", 
              "Guntur to Hyderabad Cabs", "Guntur to Hyderabad cab", "Hyderabad to Guntur cab", "Hyderabad to Guntur taxi", 
              "Hyderabad to Guntur Cabs", "Hyderabad to Bengaluru Cabs", "Hyderaba to Bengaluru taxi", "Hyderabad to Tirupati Cabs", 
              "Hyderaba to Chennai cabs", "Hyderabad to Bengaluru taxi", "Vijayawada to Ongole taxi", "Vijayawada to Ongole cab", 
              "Vijayawada to Rajahmundry cab", "Vijayawada to Rajahmundry Cabs", "Vijayawada to Tirupati cab", "Vijayawada to Tirupati Cabs", 
              "Vijayawada to Tirupati taxi", "Vijayawada to Chennai cab", "Vijayawada to Chennai taxi", "Vijayawada to Bhimavaram Cabs", 
              "Vijayawada to Eluru Cabs", "Vijayawada to Tadepalligudem Cabs", "Vijayawada to Tanuku Cabs", "Vijayawada to Srisailam cabs", 
              "Ongole to Vijayawada Cabs", "Tirupati to Vijayawada Cabs", "Chennai to Hyderabad taxi", "Chennai to Hyderabad cab", 
              "Hyderabad to Rajahmundry cab", "Hyderabad to Rajahmundry taxi", "Hyderabad to Eluru cab", "Hyderabad to Eluru taxi", 
              "Hyderabad to Tenali cab", "Hyderabad to Tenali taxi", "Hyderabad to Bapatla cab", "Hyderabad to Bapatla taxi", 
              "Hyderabad to Ongole taxi", "Hyderabad to Ongole Cab", "Hyderabad to Tirupati taxi", "Hyderaba to Tanuku cabs", 
              "Hyderaba to Tadepalligudem Cabs", "Hyderaba to machilipatnam cabs", "Hyderaba to gudivada cabs", "Hyderaba to srisailam cabs", 
              "Taxi service Vijayawada", "Car travels Vijayawada", "Taxi service near me", "Car travels near me", "Vijayawada taxi service", 
              "Vijayawada car travels", "Best car travels Vijayawada", "Tempo traveller Vijayawada", "Mini bus Vijayawada", 
              "Tempo traveller hire Vijayawada", "Taxi service Hyderabad", "Car travels in Hyderabad", "Hyderaba taxi service", 
              "Hyderaba car travels", "Cab service Vijayawada", "Cab service Hyderabad", "Car travels Guntur", "Taxi service Guntur", 
              "Guntur taxi service", "Guntur car travels", "Car travels tenali", "Taxi service tenali", "Taxi service machilipatnam", 
              "Car travels machilipatnam", "Urbaniya tempo travellels"
            ].map((keyword, idx) => (
              <span key={idx} className="hover:text-orange-500 transition cursor-default flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
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
