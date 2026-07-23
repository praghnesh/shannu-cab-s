"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Car, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Navigation,
  Compass,
  Building2,
  Mail,
  Calendar,
  Check,
  Star,
  Image as ImageIcon,
  Map as MapIcon,
  Award,
  ThumbsUp,
  Search,
  HelpCircle
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import LiveMap from '@/components/LiveMap';

export default function HyderabadToVijayawadaPage() {
  const farePlans = [
    {
      carType: "Swift Dzire or Similar",
      category: "Sedan (4+1)",
      price: "₹5,500",
      ideal: "Ideal for 1-4 Passengers",
      image: "/sedan.png",
      popular: false,
      features: ["All Inclusive Fare", "AC Clean Cab", "Doorstep Pickup", "Zero Hidden Charges"]
    },
    {
      carType: "Ertiga",
      category: "SUV (6+1)",
      price: "₹7,000",
      ideal: "Ideal for 5-6 Passengers / Families",
      image: "/EART.png",
      popular: true,
      features: ["Spacious Boot Space", "Dual AC", "Doorstep Pickup", "All Inclusive Fare"]
    },
    {
      carType: "Innova / Crysta",
      category: "Luxury SUV (7+1)",
      price: "₹8,500",
      ideal: "Ultimate Comfort & Long Drives",
      image: "/CRISTA.png",
      popular: false,
      features: ["Captain Seats", "VIP Travel Standard", "Extra Legroom", "All Inclusive Fare"]
    }
  ];

  const highlights = [
    { label: "Fare Starts From", value: "₹5,500", detail: "Swift Dzire or Similar" },
    { label: "Distance", value: "274 Kms", detail: "Express Highway Route" },
    { label: "Travel Time", value: "4.5 - 5 Hrs", detail: "Approximate Duration" },
    { label: "Other Charges", value: "₹0 Extra", detail: "All Inclusive Fare (Fuel, Tolls, Driver)" },
    { label: "Doorstep Pickup/Drop", value: "YES", detail: "At your preferred location" },
    { label: "Multiple Pickups/Drops", value: "YES", detail: "Customizable route points" },
  ];

  const vehicleBrands = [
    "Swift DZire", "Toyota Etios", "Innova", "Innova Crysta", "Honda City", "Ciaz", "Ertiga", "Tempo Traveller", "Urbaniya Tempo Traveller"
  ];

  const vijayawadaAttractions = [
    { name: "Dhyana Buddha Statue", desc: "Majestic 125-ft tall Buddha statue located in Amaravati, Vijayawada region.", image: "/route-photos/dhyana-buddha.jpg" },
    { name: "Kanaka Durga Temple", desc: "Sacred temple atop Indrakeeladri hill on the banks of Krishna River.", image: "/dwarakatirumala.png" },
    { name: "Prakasam Barrage", desc: "Iconic structure stretching 1223.5 meters across the Krishna river.", image: "/outstation.png" },
    { name: "Undavalli Caves", desc: "Monolithic Indian rock-cut architecture dating back to 4th century.", image: "/temple.png" },
    { name: "Bhavani Island", desc: "One of the largest river islands with serene water adventure sports.", image: "/araku_valley.png" },
    { name: "Gandhi Hill", desc: "Historical memorial hill with sound & light show and panoramic views.", image: "/city.png" }
  ];

  const hyderabadAttractions = [
    { name: "Hussain Sagar Buddha Statue", desc: "Monolithic Buddha statue standing in the heart of Hussain Sagar lake.", image: "/route-photos/hussain-sagar-buddha.png" },
    { name: "Top 10 Hyderabad Attractions", desc: "Charminar, Ramoji Film City, Birla Mandir and historical landmarks.", image: "/route-photos/hyd-10-tourist-places.png" },
    { name: "Top 30 Sightseeing Locations", desc: "Mecca Masjid, Golconda Fort, Zoo Park & Salar Jung Museum.", image: "/route-photos/hyd-30-tourist-places.jpg" }
  ];

  // Comprehensive SEO Routes & Keywords
  const seoKeywordsList = [
    "Hyderabad to vijayawada taxi service", "Vijayawada to Hyderabad cab", "Vijayawada to Hyderabad Cabs", "Vijayawada to Hyderabad taxi",
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
    "Urbaniya tempo traveller", "Andhra Telangana cab/cabs/taxi service"
  ];

  // All User uploaded & promotional photos combined
  const tourGalleryPhotos = [
    { src: "/route-photos/hyd-10-tourist-places.png", title: "Hyderabad Sightseeing & Tourist Attractions", caption: "Charminar, Ramoji Film City & Iconic Landmarks in Hyderabad" },
    { src: "/route-photos/poster-happy-customer.png", title: "Happy Customer Reviews", caption: "Fast, Safe & Comfortable Journeys with Amaravathi Fast Car Travels" },
    { src: "/route-photos/fast-car-travels-banner.jpg", title: "Amaravathi Fast Car Travels Chauffeur Banner", caption: "Call +91 9948924786 for Rentals, Tours, Outstation & Airport Drops" },
    { src: "/route-photos/poster-one-way.jpg", title: "Amaravathi Fast Car Travels One Way Offer", caption: "Chilakaluripet & Vijayawada to Hyderabad One Way Drop Rs. 6750/-" },
    { src: "/route-photos/poster-taxi-247.png", title: "24/7 Taxi Service Concierge", caption: "Call +91 9948924786 anytime for instant booking" },
    { src: "/route-photos/hussain-sagar-buddha.png", title: "Hussain Sagar Buddha Statue Hyderabad", caption: "Iconic landmark of Hyderabad city" },
    { src: "/route-photos/dhyana-buddha.jpg", title: "Dhyana Buddha Statue Amaravati", caption: "Popular attraction near Vijayawada & Guntur" },
    { src: "/route-photos/hyd-10-tourist-places.png", title: "Hyderabad Sightseeing Tour", caption: "Charminar, Ramoji Film City & Temples" },
    { src: "/route-photos/hyd-30-tourist-places.jpg", title: "Top Hyderabad Places", caption: "Explore all 30 top places with our custom cab packages" },
    { src: "/route-photos/travel-booking.png", title: "Doorstep Pickup & Easy Booking", caption: "Hassle-free intercity cab service" },
    { src: "/route-photos/taxi-app-booking.png", title: "Mobile & Online Cab Booking", caption: "Fast booking with instant confirmation" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      {/* Hero Header Section */}
      <section className="relative bg-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banner.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-7/12 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-black text-xs uppercase tracking-widest">
                <Sparkles size={14} /> Our Special Tour Package
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                Hyderabad To <br />
                <span className="text-orange-500">Vijayawada Cab</span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed">
                Looking for a comfortable, affordable & hassle-free trip between Hyderabad and Vijayawada? Book <strong className="text-white">Amaravathi Fast Car Travels</strong> cheapest cab tour with all-inclusive fares starting at just <span className="text-yellow-400 font-bold">₹5,500</span>.
              </p>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase">Fare Starts</p>
                  <p className="text-2xl font-black text-orange-400">₹5,500</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase">Distance</p>
                  <p className="text-2xl font-black text-white">274 Kms</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase">Time</p>
                  <p className="text-2xl font-black text-white">4.5-5 Hrs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase">Pickup</p>
                  <p className="text-2xl font-black text-green-400">Doorstep</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="tel:+919948924786"
                  className="inline-flex items-center gap-3 bg-orange-500 text-white font-black px-8 py-4 rounded-2xl text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
                >
                  <PhoneCall size={20} /> CALL NOW: 9948924786
                </a>
                <a
                  href="#booking-section"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all border border-white/20"
                >
                  <Calendar size={20} /> BOOK ONLINE
                </a>
              </div>
            </motion.div>

            {/* Quick Fare Breakdown Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-5/12 w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-black text-orange-500 uppercase tracking-wider">SPECIAL RATE CARD</span>
                  <h3 className="text-2xl font-black text-blue-950">Hyderabad ⇄ Vijayawada</h3>
                </div>
                <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl font-black text-xs">
                  ALL INCLUSIVE
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="font-black text-blue-950">Swift Dzire or Similar</h4>
                    <p className="text-xs text-slate-500 font-medium">Sedan • 4 Passengers</p>
                  </div>
                  <span className="text-2xl font-black text-orange-500">₹5,500</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl border border-orange-200 relative">
                  <span className="absolute -top-3 right-4 bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">POPULAR</span>
                  <div>
                    <h4 className="font-black text-blue-950">Ertiga</h4>
                    <p className="text-xs text-slate-500 font-medium">SUV • 6 Passengers</p>
                  </div>
                  <span className="text-2xl font-black text-orange-600">₹7,000</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="font-black text-blue-950">Innova / Crysta</h4>
                    <p className="text-xs text-slate-500 font-medium">Luxury SUV • 7 Passengers</p>
                  </div>
                  <span className="text-2xl font-black text-orange-500">₹8,500</span>
                </div>
              </div>

              <div className="bg-blue-950 text-white p-4 rounded-2xl space-y-2 text-sm font-medium mb-6">
                <p className="flex items-center gap-2 text-xs font-bold text-orange-400">
                  <CheckCircle2 size={16} /> NO OTHER CHARGES - ALL INCLUSIVE FARE
                </p>
                <p className="text-slate-300 text-xs">Includes Toll Charges, Fuel Charges & Chauffeur Allowance.</p>
              </div>

              <a
                href="tel:+919948924786"
                className="w-full py-4 bg-blue-950 hover:bg-orange-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-colors text-center text-base"
              >
                <PhoneCall size={18} /> CALL TO BOOK THIS PLAN
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED FAST CAR TRAVELS BANNER SECTION */}
      <section className="py-8 bg-blue-950 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Banner 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-500 bg-slate-900 h-64 sm:h-96">
              <Image 
                src="/route-photos/fast-car-travels-banner.jpg" 
                alt="Fast Car Travels Official Banner" 
                fill 
                className="object-cover bg-black"
              />
            </div>
            {/* Hyderabad Tourist Places Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-500 bg-slate-900 h-64 sm:h-96">
              <Image 
                src="/route-photos/hyd-10-tourist-places.png" 
                alt="Hyderabad Sightseeing & City Landmarks" 
                fill 
                className="object-cover bg-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Specs Matrix */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center flex flex-col justify-center">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-black text-blue-950 mb-1">{item.value}</p>
                <p className="text-[11px] font-semibold text-orange-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tour Details & Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Article & Details Left Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Article */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="inline-flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest">
                <Navigation size={16} /> Complete Tour Guide & Information
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
                Hyderabad to Vijayawada Cab Tour Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6 items-center my-4">
                <div className="space-y-4">
                  <p className="text-slate-600 text-base leading-relaxed">
                    Hyderabad and Vijayawada are two of the most popular cities in South India, and there are several ways to travel between them. However, if you are looking for a comfortable and hassle-free journey, then a cab tour is a great option.
                  </p>

                  <p className="text-slate-600 text-base leading-relaxed">
                    <strong>Amaravathi Fast Car Travels</strong> is a renowned car rental service provider in Hyderabad that offers affordable cab tours to Vijayawada. In this article, we will take a detailed look at Amaravathi Fast Car Travels’ cheapest Hyderabad to Vijayawada cab tour.
                  </p>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image 
                    src="/route-photos/travel-booking.png" 
                    alt="Hyderabad to Vijayawada Cab Travel" 
                    fill 
                    className="object-contain bg-slate-50 p-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3 text-orange-500 font-black">
                    <ShieldCheck size={24} />
                    <span>Doorstep Pickup & Drop</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Enjoy convenient doorstep pickup anywhere in Hyderabad and drop-off at your exact location in Vijayawada.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3 text-orange-500 font-black">
                    <Clock size={24} />
                    <span>Flexible Timings</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Choose your pickup time as per your convenience — early morning departures or late-night express travel.
                  </p>
                </div>
              </div>
            </div>

            {/* LIVE HYDERABAD TO VIJAYAWADA MAP & ROUTE NAV SECTION */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
                    <MapIcon size={16} /> Live Route Directions
                  </span>
                  <h3 className="text-2xl font-black text-blue-950 mt-1">Hyderabad ⇄ Vijayawada Express Map</h3>
                </div>
                <div className="bg-blue-950 text-white px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2">
                  <Navigation size={14} className="text-orange-400" /> NH 65 Express Route (274 Kms)
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <p className="text-slate-600 text-sm mb-4">
                    Explore the complete route from Hyderabad to Vijayawada via Suryapet & Nandigama. Interactive live map with live traffic & route navigation:
                  </p>
                </div>
                <div className="md:col-span-4 relative h-32 rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src="/route-photos/taxi-route-nav.png" 
                    alt="Taxi Navigation Illustration" 
                    fill 
                    className="object-contain bg-slate-50 p-2"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center pt-2">
                <LiveMap location="Hyderabad" destination="Vijayawada" isVisible={true} />
              </div>
            </div>

            {/* Pricing and Inclusions & Special One Way Poster */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-black text-blue-950 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-black">1</span>
                Pricing and Inclusions
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-slate-600 text-base leading-relaxed">
                    Amaravathi Fast Car Travels’ cheapest Hyderabad to Vijayawada cab tour starts at just <strong>Rs. 5,500</strong>. This package includes transportation from Hyderabad to Vijayawada and back, as well as a tour of the main attractions in Vijayawada.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    The package also includes driver charges, fuel charges, and toll charges, so you don’t have to worry about any hidden costs.
                  </p>

                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl">
                    <h4 className="font-black text-blue-950 mb-3 text-sm uppercase tracking-wider">What's Included in your fare:</h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-semibold">
                      <div className="flex items-center gap-2"><CheckCircle2 className="text-orange-500" size={18} /> Fuel Charges Included</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="text-orange-500" size={18} /> Toll Gate & Expressway Fees</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="text-orange-500" size={18} /> Experienced Chauffeur Allowance</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="text-orange-500" size={18} /> 24/7 Customer Support</div>
                    </div>
                  </div>
                </div>

                {/* Poster 1 Image */}
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                  <Image 
                    src="/route-photos/poster-one-way.jpg" 
                    alt="Amaravathi Fast Car Travels One Way Poster" 
                    fill 
                    className="object-contain bg-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* CUSTOMER REVIEWS & TESTIMONIAL POSTER SECTION */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-widest">
                <ThumbsUp size={16} /> Verified Customer Feedback
              </div>

              <h3 className="text-2xl font-black text-blue-950">Why Customers Love Amaravathi Fast Car Travels</h3>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400 bg-black">
                  <Image 
                    src="/route-photos/poster-happy-customer.png" 
                    alt="Happy Customer Testimonial Poster" 
                    fill 
                    className="object-contain bg-slate-900"
                  />
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex text-yellow-400 gap-1"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                    <p className="text-sm font-semibold text-slate-700 italic">"Very comfortable and smooth journey from Vijayawada to Hyderabad. Neat car, professional driver and excellent service."</p>
                    <p className="text-xs font-black text-blue-950 uppercase">— Verified Rider</p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex text-yellow-400 gap-1"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                    <p className="text-sm font-semibold text-slate-700 italic">"Best travel experience ever! Worth every penny. Will definitely book again with Fast Car Travels."</p>
                    <p className="text-xs font-black text-blue-950 uppercase">— Ramesh K.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cab Options & Vehicle Brands */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-black text-blue-950 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-black">2</span>
                Cab Options on Hyderabad To Vijayawada Cab
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Amaravathi Fast Car Travels offers a range of cab options to choose from, depending on your budget and requirements. They have a fleet of well-maintained and air-conditioned cars, including Sedan, Innova, and Tempo Traveller. You can choose the cab that best suits your needs and preferences.
              </p>

              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Available Car Brands in Fleet:</h4>
                <div className="flex flex-wrap gap-3">
                  {vehicleBrands.map((brand, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 text-blue-950 font-black text-xs rounded-xl border border-slate-200 flex items-center gap-2">
                      <Car size={14} className="text-orange-500" /> {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experienced Drivers & Customizable Packages */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-black">3</span>
                  Experienced Drivers
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Amaravathi Fast Car Travels’ drivers are experienced and well-trained, ensuring a comfortable and safe journey to Vijayawada. They are knowledgeable about the local routes and can guide you through the main attractions in Vijayawada.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-black">4</span>
                  Customizable Packages
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Amaravathi Fast Car Travels also offers customizable cab tour packages to Vijayawada, where you can select the places you want to visit and the duration of the tour. This allows you to plan a trip that is tailored to your preferences and interests.
                </p>
              </div>
            </div>

            {/* Booking Process & 24/7 Taxi Service Banner */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-black text-blue-950 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-black">5</span>
                Booking Process
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-slate-600 text-base leading-relaxed">
                    Booking a cab tour with Amaravathi Fast Car Travels is easy and hassle-free. You can book online through their website or mobile app, or you can call their customer care number to make a booking.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    They also offer 24/7 customer support, so you can contact them at any time if you have any queries or concerns.
                  </p>
                </div>

                {/* Poster 2 Image (24/7 Taxi Service) */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                  <Image 
                    src="/route-photos/poster-taxi-247.png" 
                    alt="24/7 Taxi Service Amaravathi Fast Car Travels" 
                    fill 
                    className="object-contain bg-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* HYDERABAD SIGHTSEEING SPOTS SECTION */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <span className="text-xs font-black text-orange-500 uppercase tracking-widest">HYDERABAD PICKUP SIGHTSEEING</span>
              <h3 className="text-2xl font-black text-blue-950">Popular Tourist Places to Visit in Hyderabad</h3>
              <p className="text-slate-600 text-sm">
                Before or after your trip to Vijayawada, explore Hyderabad's top heritage sites & monuments with our local tour packages:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {hyderabadAttractions.map((spot, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image src={spot.image} alt={spot.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h4 className="absolute bottom-3 left-3 right-3 text-white font-black text-sm">{spot.name}</h4>
                    </div>
                    <p className="p-4 text-xs text-slate-500 font-medium leading-relaxed">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Attractions in Vijayawada & Dhyana Buddha */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-black text-blue-950 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-black">6</span>
                Main Attractions in Vijayawada
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Vijayawada is a beautiful city located on the banks of the Krishna River. Some of the main attractions in Vijayawada include the Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, Bhavani Island, Gandhi Hill, and the magnificent Dhyana Buddha Statue. With Amaravathi Fast Car Travels’ cheapest Hyderabad to Vijayawada cab tour, you can visit all these attractions and more.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                {vijayawadaAttractions.map((spot, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image src={spot.image} alt={spot.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h4 className="absolute bottom-3 left-3 right-3 text-white font-black text-sm">{spot.name}</h4>
                    </div>
                    <p className="p-4 text-xs text-slate-500 font-medium leading-relaxed">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ON-PAGE SEO CONTENT & KEYWORDS INDEX SECTION */}
            <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-8 border border-slate-800">
              <div className="flex items-center gap-3">
                <Search className="text-orange-500" size={24} />
                <div>
                  <span className="text-xs font-black text-orange-400 uppercase tracking-widest">ON-PAGE SEO DIRECTORY</span>
                  <h3 className="text-2xl font-black text-white">Popular Cab Routes & Taxi Search Terms</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Amaravathi Fast Car Travels offers 24/7 outstation taxi services, intercity cab bookings, one-way drop fares, and round-trip packages across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu.
              </p>

              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">All Popular Intercity Search Routes:</h4>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                  {seoKeywordsList.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 hover:bg-orange-500 hover:text-white transition-colors rounded-xl border border-slate-700">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Flexible Timings & Conclusion */}
            <div className="bg-blue-950 text-white p-8 sm:p-10 rounded-3xl space-y-6">
              <h3 className="text-2xl font-black text-white">Flexible Timings & Conclusion</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Amaravathi Fast Car Travels’ cab tour packages are flexible, allowing you to choose the timings that are most convenient for you. Whether you want to leave early in the morning or late in the evening, Amaravathi Fast Car Travels can accommodate your needs.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Amaravathi Fast Car Travels’ cheapest Hyderabad to Vijayawada cab tour is an excellent option for those looking for an affordable and comfortable way to explore this beautiful city. With our well-maintained cars, experienced drivers, and customizable packages, you can be sure of a memorable and hassle-free trip to Vijayawada. So, book your cab tour today and get ready for an unforgettable journey.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+919948924786"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-2xl text-base inline-flex items-center gap-3 transition-colors shadow-lg"
                >
                  <PhoneCall size={20} /> CALL NOW: 9948924786
                </a>

              </div>
            </div>

            {/* FULL TOUR GALLERY & ALL USER PHOTOS SECTION */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={16} /> Complete Photo Gallery
                  </span>
                  <h3 className="text-2xl font-black text-blue-950">Hyderabad ⇄ Vijayawada Tour Photo Collection</h3>
                </div>
              </div>

              <p className="text-slate-500 text-sm font-medium">
                Official posters, customer feedback banners, tour spots, and fleet photos for Hyderabad to Vijayawada Cab package:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourGalleryPhotos.map((photo, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-900">
                    <div className="relative h-52 w-full">
                      <Image src={photo.src} alt={photo.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="font-black text-sm mb-0.5">{photo.title}</h4>
                      <p className="text-[11px] text-slate-300 font-medium leading-tight">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column (Booking Form & Office Contact) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Mobile Booking Illustration Card */}
            <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 text-center space-y-4">
              <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                <Image 
                  src="/route-photos/taxi-app-booking.png" 
                  alt="Taxi Booking on Mobile" 
                  fill 
                  className="object-contain p-2 bg-slate-50"
                />
              </div>
              <h4 className="font-black text-blue-950 text-base">Instant Cab Booking</h4>
              <p className="text-xs text-slate-500">Book your cab directly online or give us a call for quick confirmation.</p>
            </div>

            {/* Direct Booking Form Widget */}
            <div id="booking-section" className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 space-y-6 sticky top-28">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-black text-orange-500 uppercase tracking-widest">FAST BOOKING</span>
                <h3 className="text-2xl font-black text-blue-950">Book Vijayawada Cab</h3>
              </div>

              <BookingForm />

              {/* Official Contact Card */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-5 pt-6 border border-slate-800">
                <h4 className="text-sm font-black text-orange-400 uppercase tracking-widest flex items-center gap-2">
                  <Building2 size={16} /> Office Contact Info
                </h4>

                <div className="space-y-4 text-xs font-medium text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-white">Office Address:</p>
                      <p className="mt-0.5">STREET NO 4 MANIKONDA, Alkapoor Township, Hyderabad, Telangana</p>
                      <p className="text-[11px] text-slate-400 mt-1">Services: Vijayawada & Hyderabad, AP & TS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="text-orange-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-white">Phone Numbers:</p>

                      <p className="text-xs text-white font-bold">+91 9948924786 (Main Concierge)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-orange-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-white">Office Email:</p>
                      <p className="mt-0.5 text-slate-200 font-mono">fastcartravels4@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-orange-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-white">Working Hours:</p>
                      <p className="mt-0.5 text-green-400 font-bold">MON - SUN: 24 HOURS ACTIVE</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <a
                    href="tel:+919948924786"
                    className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black text-center rounded-xl text-xs uppercase tracking-wider transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919948924786"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-black text-center rounded-xl text-xs uppercase tracking-wider transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
