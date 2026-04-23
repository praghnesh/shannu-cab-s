"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, PhoneCall, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] py-3 border-b border-slate-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group relative z-[1001]">
              <span className={`text-2xl sm:text-3xl font-black tracking-tighter transition-colors duration-300 ${scrolled ? 'text-blue-950' : 'text-white'}`}>
                Fast car <span className="text-orange-500">Travels</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative group ${
                    scrolled ? 'text-slate-600 hover:text-orange-500' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919948924786" 
                className="flex items-center gap-3 bg-orange-500 text-white px-8 py-3.5 rounded-2xl font-black text-sm tracking-widest shadow-2xl hover:bg-blue-950 transition-colors"
              >
                <PhoneCall size={18} />
                BOOK NOW
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden relative z-[3001]">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-2xl border ${
                  isOpen 
                    ? 'bg-orange-500 text-white border-orange-400 rotate-90 scale-110' 
                    : scrolled 
                      ? 'bg-blue-950 text-white border-blue-900 shadow-blue-950/20' 
                      : 'bg-white/10 backdrop-blur-md text-white border-white/20'
                }`}
              >
                {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Drawer Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm z-[1100] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-[1200] lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.2)] flex flex-col"
            >
              <div className="p-10 flex-grow">
                <div className="flex justify-between items-start mb-12">
                   <div>
                      <span className="text-3xl font-black text-blue-950 tracking-tighter">Fast car <span className="text-orange-500">Travels</span></span>
                      <p className="text-slate-400 text-sm mt-2 font-medium">Your VIP Travel Partner</p>
                   </div>
                   <button 
                     onClick={() => setIsOpen(false)}
                     className="p-3 bg-slate-100 rounded-xl text-blue-950 hover:bg-orange-500 hover:text-white transition-colors lg:hidden"
                   >
                     <X size={20} strokeWidth={3} />
                   </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black text-blue-950 hover:text-orange-500 transition-colors flex justify-between items-center group"
                    >
                      {link.name}
                      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                    </Link>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-slate-100">
                  <a 
                    href="tel:+919948924786" 
                    className="flex flex-col gap-2 group"
                  >
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Concierge 24/7</span>
                    <span className="text-2xl font-black text-blue-950 group-hover:text-orange-500 transition-colors">+91 9948924786</span>
                  </a>
                </div>
              </div>

              <div className="p-10 bg-slate-50 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <ShieldCheck className="text-blue-600 mb-1" size={24} />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Secured</span>
                  <span className="text-xs font-bold text-blue-950">LIVE HUB</span>
                </div>
                <div className="flex flex-col gap-1">
                  <Clock className="text-orange-500 mb-1" size={24} />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Always</span>
                  <span className="text-xs font-bold text-blue-950">24/7 ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
