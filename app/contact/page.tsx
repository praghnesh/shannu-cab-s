"use client";
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      FirstName: formData.get('firstName'),
      LastName: formData.get('lastName'),
      Mobile: formData.get('phone'),
      Message: formData.get('message')
    };

    try {
      await fetch("https://formsubmit.co/ajax/hassanbabushaik1786@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Form Message from ${data.FirstName}`,
          ...data
        })
      });
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    setTimeout(() => setSuccess(false), 8000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          
          <div className="bg-blue-950 p-6 sm:p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-blue-200 mb-12 text-lg">We'd love to hear from you. Get in touch directly for customized travel arrangements and group bookings!</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-4 rounded-xl text-orange-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call/WhatsApp Us</p>
                  <p className="text-xl font-bold">+91 9948924786</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-4 rounded-xl text-orange-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email Address</p>
                  <p className="font-semibold text-base sm:text-lg break-all">hassanbabushaik1786@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-4 rounded-xl text-orange-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Main Office</p>
                  <p className="font-semibold text-lg">Vijayawada & Hyderabad,<br/>Andhra Pradesh & Telangana</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 md:w-3/5 bg-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us A Message</h3>
            
            {success ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center font-medium border border-green-200">
                <p className="text-xl font-bold mb-2">Message Sent Successfully!</p>
                <p>Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input name="firstName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input name="lastName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input name="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Details</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="How can we help you?..."></textarea>
                </div>
                
                <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 disabled:opacity-75">
                  {loading ? 'Sending...' : 'Send Notification'}
                </button>
              </form>
            )}
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
