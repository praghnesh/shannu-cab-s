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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      alert("దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి / Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    // Mark as filled so modal never opens again
    try {
      localStorage.setItem("quote_form_filled", "true");
      sessionStorage.setItem("quote_form_filled", "true");
      window.dispatchEvent(new Event("quote_form_filled"));
    } catch {}

    const tripLabel = tripType === "one-way" ? "One Way" : tripType === "round-trip" ? "Round Trip" : "Hourly Rental";
    const lines = [
      `🚖 *NEW INSTANT BOOKING REQUEST*`,
      ``,
      `📞 *Customer Phone:* ${phone}`,
      `🗺️ *Trip Type:* ${tripLabel}`,
      `📍 *From:* ${from || "—"}`,
      tripType !== "hourly" ? `📍 *To:* ${to || "—"}` : `⏱️ *Duration:* ${duration || "—"}`,
      `📅 *Date:* ${date || "—"}`,
      `⏰ *Time:* ${time || "—"}`,
      `🚗 *Car Type:* ${carType || "—"}`,
      ``,
      `🌐 *Sent from Amaravathi Fast Car Travels Website*`,
      `🕒 *Time:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`
    ].filter(Boolean).join("\n");

    const emailPayload = {
      name: phone,
      phone: phone,
      from,
      to,
      date,
      time,
      carType,
      tripType: tripLabel,
      duration,
      pageUrl: typeof window !== "undefined" ? window.location.href : "Hero Booking Form",
    };

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    setRedirectUrl(waUrl);

    // 1. Direct Multi-Channel Email Dispatch (Direct to fastcartravels4@gmail.com)
    try {
      const emailPromises = [
        // Channel A: FormSubmit directly to business email
        fetch("https://formsubmit.co/ajax/fastcartravels4@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            _subject: `🚨 NEW BOOKING: ${phone} - ${from || "Trip"} ➔ ${to || duration || "Destination"} (${tripLabel})`,
            Phone_Number: phone,
            Customer_Phone: phone,
            Trip_Type: tripLabel,
            From_Location: from || "N/A",
            To_Location: to || duration || "N/A",
            Travel_Date: date || "N/A",
            Travel_Time: time || "N/A",
            Car_Type: carType || "N/A",
            Full_Details: lines,
          }),
          keepalive: true,
        }).catch((err) => console.warn("FormSubmit send error:", err)),

        // Channel B: Web3Forms client-side
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
            subject: `🚨 NEW BOOKING: ${phone} - ${tripLabel}`,
            from_name: "Amaravathi Fast Car Travels",
            name: phone,
            phone: phone,
            Customer_Name: phone,
            Phone_Number: phone,
            Trip_Type: tripLabel,
            From_Location: from || "N/A",
            To_Location: to || duration || "N/A",
            Travel_Date: date || "N/A",
            Travel_Time: time || "N/A",
            Car_Type: carType || "N/A",
            message: lines,
          }),
          keepalive: true,
        }).catch((err) => console.warn("Web3Forms client send error:", err)),

        // Channel C: Internal server route backup
        fetch("/api/login-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailPayload),
          keepalive: true,
        }).catch((err) => console.warn("Server email backup error:", err)),
      ];

      // Wait up to 800ms for HTTP transmission so requests leave browser
      await Promise.race([
        Promise.allSettled(emailPromises),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
    } catch (err) {
      console.error("Booking dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      // Direct page navigation to WhatsApp as requested
      setTimeout(() => {
        window.location.href = waUrl;
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-yellow-400 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-4 border-yellow-300 overflow-visible relative text-left">
      {/* Header */}
      <div className="px-6 pt-5 pb-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">Get Instant Quote</h2>
        <p className="text-[12px] sm:text-sm font-semibold text-black/75 mt-0.5">
          Book in 60 Seconds · Direct Mail & WhatsApp
        </p>

        {/* Quick Phone Call & WhatsApp Direct Line - Prominent Size */}
        <div className="mt-3 pt-3 border-t-2 border-black/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
          <a 
            href="tel:+919393591444" 
            className="flex-1 bg-black hover:bg-neutral-800 text-yellow-400 py-2.5 px-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
          >
            <span className="text-xl">📞</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold text-neutral-300 uppercase tracking-wider leading-none">Direct Call</span>
              <span className="text-lg sm:text-xl font-black text-yellow-400 tracking-wide leading-tight group-hover:underline">93935 91444</span>
            </div>
          </a>
          <a 
            href="https://wa.me/919393591444?text=Hi%20Amaravathi%20Fast%20Car%20Travels,%20I%20want%20to%20book%20a%20cab."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
          >
            <span className="text-xl">💬</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold text-emerald-100 uppercase tracking-wider leading-none">WhatsApp</span>
              <span className="text-lg sm:text-xl font-black text-white tracking-wide leading-tight group-hover:underline">93935 91444</span>
            </div>
          </a>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleBook} className="px-5 sm:px-6 pb-6 space-y-3">
        {/* Customer Mobile Number */}
        <div>
          <label className="text-[10px] font-black text-black/60 uppercase tracking-widest block mb-1">
            Customer Mobile Number
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
          disabled={isSubmitting}
          className="w-full mt-2 bg-black text-yellow-400 font-black text-sm py-4 rounded-xl tracking-widest uppercase shadow-xl hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
              Sending to Email & Opening WhatsApp...
            </span>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONFIRM & NAVIGATE TO WHATSAPP
            </>
          )}
        </motion.button>

        {submitted && (
          <div className="mt-3 p-3 bg-white/90 rounded-xl text-center space-y-2 border border-black/10 shadow-sm">
            <p className="text-xs font-black text-emerald-800">
              ✓ Sent directly to fastcartravels4@gmail.com!
            </p>
            <p className="text-[11px] font-bold text-black/70">
              Navigating to WhatsApp... If it didn&apos;t open automatically:
            </p>
            <a
              href={redirectUrl}
              className="inline-block w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-lg uppercase tracking-wider transition-colors"
            >
              Open WhatsApp Chat (93935 91444)
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
