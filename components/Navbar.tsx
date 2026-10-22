"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, PhoneCall, ShieldCheck, Clock, ArrowRight, MessageCircle } from 'lucide-react';
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
    { name: 'Special Plans', href: '/hyderabad-to-vijayawada-cab' },
    { name: 'Services', href: '/services' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Travel Guide', href: '/guide' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 flex flex-col ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-slate-100'
            : 'bg-transparent'
          }`}
      >
        {/* Top Quick Contact Banner - Always prominent */}
        <div className={`w-full py-2 px-4 sm:px-8 border-b transition-colors duration-300 ${
          scrolled ? 'bg-blue-950 text-white border-blue-900' : 'bg-black/50 backdrop-blur-md text-white border-white/10'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            <span className="hidden md:inline text-slate-300 font-semibold">
              Amaravathi Fast Car Travels · 24/7 Available Across AP & Telangana
            </span>
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <a 
                href="tel:+919393591444"
                className="inline-flex items-center gap-2 hover:text-orange-400 font-black tracking-wide transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <PhoneCall size={12} />
                </div>
                <span>Call: <strong className="text-orange-400 text-sm sm:text-base font-black">93935 91444</strong></span>
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-300 font-black tracking-wide transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={13} />
                </div>
                <span>WhatsApp: <strong className="text-emerald-400 text-sm sm:text-base font-black">93935 91444</strong></span>
              </a>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto w-full px-6 sm:px-8 transition-all duration-500 ${scrolled ? 'py-1' : 'py-3 sm:py-4'}`}>
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center gap-3.5 sm:gap-5 group relative z-[1001]">
              <div className="h-18 w-18 sm:h-22 sm:w-22 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo-clean.png"
                  alt="Amaravathi Fast Car Travels Logo"
                  className="w-full h-full object-contain block"
                />
              </div>
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter transition-colors duration-300 leading-tight">
                <span className={scrolled ? 'text-blue-950' : 'text-white'}>
                  Amaravathi
                </span>
                <span className={scrolled ? 'text-orange-500' : 'text-yellow-400'}>
                  {' '}Fast Car Travels
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative group ${scrolled ? 'text-slate-600 hover:text-orange-500' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}

              {/* Desktop WhatsApp Action */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl font-black text-xs tracking-wider shadow-lg transition-colors"
              >
                <MessageCircle size={16} />
                <span>93935 91444</span>
              </motion.a>

              {/* Desktop Call Action */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919393591444"
                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-2xl font-black text-sm tracking-wider shadow-lg hover:bg-blue-950 transition-colors"
              >
                <PhoneCall size={16} />
                <span className="font-black text-base">93935 91444</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden relative z-[3001]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-2xl border ${isOpen
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
                  <div className="flex items-center gap-4">
                    <div className="h-24 w-24 flex items-center justify-center shrink-0">
                      <img
                        src="/logo-clean.png"
                        alt="Amaravathi Fast Car Travels Logo"
                        className="w-full h-full object-contain block"
                      />
                    </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter leading-tight">
                          <span className="text-blue-950">Amaravathi</span>{' '}
                          <span className="text-orange-500">Fast Car Travels</span>
                        </span>
                        <p className="text-slate-400 text-sm mt-2 font-medium">Your VIP Travel Partner</p>
                      </div>
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

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="tel:+919393591444"
                    className="flex items-center gap-3 p-3.5 bg-blue-950 text-white rounded-2xl group shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <PhoneCall size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Call 24/7 · Direct Line</span>
                      <span className="text-lg font-black text-white">93935 91444</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-emerald-600 text-white rounded-2xl group shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">Instant WhatsApp</span>
                      <span className="text-base font-black text-white">93935 91444</span>
                    </div>
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
