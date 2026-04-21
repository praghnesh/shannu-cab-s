"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Travel Guide', href: '/guide' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-blue-950 transition-transform group-hover:scale-105">
                Fast <span className="text-orange-500">Travels</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-orange-500 font-bold transition-all relative group text-sm uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919948924786" 
              className="flex items-center gap-3 bg-blue-950 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-900 transition shadow-xl shadow-blue-950/20"
            >
              <PhoneCall size={18} />
              <span className="hidden xl:inline">BOOK NOW</span>
              <span className="xl:hidden">CALL</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative z-[110] p-2 text-gray-900 hover:text-orange-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[105] bg-white lg:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col items-center space-y-8 w-full max-w-sm">
              <div className="text-center mb-4">
                <span className="text-4xl font-black text-blue-950">Fast <span className="text-orange-500">Travels</span></span>
                <p className="text-gray-500 mt-2 font-medium">Your trusted travel partner 24/7</p>
              </div>
              
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-black text-gray-900 hover:text-orange-500 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}

              <a 
                href="tel:+919948924786" 
                className="flex items-center justify-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-3xl font-black w-full text-center shadow-2xl shadow-orange-500/30 text-xl tracking-tight"
              >
                <PhoneCall size={28} />
                +91 9948924786
              </a>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-50 p-3 rounded-2xl mb-2">
                    <ShieldCheck className="text-blue-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-400">SAFE</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-orange-50 p-3 rounded-2xl mb-2">
                    <Clock className="text-orange-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-400">24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
