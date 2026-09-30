"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

type TripType = "one-way" | "round-trip" | "hourly";

const CAR_TYPES = [
  "Sedan (Swift Dzire / Etios)",
  "SUV (Innova / Ertiga)",
  "SUV+ (Innova Crysta)",
  "Tempo Traveller (12 Seater)",
];

const HOURLY_DURATIONS = ["2 Hours", "4 Hours", "6 Hours", "8 Hours", "10 Hours", "12 Hours"];

// Pincode → City name mapping (AP & Telangana + major cities)
const PINCODE_CITY_MAP: Record<string, string> = {
  "500001": "Hyderabad", "500002": "Hyderabad", "500003": "Hyderabad",
  "500004": "Hyderabad", "500032": "Hyderabad", "500072": "Hyderabad",
  "520001": "Vijayawada", "520002": "Vijayawada", "520010": "Vijayawada",
  "521001": "Machilipatnam", "522001": "Guntur", "522002": "Guntur",
  "530001": "Visakhapatnam", "530002": "Visakhapatnam", "530003": "Visakhapatnam",
  "533001": "Rajahmundry", "534001": "Eluru", "515001": "Anantapur",
  "516001": "Kurnool", "516002": "Kurnool", "517001": "Tirupati",
  "517501": "Tirupati", "524001": "Nellore", "524002": "Nellore",
  "508001": "Nalgonda", "506001": "Warangal", "505001": "Karimnagar",
  "502001": "Medak", "503001": "Nizamabad", "504001": "Adilabad",
  "110001": "Delhi", "110002": "Delhi", "400001": "Mumbai",
  "600001": "Chennai", "600002": "Chennai", "560001": "Bangalore",
  "560002": "Bangalore", "700001": "Kolkata",
};

// City suggestions list for name-based autocomplete
const CITY_SUGGESTIONS = [
  "Hyderabad", "Vijayawada", "Visakhapatnam", "Guntur", "Tirupati",
  "Nellore", "Kurnool", "Rajahmundry", "Eluru", "Machilipatnam",
  "Warangal", "Karimnagar", "Nizamabad", "Nalgonda", "Anantapur",
  "Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata",
  "Amaravathi", "Ongole", "Kadapa", "Srikakulam", "Vizianagaram",
];

const WHATSAPP_NUMBER = "919393591444"; // Amaravathi Fast Car Travels WhatsApp

function CityInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSug, setShowSug] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (val: string) => {
    onChange(val);
    if (!val.trim()) { setSuggestions([]); setShowSug(false); return; }

    if (/^\d+$/.test(val)) {
      const match = PINCODE_CITY_MAP[val];
      if (match) {
        setSuggestions([`${match} (${val})`]);
        setShowSug(true);
      } else {
        const partial = Object.entries(PINCODE_CITY_MAP)
          .filter(([pin]) => pin.startsWith(val))
          .map(([pin, city]) => `${city} (${pin})`)
          .slice(0, 5);
        setSuggestions(partial);
        setShowSug(partial.length > 0);
      }
    } else {
      const lower = val.toLowerCase();
      const matches = CITY_SUGGESTIONS.filter((c) => c.toLowerCase().includes(lower)).slice(0, 6);
      setSuggestions(matches);
      setShowSug(matches.length > 0);
    }
  };

  const pick = (s: string) => {
    const cityOnly = s.replace(/\s*\(\d+\)$/, "");
    onChange(cityOnly);
    setSuggestions([]);
    setShowSug(false);
  };

  return (
    <div className="relative">
      <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">{label}</label>
      <input
        ref={inputRef}
        type="text"
        required
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => value && setShowSug(suggestions.length > 0)}
        onBlur={() => setTimeout(() => setShowSug(false), 150)}
        placeholder={placeholder}
        className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-3 py-2.5 text-sm font-semibold text-black placeholder-black/30 outline-none transition-all"
        autoComplete="off"
      />
      {showSug && suggestions.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-black/10 rounded-lg shadow-xl overflow-hidden">
          {suggestions.map((s) => (
            <li
              key={s}
              onMouseDown={() => pick(s)}
              className="px-3 py-2 text-sm font-semibold text-black hover:bg-yellow-100 cursor-pointer border-b border-black/5 last:border-0"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function BookingForm() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("");
  const [duration, setDuration] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      alert("దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి / Please enter a valid 10-digit mobile number");
      return;
    }

    // Mark as filled so modal never opens again
    try {
      localStorage.setItem("quote_form_filled", "true");
      sessionStorage.setItem("quote_form_filled", "true");
      window.dispatchEvent(new Event("quote_form_filled"));
    } catch {}

    const tripLabel = tripType === "one-way" ? "One Way" : tripType === "round-trip" ? "Round Trip" : "Hourly Rental";
    const lines = [
      `🚖 *New Booking Request*`,
      ``,
      `👤 *Customer:* ${customerName || "—"}`,
      `📞 *Phone:* ${phone}`,
      `🗺️ *Trip Type:* ${tripLabel}`,
      `📍 *From:* ${from || "—"}`,
      tripType !== "hourly" ? `📍 *To:* ${to || "—"}` : `⏱️ *Duration:* ${duration || "—"}`,
      `📅 *Date:* ${date || "—"}`,
      `⏰ *Time:* ${time || "—"}`,
      `🚗 *Car Type:* ${carType || "—"}`,
      ``,
      `_Sent from Amaravathi Fast Car Travels website_`,
    ].filter(Boolean).join("\n");

    // 1. Send details to email route (Web3Forms)
    fetch("/api/login-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: customerName,
        phone,
        from,
        to,
        date,
        time,
        carType,
        tripType: tripLabel,
        duration,
        pageUrl: typeof window !== "undefined" ? window.location.href : "Hero Booking Form",
      }),
    }).catch((err) => console.error("Email send error:", err));

    // 2. Open WhatsApp chat with pre-filled booking details
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };


  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-yellow-400 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-4 border-yellow-300 overflow-visible relative text-left">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">Get Instant Quote</h2>
        <p className="text-[12px] sm:text-sm font-semibold text-black/70 mt-1">
          Book in 60 Seconds · WhatsApp & Email లో వస్తుంది
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleBook} className="px-5 sm:px-6 pb-6 space-y-3">
        {/* Customer Name */}
        <div>
          <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">
            Customer Name
          </label>
          <input
            type="text"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="మీ పేరు / Your Name"
            className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-3 py-2.5 text-sm font-semibold text-black placeholder-black/30 outline-none transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="10 అంకెల మొబైల్ నంబర్ / Phone Number"
            className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-3 py-2.5 text-sm font-semibold text-black placeholder-black/30 outline-none transition-all"
          />
        </div>

        {/* Trip Type Toggle */}
        <div>
          <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1.5">
            Trip Type
          </label>
          <div className="flex gap-1.5">
            {(["one-way", "round-trip", "hourly"] as TripType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTripType(t)}
                className={`flex-1 py-2 text-[11px] font-black rounded-lg border-2 transition-all cursor-pointer ${
                  tripType === t
                    ? "bg-black text-yellow-400 border-black"
                    : "bg-white text-black border-white hover:border-black/30"
                }`}
              >
                {t === "one-way" ? "One Way" : t === "round-trip" ? "Round Trip" : "Hourly"}
              </button>
            ))}
          </div>
        </div>

        {/* From — with city/pincode suggestions */}
        <CityInput
          label="From"
          value={from}
          onChange={setFrom}
          placeholder="City name or Pincode"
        />

        {/* To — hidden for hourly */}
        {tripType !== "hourly" && (
          <CityInput
            label="To"
            value={to}
            onChange={setTo}
            placeholder="City name or Pincode"
          />
        )}

        {/* Duration — for hourly only */}
        {tripType === "hourly" && (
          <div>
            <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">Duration</label>
            <div className="grid grid-cols-3 gap-1.5">
              {HOURLY_DURATIONS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDuration(d)}
                  className={`py-2 text-[11px] font-black rounded-lg border-2 transition-all cursor-pointer ${
                    duration === d
                      ? "bg-black text-yellow-400 border-black"
                      : "bg-white text-black border-white hover:border-black/30"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Date + Time row */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">Travel Date</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-2 py-2.5 text-sm font-semibold text-black outline-none transition-all cursor-pointer"
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">Time</label>
            <input
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-2 py-2.5 text-sm font-semibold text-black outline-none transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Car Type */}
        <div>
          <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">Car Type</label>
          <select
            value={carType}
            required
            onChange={(e) => setCarType(e.target.value)}
            className="w-full bg-white border-2 border-white focus:border-black rounded-lg px-3 py-2.5 text-sm font-semibold text-black outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="">Select car type</option>
            {CAR_TYPES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full mt-2 bg-black text-yellow-400 font-black text-sm py-4 rounded-xl tracking-widest uppercase shadow-xl hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          BOOK NOW via WhatsApp
        </motion.button>

        {submitted && (
          <p className="text-center text-xs font-black text-black/80 mt-2">
            ✓ Request Sent to WhatsApp & Email!
          </p>
        )}
      </form>
    </div>
  );
}
