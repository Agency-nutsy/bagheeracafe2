import { Heart, Award, Users, Music } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LottieLib from "lottie-react";

// ✅ Safe Lottie import for Vite
const Lottie = (LottieLib as any).default ?? LottieLib;

import gallery1 from "@/assets/full.webp";
import gallery2 from "@/assets/pizza (3).webp";
import heroImage from "@/assets/vibe 2.webp";
import earthAnimation from "@/assets/earth.json"; // 🌍 Imported Earth Animation
import grassImg from "@/assets/grass.png"; // 🌿 Imported Repeating Grass Image

const values = [
  { icon: Heart, title: "Passion for Flavor", desc: "Our chefs blend authentic North Indian spices with global techniques to create a menu that is as bold as it is refined." },
  { icon: Award, title: "Premium Experience", desc: "From the Jungle-themed decor to our signature mocktails, we obsess over every detail of your night out." },
  { icon: Users, title: "The Heart of Hudson", desc: "We are proud to be the premier destination for North Campus students and families to celebrate life's moments." },
  { icon: Music, title: "Vibrant Atmosphere", desc: "Live music, curated DJ sets, and an electric energy—at Bagheera, the vibe is always alive." },
];

const AboutPage = () => (
  <div className="relative pt-28 pb-20 bg-[#0A0F0D] text-[#FDF5E6] min-h-screen">
    
    {/* 🌿 GLOBAL REPEATING TINTED GRASS BACKGROUND */}
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" 
      style={{ 
        backgroundImage: `url(${grassImg})`, 
        backgroundRepeat: 'repeat',
        backgroundSize: '300px',
        filter: 'sepia(100%) hue-rotate(45deg) saturate(250%) brightness(70%)'
      }}
    />

    {/* ── CSS FOR THE REVOLVING EARTH ── */}
    <style>{`
      /* Mobile (Grid is 1 column, very tall. 10% on top/bottom, 40% on sides for constant speed) */
      @keyframes revolveEarthMobile {
        0% { top: -25px; left: -25px; }
        10% { top: -25px; left: calc(100% - 25px); }
        50% { top: calc(100% - 25px); left: calc(100% - 25px); }
        60% { top: calc(100% - 25px); left: -25px; }
        100% { top: -25px; left: -25px; }
      }

      /* Desktop (Grid is 2x2, essentially a square. 25% on all sides) */
      @keyframes revolveEarthDesktop {
        0% { top: -25px; left: -25px; }
        25% { top: -25px; left: calc(100% - 25px); }
        50% { top: calc(100% - 25px); left: calc(100% - 25px); }
        75% { top: calc(100% - 25px); left: -25px; }
        100% { top: -25px; left: -25px; }
      }

      .revolving-earth {
        position: absolute;
        z-index: 30;
        pointer-events: none;
        width: 50px;
        height: 50px;
        animation: revolveEarthMobile 35s linear infinite;
      }

      @media (min-width: 640px) {
        .revolving-earth {
          animation: revolveEarthDesktop 40s linear infinite;
        }
      }
    `}</style>

    {/* Container raised above the grass background */}
    <div className="container relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-[#F3D06B] text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 text-[#FDF5E6]">The Legend of Bagheera</h1>
          <p className="text-[#FDF5E6]/70 mt-3 max-w-md mx-auto">Where the wild meets the sophisticated in North Delhi.</p>
          <div className="section-divider max-w-xs mx-auto mt-6 bg-[#F3D06B]/20" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
        <ScrollReveal direction="left">
          <div className="relative">
            <img src={gallery1} alt="Bagheera Lounge Interior" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
            <img src={gallery2} alt="Signature Dish" className="absolute -bottom-6 -right-4 w-40 h-40 object-cover rounded-2xl border-4 border-[#0A0F0D] shadow-2xl hidden md:block" loading="lazy" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="space-y-5 text-[#FDF5E6]/70 leading-relaxed text-justify">
            <p>
              Bagheera Cafe & Lounge was established with a singular vision: to bring a premium, themed lounge experience to the heart of GTB Nagar. 
              Nestled in the bustling lanes of Hudson Lane, we've created a "Jungle-Luxe" escape where nature-inspired aesthetics meet modern luxury.
            </p>
            <p>
              Whether you are here for our legendary Moradabadi Yakhni Biryani or our signature "Bagheer Sangriya," our kitchen serves a multicuisine spread that caters to every craving. 
              We pride ourselves on being more than just a lounge; we are a community hub known for vibrant flavors, live music, and the warmest hospitality in North Campus.
            </p>
            <p className="font-medium text-[#F3D06B]">
              At Bagheera, every visit is an adventure—a perfect blend of gourmet dining and an electric nightlife experience.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width image */}
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden mb-24 h-64 md:h-80 max-w-5xl mx-auto border border-[#FDF5E6]/10 shadow-2xl">
          <img src={heroImage} alt="Bagheera Lounge Vibe" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/95 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-md">
              <h2 className="text-3xl font-display font-bold text-[#FDF5E6] mb-2 uppercase">Unleash the Vibe</h2>
              <p className="text-[#FDF5E6]/80 leading-relaxed">From chill afternoons to electric late-nights, Bagheera is the ultimate spot to unleash your wild side.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-[#F3D06B] text-sm font-semibold tracking-widest uppercase">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-[#FDF5E6] uppercase">Why Step Into The Jungle?</h2>
          <div className="section-divider max-w-xs mx-auto mt-4 bg-[#F3D06B]/20" />
        </div>
      </ScrollReveal>
      
      {/* 🌍 WRAPPER FOR THE REVOLVING EARTH */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* The Earth Animation */}
        <div className="revolving-earth">
          <Lottie animationData={earthAnimation} loop={true} />
        </div>

        {/* The 4 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10 card-hover group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,208,107,0.1)]">
                <div className="w-14 h-14 rounded-2xl bg-[#F3D06B]/10 flex items-center justify-center mb-5 group-hover:bg-[#F3D06B]/20 transition-colors">
                  <v.icon size={24} className="text-[#F3D06B]" />
                </div>
                <h3 className="font-display font-bold text-[#FDF5E6] text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-[#FDF5E6]/60 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
    </div>
  </div>
);

export default AboutPage;