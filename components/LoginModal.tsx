"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, ArrowRight, Lock, CheckCircle } from 'lucide-react';

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already logged in
    const loggedIn = localStorage.getItem("fast_travels_customer_logged");
    if (!loggedIn) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name / దయచేసి మీ పేరు ఎంటర్ చేయండి");
      return;
    }

    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number / దయచేసి 10 అంకెల ఫోన్ నెంబర్ ఇవ్వండి");
      return;
    }

    setLoading(true);

    const payload = {
      access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
      subject: `🚨 NEW WEBSITE LOGIN: ${name.trim()} (${cleanPhone})`,
      from_name: "Amaravathi Fast Car Travels Website",
      name: name.trim(),
      phone: cleanPhone,
      Customer_Name: name.trim(),
      Customer_Number: cleanPhone,
      Submitted_At: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      Page_Url: typeof window !== "undefined" ? window.location.href : ""
    };

    try {
      // 1. Try server-side route first for reliability
      const serverRes = await fetch("/api/login-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        })
      });

      let emailSent = serverRes.ok;

      // 2. Direct Web3Forms submission as fallback
      if (!emailSent) {
        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });
        emailSent = directRes.ok;
      }

      setIsSuccess(true);
      localStorage.setItem("fast_travels_customer_logged", "true");
      localStorage.setItem("fast_travels_customer_name", name.trim());
      localStorage.setItem("fast_travels_customer_phone", cleanPhone);
      
      setTimeout(() => {
        setIsOpen(false);
      }, 1200);

    } catch (err) {
      console.error("Login email submission error:", err);
      // Fallback unlock so website access works
      localStorage.setItem("fast_travels_customer_logged", "true");
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1200);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-md bg-slate-900 border border-yellow-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden text-white relative"
        >
          {/* Top Header */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-6 pt-8 text-center relative border-b border-white/10">
            <div className="mx-auto w-20 h-20 mb-3 bg-white/5 rounded-2xl p-2 border border-yellow-500/30 shadow-xl flex items-center justify-center">
              <img
                src="/logo-clean.png"
                alt="Amaravathi Fast Car Travels"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              AMARAVATHI <span className="text-yellow-400">FAST CAR TRAVELS</span>
            </h2>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mt-1">
              Customer Login / కస్టమర్ లాగిన్
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <p className="text-slate-300 text-xs sm:text-sm font-medium text-center mb-6 leading-relaxed">
              Please enter your details to unlock our website tariffs, cab availability & instant 24/7 booking access.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/40 rounded-2xl p-6 text-center space-y-3"
              >
                <CheckCircle className="text-green-400 mx-auto" size={48} />
                <h3 className="text-xl font-extrabold text-green-400">Login Successful!</h3>
                <p className="text-xs text-green-200">Welcome to Amaravathi Fast Car Travels. Opening website...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold p-3 rounded-xl text-center">
                    {error}
                  </div>
                )}

                {/* Customer Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Customer Name <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 text-orange-400 pointer-events-none" size={18} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Customer Name"
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-yellow-400 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold text-white placeholder-slate-500 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Customer Number (Strict 10 digits max) */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Customer Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="absolute left-4 text-orange-400 pointer-events-none" size={18} />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10-digit Mobile Number"
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-yellow-400 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold text-white placeholder-slate-500 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-base py-4 rounded-xl shadow-[0_10px_25px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2 tracking-wider uppercase cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    <>
                      <span>LOGIN</span>
                      <ArrowRight size={20} className="stroke-[3]" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                  <Lock size={12} className="text-yellow-400" />
                  <span>Your details are 100% safe & private.</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
