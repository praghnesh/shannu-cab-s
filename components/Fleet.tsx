"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, ShieldCheck, Zap, ArrowRight, Star, X, MapPin, CheckCircle, Sparkles } from 'lucide-react';

const fleetData = [
  // Vijayawada ⇄ Hyderabad (Etios Base: ₹5000)
  { id: 101, name: "Etios", price: "₹5,000", route: "Vijayawada ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-blue-50" },
  { id: 102, name: "Swift Dzire", price: "₹5,000", route: "Vijayawada ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-blue-50" },
  { id: 103, name: "Ertiga", price: "₹7,500", route: "Vijayawada ⇄ Hyderabad", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-blue-50" },
  { id: 104, name: "Innova", price: "₹8,000", route: "Vijayawada ⇄ Hyderabad", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-blue-50" },
  { id: 105, name: "Innova Crysta Luxury", price: "₹8,500", route: "Vijayawada ⇄ Hyderabad", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-blue-50" },

  // Vijayawada ⇄ Hyderabad Airport (Etios Base: ₹5000)
  { id: 111, name: "Etios", price: "₹5,000", route: "Vijayawada ⇄ Hyderabad Airport", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-blue-50" },
  { id: 112, name: "Swift Dzire", price: "₹5,000", route: "Vijayawada ⇄ Hyderabad Airport", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-blue-50" },
  { id: 113, name: "Ertiga", price: "₹7,500", route: "Vijayawada ⇄ Hyderabad Airport", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-blue-50" },
  { id: 114, name: "Innova", price: "₹8,000", route: "Vijayawada ⇄ Hyderabad Airport", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-blue-50" },
  { id: 115, name: "Innova Crysta Luxury", price: "₹8,500", route: "Vijayawada ⇄ Hyderabad Airport", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-blue-50" },

  // Guntur ⇄ Hyderabad (Etios Base: ₹5500)
  { id: 121, name: "Etios", price: "₹5,500", route: "Guntur ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-red-50" },
  { id: 122, name: "Swift Dzire", price: "₹5,500", route: "Guntur ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-red-50" },
  { id: 123, name: "Ertiga", price: "₹8,000", route: "Guntur ⇄ Hyderabad", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-red-50" },
  { id: 124, name: "Innova", price: "₹8,000", route: "Guntur ⇄ Hyderabad", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-red-50" },
  { id: 125, name: "Innova Crysta Luxury", price: "₹8,500", route: "Guntur ⇄ Hyderabad", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-red-50" },

  // Hyderabad ⇄ Guntur (Etios Base: ₹5500)
  { id: 131, name: "Etios", price: "₹5,500", route: "Hyderabad ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-red-50" },
  { id: 132, name: "Swift Dzire", price: "₹5,500", route: "Hyderabad ⇄ Guntur", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-red-50" },
  { id: 133, name: "Ertiga", price: "₹8,000", route: "Hyderabad ⇄ Guntur", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-red-50" },
  { id: 134, name: "Innova", price: "₹8,000", route: "Hyderabad ⇄ Guntur", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-red-50" },
  { id: 135, name: "Innova Crysta Luxury", price: "₹8,500", route: "Hyderabad ⇄ Guntur", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-red-50" },

  // Hyderabad ⇄ Tenali (Etios Base: ₹6000)
  { id: 141, name: "Etios", price: "₹6,000", route: "Hyderabad ⇄ Tenali", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-teal-50" },
  { id: 142, name: "Swift Dzire", price: "₹6,000", route: "Hyderabad ⇄ Tenali", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-teal-50" },
  { id: 143, name: "Ertiga", price: "₹8,500", route: "Hyderabad ⇄ Tenali", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-teal-50" },
  { id: 144, name: "Innova", price: "₹11,000", route: "Hyderabad ⇄ Tenali", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-teal-50" },
  { id: 145, name: "Innova Crysta Luxury", price: "₹13,000", route: "Hyderabad ⇄ Tenali", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-teal-50" },

  // Hyderabad ⇄ Tirupati (Etios Base: ₹12000)
  { id: 151, name: "Etios", price: "₹12,000", route: "Hyderabad ⇄ Tirupati", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-yellow-50" },
  { id: 152, name: "Swift Dzire", price: "₹12,000", route: "Hyderabad ⇄ Tirupati", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-yellow-50" },
  { id: 153, name: "Ertiga", price: "₹16,000", route: "Hyderabad ⇄ Tirupati", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-yellow-50" },
  { id: 154, name: "Innova", price: "₹19,000", route: "Hyderabad ⇄ Tirupati", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-yellow-50" },
  { id: 155, name: "Innova Crysta Luxury", price: "₹21,000", route: "Hyderabad ⇄ Tirupati", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-yellow-50" },

  // Hyderabad ⇄ Bangalore (Etios Base: ₹12000)
  { id: 161, name: "Etios", price: "₹12,000", route: "Hyderabad ⇄ Bangalore", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-orange-50" },
  { id: 162, name: "Swift Dzire", price: "₹12,000", route: "Hyderabad ⇄ Bangalore", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-orange-50" },
  { id: 163, name: "Ertiga", price: "₹16,000", route: "Hyderabad ⇄ Bangalore", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-orange-50" },
  { id: 164, name: "Innova", price: "₹19,500", route: "Hyderabad ⇄ Bangalore", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-orange-50" },
  { id: 165, name: "Innova Crysta Luxury", price: "₹21,500", route: "Hyderabad ⇄ Bangalore", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-orange-50" },

  // Bangalore ⇄ Hyderabad (Etios Base: ₹12000)
  { id: 171, name: "Etios", price: "₹12,000", route: "Bangalore ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-orange-50" },
  { id: 172, name: "Swift Dzire", price: "₹12,000", route: "Bangalore ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-orange-50" },
  { id: 173, name: "Ertiga", price: "₹16,000", route: "Bangalore ⇄ Hyderabad", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-orange-50" },
  { id: 174, name: "Innova", price: "₹19,500", route: "Bangalore ⇄ Hyderabad", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-orange-50" },
  { id: 175, name: "Innova Crysta Luxury", price: "₹21,500", route: "Bangalore ⇄ Hyderabad", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-orange-50" },

  // Hyderabad ⇄ Srisailam (Etios Base: ₹7000)
  { id: 181, name: "Etios", price: "₹7,000", route: "Hyderabad ⇄ Srisailam", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-green-50" },
  { id: 182, name: "Swift Dzire", price: "₹7,000", route: "Hyderabad ⇄ Srisailam", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-green-50" },
  { id: 183, name: "Ertiga", price: "₹9,500", route: "Hyderabad ⇄ Srisailam", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-green-50" },
  { id: 184, name: "Innova", price: "₹12,000", route: "Hyderabad ⇄ Srisailam", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-green-50" },
  { id: 185, name: "Innova Crysta Luxury", price: "₹14,000", route: "Hyderabad ⇄ Srisailam", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-green-50" },

  // Hyderabad ⇄ Vizag (Etios Base: ₹15000)
  { id: 191, name: "Etios", price: "₹15,000", route: "Hyderabad ⇄ Vizag", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-cyan-50" },
  { id: 192, name: "Swift Dzire", price: "₹15,000", route: "Hyderabad ⇄ Vizag", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-cyan-50" },
  { id: 193, name: "Ertiga", price: "₹20,000", route: "Hyderabad ⇄ Vizag", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-cyan-50" },
  { id: 194, name: "Innova", price: "₹24,000", route: "Hyderabad ⇄ Vizag", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-cyan-50" },
  { id: 195, name: "Innova Crysta Luxury", price: "₹26,000", route: "Hyderabad ⇄ Vizag", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-cyan-50" },

  // Hyderabad ⇄ Bhimavaram (Etios Base: ₹8000)
  { id: 201, name: "Etios", price: "₹8,000", route: "Hyderabad ⇄ Bhimavaram", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-indigo-50" },
  { id: 202, name: "Swift Dzire", price: "₹8,000", route: "Hyderabad ⇄ Bhimavaram", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-indigo-50" },
  { id: 203, name: "Ertiga", price: "₹11,000", route: "Hyderabad ⇄ Bhimavaram", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-indigo-50" },
  { id: 204, name: "Innova", price: "₹13,500", route: "Hyderabad ⇄ Bhimavaram", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-indigo-50" },
  { id: 205, name: "Innova Crysta Luxury", price: "₹15,500", route: "Hyderabad ⇄ Bhimavaram", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-indigo-50" },
  
  // Eluru ⇄ Hyderabad (Etios Base: ₹6500)
  { id: 211, name: "Etios", price: "₹6,500", route: "Eluru ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-purple-50" },
  { id: 212, name: "Swift Dzire", price: "₹6,500", route: "Eluru ⇄ Hyderabad", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-purple-50" },
  { id: 213, name: "Ertiga", price: "₹9,500", route: "Eluru ⇄ Hyderabad", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-purple-50" },
  { id: 214, name: "Innova", price: "₹12,000", route: "Eluru ⇄ Hyderabad", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-purple-50" },
  { id: 215, name: "Innova Crysta Luxury", price: "₹14,000", route: "Eluru ⇄ Hyderabad", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-purple-50" },

  // Hyderabad ⇄ Gudivada (Etios Base: ₹6500)
  { id: 221, name: "Etios", price: "₹6,500", route: "Hyderabad ⇄ Gudivada", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/ETLOS.png", type: "Budget", bgColor: "bg-pink-50" },
  { id: 222, name: "Swift Dzire", price: "₹6,500", route: "Hyderabad ⇄ Gudivada", perKm: "₹12/Km", capacity: "4 Seats", image: "/cars/DSIRE.png", type: "Executive", bgColor: "bg-pink-50" },
  { id: 223, name: "Ertiga", price: "₹9,500", route: "Hyderabad ⇄ Gudivada", perKm: "₹15/Km", capacity: "6 Seats", image: "/EART.png", type: "Family", bgColor: "bg-pink-50" },
  { id: 224, name: "Innova", price: "₹12,000", route: "Hyderabad ⇄ Gudivada", perKm: "₹19/Km", capacity: "7 Seats", image: "/INNO.png", type: "VIP", bgColor: "bg-pink-50" },
  { id: 225, name: "Innova Crysta Luxury", price: "₹14,000", route: "Hyderabad ⇄ Gudivada", perKm: "₹21/Km", capacity: "7 Seats", image: "/CRISTA.png", type: "Ultra VIP", bgColor: "bg-pink-50" },

  // Heavy Vehicles & Buses
  { id: 302, name: "Luxury AC Bus", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "40 Seats", image: "/BUSBANNER.png", gallery: ["/image copy 2.png", "/bus/bus1.png", "/bus/bus2.png", "/bus/bus3.png", "/bus/bus4.png"], type: "Heavy Vehicle", bgColor: "bg-gray-100" },
  { id: 303, name: "Tempo Traveller", price: "On Request", route: "Buses & Group Travel", perKm: "On Request", capacity: "12 to 16 Seats", image: "/cars/urbania.png", gallery: ["/tempo/t1.jpg", "/tempo/t2.jpg", "/tempo/t3.jpg", "/tempo/t4.jpg", "/tempo/t5.jpg", "/cars/bus_interior_1.png", "/cars/bus_interior_2.png", "/tempo/t6.jpg", "/tempo/t7.jpg", "/tempo/t8.jpg", "/tempo/t9.png", "/tempo/t10.png", "/cars/urbania_interior_5.png", "/image copy 3.png", "/image copy 4.png", "/image copy 5.png", "/tempo/tempo1.png", "/tempo/tempo2.png", "/tempo/tempo3.png", "/tempo/tempo4.png"], type: "Group", bgColor: "bg-gray-100" },

  // Elite Luxury Collection
  { id: 401, name: "Mercedes-Benz S-Class", price: "On Request", route: "Elite Luxury Collection", perKm: "On Request", capacity: "4 Seats", image: "/cars/BENZ.png", type: "Elite Luxury", bgColor: "bg-slate-50" },
  { id: 402, name: "BMW 7 Series", price: "On Request", route: "Elite Luxury Collection", perKm: "On Request", capacity: "4 Seats", image: "/cars/BMW.png", type: "Elite Luxury", bgColor: "bg-slate-50" },
  { id: 403, name: "Audi A8 L", price: "On Request", route: "Elite Luxury Collection", perKm: "On Request", capacity: "4 Seats", image: "/cars/AUDI.png", type: "Elite Luxury", bgColor: "bg-slate-50" },
  { id: 404, name: "Ferrari 488", price: "On Request", route: "Elite Luxury Collection", perKm: "On Request", capacity: "2 Seats", image: "/cars/FERRARI.png", type: "Supercar Luxury", bgColor: "bg-slate-50" },
  { id: 405, name: "Vintage Rolls Royce", price: "On Request", route: "Elite Luxury Collection", perKm: "On Request", capacity: "2 Seats", image: "/luxarycars/lux7.png", type: "Wedding Special", bgColor: "bg-slate-50" },
];

const routes = [
  { label: "Vijayawada ⇄ Hyderabad", value: "Vijayawada ⇄ Hyderabad" },
  { label: "Vijayawada ⇄ Hyderabad Airport", value: "Vijayawada ⇄ Hyderabad Airport" },
  { label: "Guntur ⇄ Hyderabad", value: "Guntur ⇄ Hyderabad" },
  { label: "Hyderabad ⇄ Guntur", value: "Hyderabad ⇄ Guntur" },
  { label: "Hyderabad ⇄ Tenali", value: "Hyderabad ⇄ Tenali" },
  { label: "Hyderabad ⇄ Tirupati", value: "Hyderabad ⇄ Tirupati" },
  { label: "Hyderabad ⇄ Bangalore", value: "Hyderabad ⇄ Bangalore" },
  { label: "Bangalore ⇄ Hyderabad", value: "Bangalore ⇄ Hyderabad" },
  { label: "Hyderabad ⇄ Srisailam", value: "Hyderabad ⇄ Srisailam" },
  { label: "Hyderabad ⇄ Vizag", value: "Hyderabad ⇄ Vizag" },
  { label: "Hyderabad ⇄ Bhimavaram", value: "Hyderabad ⇄ Bhimavaram" },
  { label: "Eluru ⇄ Hyderabad", value: "Eluru ⇄ Hyderabad" },
  { label: "Hyderabad ⇄ Gudivada", value: "Hyderabad ⇄ Gudivada" },
  { label: "Elite Luxury Collection", value: "Elite Luxury Collection" },
  { label: "Group Travel & Buses", value: "Buses & Group Travel" }
];

export default function Fleet({ limit = 100 }: { limit?: number }) {
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [showInteriorModal, setShowInteriorModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [selectedRoute, setSelectedRoute] = useState<string>("Vijayawada ⇄ Hyderabad");

  const filteredFleet = selectedRoute === "Buses & Group Travel"
    ? fleetData.filter(car => car.route === "Buses & Group Travel")
    : [
        ...fleetData.filter(car => car.route === selectedRoute),
        ...fleetData.filter(car => car.route === "Buses & Group Travel")
      ];

  const activeItem = viewIndex !== null ? filteredFleet[viewIndex] : null;

  const handleNext = () => {
    setViewIndex((viewIndex! + 1) % filteredFleet.length);
    setGalleryIndex(0);
  };
  const handlePrev = () => {
    setViewIndex((viewIndex! - 1 + filteredFleet.length) % filteredFleet.length);
    setGalleryIndex(0);
  };

  return (
    <section id="fleet" className="py-4 sm:py-12 bg-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-12 space-y-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-orange-500 font-black tracking-widest uppercase text-sm px-4 py-2 bg-orange-50 rounded-full">Explore Our Elite Catalog</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter"
          >
            A Vehicle for <br /> Every Ambition
          </motion.h2>
          
          <div className="bg-slate-50 p-2 sm:p-4 rounded-[3rem] shadow-2xl border border-slate-100 mx-auto max-w-3xl mt-12 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <div className="bg-blue-950 text-white px-10 py-5 rounded-[2.5rem] flex items-center justify-center gap-3 font-black whitespace-nowrap text-sm shadow-xl shrink-0">
                <MapPin size={20} className="text-orange-500" /> SEARCH ROUTES
              </div>
              <div className="relative flex-grow">
                <select 
                  value={selectedRoute}
                    onChange={(e) => {
                      setSelectedRoute(e.target.value);
                      setViewIndex(null); 
                      setGalleryIndex(0);
                    }}
                  className="w-full bg-transparent px-10 py-5 text-blue-950 font-black text-xl outline-none cursor-pointer appearance-none text-center sm:text-left tracking-tight"
                >
                  {routes.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((car, idx) => (
              <motion.div 
                layout
                key={car.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl hover:shadow-orange-500/10 transition-all duration-700 flex flex-col group border border-slate-50 h-full p-2"
              >
                <div className={`relative h-72 sm:h-80 md:h-96 ${car.bgColor} rounded-[3.5rem] p-4 flex items-center justify-center overflow-hidden`}>
                   {car.image && (
                     <Image src={car.image} alt={car.name} fill className="object-contain p-2 lg:p-6 transform group-hover:scale-125 group-hover:translate-x-4 transition-all duration-1000 ease-out" />
                   )}
                   <div className="absolute top-8 left-8 bg-blue-950 text-white text-[12px] font-black px-5 py-2 rounded-2xl uppercase tracking-widest shadow-xl z-20">{car.type}</div>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950 mb-4 leading-tight tracking-tighter">{car.name}</h4>
                  <div className="flex flex-col mb-8">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price Start</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-5xl font-black text-blue-950 tracking-tighter leading-none">{car.price}</span>
                      <span className="text-sm font-bold text-orange-500">({car.perKm})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm font-bold text-slate-400 border-b border-slate-100 pb-8">
                    <span className="flex items-center gap-2"><Users size={18} className="text-blue-500" /> {car.capacity}</span>
                    <span className="flex items-center gap-2 font-black text-blue-950 tracking-widest">
                       <ShieldCheck size={18} className="text-orange-500" /> 100% SECURE
                    </span>
                  </div>

                  {/* Inclusion Details */}
                  <div className="mt-6 pt-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Fare is all including</p>
                    <div className="grid grid-cols-2 gap-y-3">
                      {[
                        "Taxi with driver", "Toll Gate Charges",
                        "Driver Batta", "Border Tax (if any)",
                        "Parking", "24X7 Service"
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[10px] font-extrabold text-blue-950">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    {(car.id === 5 || car.id === 301 || car.id === 12 || car.id === 302 || car.id === 303) && (
                      <button 
                        onClick={() => {
                          setViewIndex(idx);
                          setGalleryIndex(0);
                          setShowInteriorModal(true);
                        }}
                        className="flex-grow bg-orange-100 text-orange-600 font-black text-xs py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        <Sparkles size={16} /> VIEW CABIN INTERIOR
                      </button>
                    )}
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setViewIndex(idx);
                        setGalleryIndex(0);
                        setShowInteriorModal(false);
                      }}
                      className="bg-blue-950 p-5 rounded-2xl text-white hover:bg-orange-500 transition-all flex items-center justify-center gap-3 font-black text-xs tracking-widest px-8"
                    >
                      DETAILS <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Fleet Promise */}
        <div className="mt-16 bg-blue-950 rounded-[4rem] p-12 sm:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                    Every Ride is a <br /> <span className="text-orange-500 italic">Fast car Travels</span> Promise.
                 </h3>
                 <p className="text-blue-100/60 text-xl font-medium leading-relaxed">
                    We don't just provide cars; we provide peace of mind. All our vehicles are less than 2 years old, undergo 50+ safety checks daily, and are driven by certified professional chauffeurs.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {["GPS Live Hub", "Daily Sanitization", "Verified Drivers", "24/7 Control Room"].map((tag) => (
                      <div key={tag} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest">
                         <CheckCircle size={14} className="text-green-400" /> {tag}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 backdrop-blur-3xl transform group-hover:-rotate-3 transition-transform duration-700">
                    <div className="text-center space-y-4">
                       <span className="text-orange-500 text-7xl font-black block">100%</span>
                       <p className="text-white text-2xl font-black tracking-tight">CUSTOMER TRUST RATING</p>
                       <p className="text-blue-200/50 text-sm">Based on 5,000+ Verified Intercity Rides</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {viewIndex !== null && activeItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-y-auto bg-blue-950/95 backdrop-blur-3xl p-4 sm:p-12 flex items-start sm:items-center justify-center pt-32 pb-12"
          >
            <button 
              onClick={() => setViewIndex(null)} 
              className="fixed top-24 right-4 sm:top-12 sm:right-12 z-[1000] bg-orange-500 text-white p-3 sm:p-5 rounded-full shadow-3xl hover:bg-white hover:text-orange-500 transition-all active:scale-90 border-4 border-white/20"
            >
              <X size={24} strokeWidth={4} className="sm:w-9 sm:h-9" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] w-[95%] sm:w-[92%] md:w-[85%] max-w-4xl shadow-2xl relative flex flex-col lg:flex-row border-[2px] sm:border-[6px] border-white/20"
            >
              
              <div className={`${showInteriorModal ? 'lg:w-full' : 'lg:w-1/2'} p-1 sm:p-6 ${activeItem.bgColor} flex flex-col items-center justify-center relative h-[450px] sm:h-[600px] lg:h-[700px] overflow-hidden transition-all duration-500`}>
                 <AnimatePresence mode="wait">
                    <motion.div 
                       key={galleryIndex}
                       initial={{ opacity: 0, scale: 1.1 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="relative w-full h-full"
                    >
                       {(showInteriorModal && activeItem.gallery ? activeItem.gallery[galleryIndex + 1] : (activeItem.gallery ? activeItem.gallery[galleryIndex] : activeItem.image)) && (
                         <Image 
                            src={showInteriorModal && activeItem.gallery ? activeItem.gallery[galleryIndex + 1] : (activeItem.gallery ? activeItem.gallery[galleryIndex] : activeItem.image)} 
                            alt={activeItem.name} 
                            fill 
                            className="object-cover shadow-2xl rounded-[1.5rem]" 
                         />
                       )}
                       
                       {showInteriorModal && (
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6 sm:p-10">
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              className="text-white space-y-1 sm:space-y-2 mb-4 sm:mb-0"
                            >
                               <span className="text-orange-500 font-black text-[8px] sm:text-xs uppercase tracking-[0.3em]">Premium Feature</span>
                               <h3 className="text-base sm:text-3xl font-black tracking-tighter">
                                  {galleryIndex === 0 && "Executive Cabin Layout"}
                                  {galleryIndex === 1 && "Luxury Seating & Space"}
                                  {galleryIndex === 2 && "Premium Entertainment"}
                                  {galleryIndex === 3 && "Climate Control Systems"}
                                  {galleryIndex === 4 && "VIP Leather Interior"}
                                  {galleryIndex === 5 && "Smart Storage Solutions"}
                               </h3>
                               <p className="text-blue-100/70 font-medium text-[8px] sm:text-base leading-tight max-w-[90%] sm:max-w-none">
                                  {galleryIndex === 0 && "Ergonomic layout with premium fabric seats and individual armrests. Perfect for long-distance group travel with maximum comfort."}
                                  {galleryIndex === 1 && "Spacious cabin design with ample legroom and high-quality upholstery. Designed to provide a first-class experience for every passenger."}
                                  {galleryIndex === 2 && "State-of-the-art entertainment system with LED ceiling lighting and wide-screen TV. Enjoy movies and music on the go."}
                                  {galleryIndex === 3 && "Full climate control with roof-mounted AC vents and mood lighting for night travel. Maintains perfect temperature in all seasons."}
                                  {galleryIndex === 4 && "Executive cabin experience with extra legroom and reclining leather seats. The pinnacle of luxury for our VIP group travelers."}
                                  {galleryIndex === 5 && "Safe and secure luggage space with easy accessibility. Ample storage for all your travel essentials and more."}
                               </p>
                            </motion.div>
                         </div>
                       )}
                    </motion.div>
                 </AnimatePresence>

                 {/* Navigation controls for the internal slider */}
                 {(activeItem.gallery && activeItem.gallery.length > 1) && (
                    <>
                       <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 flex gap-2 z-10">
                          {(showInteriorModal ? activeItem.gallery.slice(1) : activeItem.gallery).map((_, i) => (
                             <button 
                                key={i} 
                                onClick={() => setGalleryIndex(i)}
                                className={`h-1.5 rounded-full transition-all ${galleryIndex === i ? 'bg-orange-500 w-8 sm:w-12' : 'bg-white/30 w-3 sm:w-4 hover:bg-white/50'}`}
                             />
                          ))}
                       </div>
                       <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 flex gap-2 sm:gap-3 z-[300]">
                          <button 
                             onClick={() => setGalleryIndex(prev => (prev - 1 + (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length)) % (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length))}
                             className="bg-blue-600 hover:bg-blue-700 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-white transition-all shadow-lg border border-blue-500/50"
                          >
                             <ArrowRight size={16} className="rotate-180 sm:w-5 sm:h-5" />
                          </button>
                          <button 
                             onClick={() => setGalleryIndex(prev => (prev + 1) % (showInteriorModal ? activeItem.gallery!.length - 1 : activeItem.gallery!.length))}
                             className="bg-blue-600 hover:bg-blue-700 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-white transition-all shadow-lg border border-blue-500/50"
                          >
                             <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                          </button>
                       </div>
                    </>
                 )}
              </div>

              {!showInteriorModal && (
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                   <div>
                      <div className="flex gap-2 mb-4 sm:mb-6">
                         {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#f97316" color="#f97316" />)}
                         <span className="ml-2 text-orange-500 font-extrabold text-[10px] uppercase tracking-widest">(5.0 Rating)</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-blue-950 mb-3 sm:mb-4 tracking-tighter leading-[0.8] uppercase">{activeItem.name}</h2>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed border-l-4 border-orange-500 pl-4 sm:pl-6 mb-6 sm:mb-8 italic">
                         "Experience unparalleled group travel with our flagship {activeItem.name}."
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-10">
                         <div className="bg-slate-50 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex items-center gap-4 sm:gap-6">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-blue-600"><Users size={20} /></div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 sm:mb-1">Max Capacity</p>
                               <p className="text-xl sm:text-2xl font-black text-blue-950 leading-none">{activeItem.capacity}</p>
                            </div>
                         </div>
                         <div className="bg-slate-50 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex items-center gap-4 sm:gap-6">
                            <div className="bg-orange-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-orange-600"><ShieldCheck size={20} /></div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 sm:mb-1">Security Standard</p>
                               <p className="text-xl sm:text-2xl font-black text-blue-950 leading-none">100% VERIFIED</p>
                            </div>
                         </div>
                      </div>

                      <div className="mb-10">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Fare Inclusions</p>
                          <div className="grid grid-cols-2 gap-4">
                             {[
                               "Taxi with driver", "Toll Gate Charges",
                               "Driver Batta", "Border Tax (if any)",
                               "Parking", "24X7 Service"
                             ].map((item) => (
                               <div key={item} className="flex items-center gap-3 text-[11px] sm:text-sm font-black text-blue-950">
                                  <CheckCircle size={16} className="text-green-500 shrink-0" /> {item}
                               </div>
                             ))}
                          </div>
                       </div>
                   </div>

                   <div className="flex flex-col gap-3 sm:gap-4">
                      <motion.a 
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         href="tel:+919948924786" 
                         className="bg-blue-950 text-white font-black text-base sm:text-lg py-5 sm:py-6 rounded-[1.2rem] sm:rounded-[1.5rem] hover:bg-orange-500 transition-all text-center flex items-center justify-center gap-3 sm:gap-4 shadow-2xl"
                      >
                         <Phone size={22} /> BOOK THIS VEHICLE
                      </motion.a>
                      
                      <div className="flex gap-3 sm:gap-4">
                         <button 
                            onClick={handlePrev} 
                            className="flex-1 bg-slate-100 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 font-bold text-slate-600 text-sm"
                         >
                            <ArrowRight size={16} className="rotate-180" /> PREV
                         </button>
                         <button 
                            onClick={handleNext} 
                            className="flex-1 bg-slate-100 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 font-bold text-slate-600 text-sm"
                         >
                            NEXT <ArrowRight size={16} />
                         </button>
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
