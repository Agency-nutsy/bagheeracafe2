import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// 🐆 Assets
import grassImg from "@/assets/grass.png";
import tikkaImg from "@/assets/peri peri.jpg";
import nachosImg from "@/assets/nachos.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import drinkImg from "@/assets/sangriya.jpg";
import gallery1 from "@/assets/vibe 2.webp";
import gallery2 from "@/assets/platter.jpg";
import gallery3 from "@/assets/forest.webp";
import gallery4 from "@/assets/dj.webp";
import gallery5 from "@/assets/pasta.jpg";
import gallery6 from "@/assets/tropical.jpg";

const images = [
  { src: tikkaImg, alt: "Peri Peri Chicken Tikka", cat: "Food" },
  { src: gallery1, alt: "Jungle Luxe Lounge", cat: "Vibe" },
  { src: biryaniImg, alt: "Yakhni Biryani", cat: "Food" },
  { src: gallery2, alt: "Signature Platters", cat: "Food" },
  { src: drinkImg, alt: "Bagheer Sangriya", cat: "Drinks" },
  { src: gallery3, alt: "Forest Inspired Decor", cat: "Vibe" },
  { src: gallery4, alt: "Live DJ Sessions", cat: "Vibe" },
  { src: gallery6, alt: "Tropical Mocktails", cat: "Drinks" },
  { src: gallery5, alt: "Aglio E Olio Pasta", cat: "Food" },
  { src: nachosImg, alt: "Cheesy Chicken Nachos", cat: "Food" },
];

const filters = ["All", "Food", "Vibe", "Drinks"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
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

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[#F3D06B] text-sm font-semibold tracking-widest uppercase">Visuals</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 text-[#FDF5E6]">Inside The Jungle</h1>
            <p className="text-[#FDF5E6]/60 mt-3">Exquisite flavors, untamed vibes, and unforgettable nights.</p>
            <div className="section-divider max-w-xs mx-auto mt-6 bg-[#F3D06B]/20 h-[1px]" />
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? "bg-[#F3D06B] text-black shadow-[0_0_15px_rgba(243,208,107,0.3)]"
                    : "bg-[#0D1C15] text-[#FDF5E6]/60 hover:text-[#FDF5E6] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                /* 🌿 Leaf Shape applied to gallery items */
                className="overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg group aspect-square cursor-pointer relative bg-[#0D1C15] border border-[#F3D06B]/20"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0A0F0D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[#FDF5E6] text-xs md:text-sm font-bold tracking-wide uppercase">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-[#0A0F0D]/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#F3D06B]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
              <button 
                className="absolute top-8 right-8 text-[#FDF5E6]/50 hover:text-[#F3D06B] transition-colors font-bold tracking-widest uppercase text-sm"
                onClick={() => setSelected(null)}
              >
                Close ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;