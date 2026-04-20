import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-extrabold tracking-tight text-white mb-4 block">Shannu<span className="text-orange-500">Cabs</span></span>
            <p className="text-sm leading-relaxed mb-6">
              Premium car travel agency providing outstation cab booking, airport transfers, and corporate rentals across Hyderabad and Vijayawada.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition">Our Services</Link></li>
              <li><Link href="/fleet" className="hover:text-orange-400 transition">Vehicle Fleet</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Popular Routes</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 hover:text-white cursor-default transition">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Vijayawada ⇄ Hyderabad
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-default transition">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Hyderabad ⇄ Srisailam
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-default transition">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Vijayawada ⇄ Vizag / Araku
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-default transition">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Hyderabad ⇄ Tirupati
              </li>
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
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Shannu Cabs. All rights reserved.</p>
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
