import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Music, Star, ArrowRight, Clock, MapPin, Phone, Sparkles, Instagram, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import LottieLib, { useLottie } from "lottie-react";

// ✅ Safe Lottie import for Vite
const Lottie = (LottieLib as any).default ?? LottieLib;

// 🐆 HD Assets
import heroSlide1 from "@/assets/hero 1.webp";
import heroSlide2 from "@/assets/hero 2.webp";
import heroSlide3 from "@/assets/hero 3.webp";
import tikkaImg from "@/assets/peri peri.jpg";
import nachosImg from "@/assets/nachos.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import drinkImg from "@/assets/sangriya.jpg";
import gallery1 from "@/assets/hero 1.webp";
import gallery2 from "@/assets/hero 3.webp";
import earthAnimation from "@/assets/earth.json";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const INSTAGRAM_URL = "https://www.instagram.com/bagheeracafelounge/?hl=en";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110033";

const MAPS_SEARCH_URL = "https://www.google.com/maps/place/Bagheera+Cafe+%26+Lounge/@28.6946494,77.2042514,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfdf094b1ae2f:0xb37be3005f8e6407!8m2!3d28.6946494!4d77.2042514!16s%2Fg%2F11tnkym4w9?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8327455165877!2d77.20425139999999!3d28.6946494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf094b1ae2f%3A0xb37be3005f8e6407!2sBagheera%20Cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1773419478007!5m2!1sen!2sin";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  // 🚀 THE "ULTIMATE" SCROLL-TO-TOP FIX
  useEffect(() => {
    // 1. Tell the browser NOT to restore previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Immediate scroll to top
    window.scrollTo(0, 0);

    // 3. Just in case of slow asset loading, a tiny timeout to ensure we are at top
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // 🌍 Lottie Setup - Pure Default Settings
  const lottieOptions = {
    animationData: earthAnimation,
    loop: true,
  };

  const { View: EarthAnimation1 } = useLottie(lottieOptions);
  const { View: EarthAnimation2 } = useLottie(lottieOptions);
  const { View: EarthAnimation3 } = useLottie(lottieOptions);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentSlide((prev) => (diff > 0 ? (prev + 1) % heroSlides.length : (prev - 1 + heroSlides.length) % heroSlides.length));
    }
  };

  return (
    <div className="bg-[#0A0F0D] text-[#FDF5E6] min-h-screen selection:bg-[#F3D06B] selection:text-black">
      
      {/* ── CSS FOR THE REVOLVING PATH ── */}
      <style>{`
        @keyframes revolveAround {
          0% { top: -25px; left: -25px; }
          25% { top: -25px; left: calc(100% - 25px); }
          50% { top: calc(100% - 25px); left: calc(100% - 25px); }
          75% { top: calc(100% - 25px); left: -25px; }
          100% { top: -25px; left: -25px; }
        }

        .revolving-lottie {
          position: absolute;
          z-index: 30;
          pointer-events: none;
          width: 50px;
          height: 50px;
          animation: revolveAround 16s linear infinite;
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="absolute inset-0 z-10 bg-[#0A0F0D]/60" />
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0">
            <img src={heroSlides[currentSlide]} alt="Bagheera" className="w-full h-full object-cover brightness-[0.7] contrast-[1.2]" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 container h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-[#FDF5E6] mb-6 uppercase tracking-tighter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Bagheera</motion.h1>
            <motion.p className="text-lg md:text-xl text-[#FDF5E6]/80 mb-8 font-display italic" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>Step Into The Wild Side of Luxury</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Link to="/menu" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] px-8 py-4 font-bold text-black hover:bg-[#FDF5E6] transition-all shadow-[0_0_20px_rgba(243,208,107,0.3)]">Explore Menu <ArrowRight size={18} /></Link>
              <a href={`tel:+91${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FDF5E6]/30 px-8 py-4 font-bold text-[#FDF5E6] hover:bg-[#FDF5E6]/10 transition-all shadow-xl"><Phone size={18} /> Call Now</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative -mt-12 z-30 container pb-8">
        <ScrollReveal>
          <div className="bg-[#0D1C15] rounded-2xl shadow-2xl border border-[#FDF5E6]/10 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-md">
            {[
              { value: "10k+", label: "Guests Served" },
              { value: "40+", label: "Signature Drinks" },
              { value: "4.5★", label: "Google Rating" },
              { value: "1 AM", label: "Open Late" },
            ].map((stat) => (
              <div key={stat.label} className="text-center border-r last:border-0 border-[#FDF5E6]/10">
                <p className="text-2xl md:text-3xl font-display font-bold text-[#F3D06B]">{stat.value}</p>
                <p className="text-[11px] uppercase font-bold text-[#FDF5E6]/60 mt-1 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── EXPERIENCE SECTION ── */}
      <section className="py-20 bg-[#0A0F0D]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#F3D06B] text-xs font-black tracking-widest uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-[#FDF5E6]">Why Bagheera?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sparkles, title: "Jungle Theme", desc: "North Delhi's only forest-inspired lounge with a mysterious aesthetic." },
              { icon: Music, title: "Live Vibes", desc: "From late-night DJ sets to acoustic evenings, the music never stops." },
              { icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Authentic North Indian, Chinese, and Italian delicacies." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="relative p-10 rounded-3xl bg-[#0D1C15] border border-[#FDF5E6]/10 text-center group hover:shadow-[0_8px_30px_rgba(243,208,107,0.1)] transition-all duration-300">
                  
                  {/* 🌍 NATURAL EARTH COLORS REVOLVING */}
                  <div className="revolving-lottie" style={{ animationDelay: `${i * -5.3}s` }}>
                    {i === 0 ? EarthAnimation1 : i === 1 ? EarthAnimation2 : EarthAnimation3}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#F3D06B]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#F3D06B]/20 transition-colors">
                    <f.icon size={24} className="text-[#F3D06B]" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-[#FDF5E6] uppercase tracking-wide">{f.title}</h3>
                  <p className="text-[#FDF5E6]/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="py-20 bg-[#0D1C15]/50">
        <div className="container">
          <ScrollReveal><h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center uppercase text-[#FDF5E6]">Chef's Picks</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Peri Peri Tikka", price: "₹380", tag: "Signature", img: tikkaImg },
              { name: "Chicken Nachos", price: "₹320", tag: "Lounge Fav", img: nachosImg },
              { name: "Yakhni Biryani", price: "₹450", tag: "Must Try", img: biryaniImg },
              { name: "Bagheera Sangriya", price: "₹240", tag: "Classic", img: drinkImg },
            ].map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-[#0D1C15] border border-[#FDF5E6]/10 group hover:shadow-[0_8px_30px_rgba(243,208,107,0.15)] transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-[#F3D06B] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{s.tag}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-lg text-[#FDF5E6]">{s.name}</h3>
                      <span className="text-sm font-black text-[#F3D06B]">{s.price}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24 overflow-hidden bg-[#0A0F0D]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={gallery1} alt="Bagheera Ambiance" className="rounded-2xl w-full h-96 object-cover shadow-2xl border border-[#FDF5E6]/10" />
              <img src={gallery2} alt="Lounge vibes" className="absolute -bottom-8 -right-8 w-48 h-48 object-cover rounded-2xl border-4 border-[#0A0F0D] shadow-2xl" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="md:pl-8 mt-12 md:mt-0">
              <span className="text-[#F3D06B] text-xs font-black uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 uppercase text-[#FDF5E6]">Step Into The Wild</h2>
              <p className="text-[#FDF5E6]/70 text-sm leading-relaxed mb-8 text-justify italic">Born from a love for adventure, Bagheera brings the mystery of the jungle to Hudson Lane. We provide an escape from the city heat with signature flavors, exotic cocktails, and an electric lounge experience designed for the untamed.</p>
              <Link to="/menu" className="group inline-flex items-center gap-3 text-[#F3D06B] font-bold text-sm hover:text-[#FDF5E6] transition-colors uppercase tracking-widest">
                Explore The Full Menu 
                <span className="w-8 h-8 rounded-full bg-[#F3D06B]/10 group-hover:bg-[#FDF5E6]/10 flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section className="py-24 container bg-[#0A0F0D]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-10">
              <div>
                <span className="text-[#F3D06B] text-xs font-black tracking-widest uppercase">Find Us</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-[#FDF5E6] mt-2">Visit The Jungle</h2>
              </div>
              <div className="space-y-4">
                <a href={MAPS_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[1.5rem] bg-[#0D1C15] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#F3D06B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F3D06B] group-hover:text-black transition-colors"><MapPin size={24} className="text-[#F3D06B] group-hover:text-black" /></div>
                  <div className="flex-1">
                    <h4 className="font-black text-[10px] uppercase text-[#F3D06B] mb-1">Our Location</h4>
                    <p className="text-[#FDF5E6] text-sm font-bold leading-relaxed">{ADDRESS}</p>
                  </div>
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a href={`tel:+91${PHONE}`} className="group flex items-center gap-4 p-6 rounded-[1.5rem] bg-[#F3D06B] text-black hover:bg-[#FDF5E6] shadow-lg">
                    <Phone size={20} />
                    <div><h4 className="font-bold text-[9px] uppercase opacity-60 mb-1">Call Now</h4><p className="font-bold text-sm">{PHONE_DISPLAY}</p></div>
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-[1.5rem] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg">
                    <Instagram size={24} />
                    <div><h4 className="font-bold text-[9px] uppercase opacity-80 mb-1">Follow Us</h4><p className="font-bold text-sm">@bagheera</p></div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="rounded-[2.5rem] overflow-hidden border-4 border-[#0D1C15] h-[500px] bg-[#0D1C15]">
              <iframe src={MAPS_EMBED} width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bagheera Maps" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-[#0D1C15] relative overflow-hidden text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FDF5E6] mb-6 uppercase tracking-tight">Hungry for the Wild?</h2>
          <p className="text-[#FDF5E6]/60 mb-10 text-base max-w-lg mx-auto leading-relaxed">Visit us in Hudson Lane or book your table now for an unforgettable experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:+91${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] text-black px-10 py-5 font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(243,208,107,0.2)]">Call for Reservations</a>
            <Link to="/menu" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FDF5E6]/20 text-[#FDF5E6] px-10 py-5 font-bold hover:bg-[#FDF5E6]/5 transition-colors">Explore The Menu</Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;