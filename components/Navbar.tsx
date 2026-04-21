"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-4xl font-black tracking-tighter text-blue-950">Fast <span className="text-orange-500">Travels</span></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-500 font-medium transition">Services</Link>
            <Link href="/fleet" className="text-gray-700 hover:text-orange-500 font-medium transition">Our Fleet</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition">Contact</Link>
            <a href="tel:+919948924786" className="flex items-center gap-2 bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition shadow-lg shadow-blue-900/20">
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500">Services</Link>
            <Link href="/fleet" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500">Fleet</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500">Contact</Link>
            <a href="tel:+919948924786" className="mt-4 flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-bold w-full text-center shadow-lg">
              <PhoneCall size={20} />
              +91 9948924786
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
