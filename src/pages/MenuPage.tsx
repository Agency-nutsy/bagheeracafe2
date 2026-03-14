import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Utensils, Flame, PawPrint, BookOpen, Pizza, Soup, Coffee } from "lucide-react";
import LottieLib, { useLottie } from "lottie-react";

// ✅ Safe Lottie import for Vite
const Lottie = (LottieLib as any).default ?? LottieLib;

import hangingPotAnimation from "@/assets/hanging_pot.json"; // 🪴 Imported Pot Animation
import grassImg from "@/assets/grass.png"; // 🌿 Imported Repeating Grass Image
import catAnimation from "@/assets/cat.json"; // 🐆 Imported Panther Animation

const PHONE = "09910192252";

// ── FULL CATEGORIZED DATA (UNTOUCHED AS REQUESTED) ──
const menuData = [
  {
    id: "starters",
    category: "Starters",
    emoji: "🥗",
    icon: Utensils,
    veg: [
      { name: "Cheese Corn Balls", price: "399", desc: "Grated cheese crush corn with balls in mayo pesto dip" },
      { name: "Nachos With Cheese", price: "399", desc: "Nachos with salsa and cheese" },
      { name: "French Fries", price: "399", desc: "Peri-Peri French Fries" }
    ],
    nonVeg: [
      { name: "Chicken Nuggets", price: "499", desc: "Chopped chicken, capsicum with peri-peri dips" },
      { name: "Chicken Spinach Fetta", price: "499", desc: "Spinach wrapped in chicken with feta cheese" },
      { name: "Harisha Chicken", price: "499", desc: "Marinated chicken with harisha sauce" }
    ]
  },
  {
    id: "tandoori",
    category: "Tandoori Starter",
    emoji: "🔥",
    icon: Flame,
    veg: [
      { name: "Chatpate Aloo Tikki", price: "399" }, { name: "Stuffed Potato", price: "399" },
      { name: "Mashroom Mastana", price: "399" }, { name: "Malai Chaap", price: "399" },
      { name: "Hara-Bhara Kebab", price: "399" }, { name: "Masala Chaap", price: "399" },
      { name: "Paneer Tikka", price: "399" }, { name: "Veg Seek Kebab", price: "399" },
      { name: "Paneer Pahadi Tikka", price: "399" }, { name: "Bagheera Spl. Veg Platter", price: "399" },
      { name: "Afghani Paneer Tikka", price: "399" }
    ],
    nonVeg: [
      { name: "Murg Tandoori", price: "599" }, { name: "Murgh Malai Tikka", price: "599" },
      { name: "Tangri Kebab", price: "599" }, { name: "Chicken Seekh Kebab", price: "599" },
      { name: "Murg Tikka", price: "599" }, { name: "Fish Finger", price: "799" },
      { name: "Fish Tikka", price: "599" }
    ]
  },
  {
    id: "chinese",
    category: "Chinese Starter",
    emoji: "🥢",
    icon: PawPrint,
    veg: [
      { name: "Veg Manchurian (Dry/Gravy)", price: "399" }, { name: "Chilli Potato", price: "399" },
      { name: "Honey Chilli Potato", price: "399" }, { name: "Veg Spring Roll", price: "399" },
      { name: "Paneer Crispy", price: "399" }, { name: "Paneer Chilli Dry", price: "399" },
      { name: "Bagheera Spl. Starter", price: "599", desc: "Mushroom, brocoli, paneer, babycorn, chilli dry" }
    ],
    nonVeg: [
      { name: "Chicken Lollipop", price: "599" }, { name: "Chicken Chilli Gravy", price: "599" },
      { name: "Chicken Chilli Dry", price: "599" }, { name: "Shreeded Chicken Hot Garlic", price: "599" },
      { name: "Chicken Crispy", price: "599" }, { name: "Drums Of Heaven", price: "599" },
      { name: "Chicken Manchurian Dry", price: "599" }, { name: "Lemon Chicken", price: "599" }
    ]
  },
  {
    id: "pizza",
    category: "Pizza",
    emoji: "🍕",
    icon: Pizza,
    veg: [
      { name: "Veg Farm Fresh", price: "499", desc: "Mushroom, bell pepper, jalapeno and onion" },
      { name: "Paneer Makhani", price: "499", desc: "Capsicum, onion, red papeika paneer tikka in tandoori sauce" },
      { name: "Classic Margherita", price: "499", desc: "Cheesy tomato, basil with mozzarella" },
      { name: "China Gate", price: "499", desc: "Paneer, schezwan, baby corn, spring onion and capsicum" },
      { name: "Veg Lovers", price: "499", desc: "Exotic veggies, mozzarella cheese with tomato sauce" },
      { name: "Maggie Pizza", price: "499", desc: "Maggie, tomato, olives, three type of capsicum, jalapeno, onion" },
      { name: "Momos Pizza", price: "499", desc: "Momos, Exotic veggies, mozzarella cheese with tomato sauce" }
    ],
    nonVeg: [
      { name: "Roasted Chicken Herb Pizza", price: "599", desc: "Roasted chicken, onion, mushroom, fresh herbs with mozzarella" },
      { name: "Peri-Peri Spiced Pizza", price: "599", desc: "Peri-peri chicken with peri-peri spilled onion, mushroom" },
      { name: "Spicy Chicken Tikka Pizza", price: "599", desc: "Smoked chicken tikka, capsicum onion with mozzarella" },
      { name: "BBQ Pizza", price: "599", desc: "Boneless chicken, pepperoncini pepper s, onion, cilantro" },
      { name: "Butter Chicken Pizza", price: "599", desc: "Chicken cooked in traditional makhani sauce, onion with mozzarella" },
      { name: "Momos Pizza", price: "599", desc: "Chicken momos, Exotic veggies, mozzarella cheese with tomato sauce" }
    ]
  },
  {
    id: "burger-sandwich",
    category: "Burger & Sandwich",
    emoji: "🍔",
    icon: Utensils,
    veg: [
      { name: "Veg Burger", price: "349" }, { name: "Cheese Burger", price: "359" },
      { name: "Cheese Garlic Burger", price: "359" }, { name: "Crispy Burger", price: "359" },
      { name: "Grilled Veg Sandwich", price: "399" }, { name: "Grilled Paneer Sandwich", price: "399" },
      { name: "Grilled Cheese Sandwich", price: "399" }, { name: "Club Sandwich", price: "399" }
    ],
    nonVeg: [
      { name: "Chicken Burger", price: "359" }, { name: "Chicken Cheese Burger", price: "359" },
      { name: "Chicken Crispy Burger", price: "359" }, { name: "Chicken Garlic Burger", price: "359" },
      { name: "Grilled Chicken Sandwich", price: "399" }
    ]
  },
  {
    id: "momos-platter",
    category: "Momos & Platter",
    emoji: "🥟",
    icon: PawPrint,
    veg: [
      { name: "Veg Momos", price: "399" }, { name: "Veg Tandoori Momos", price: "399" },
      { name: "Veg Crispy Momos", price: "399" }, { name: "Cheese Tandoori Momos", price: "399" },
      { name: "Cheese Momos", price: "399" }, { name: "Cheese Corn Tandoori Momos", price: "399" },
      { name: "Cheese Corn Momos", price: "399" }, { name: "Tandoori Veg Fully Loaded Platter", price: "799" },
      { name: "Chinese Veg Platter", price: "799" }
    ],
    nonVeg: [
      { name: "Chicken Momos", price: "499" }, { name: "Chicken Crispy Momos", price: "499" },
      { name: "Chicken Tandoori Momos", price: "499" }, { name: "Tandoori Non-Veg Platter", price: "999" },
      { name: "Chinese Non-Veg Platter", price: "999" }
    ]
  },
  {
    id: "pasta",
    category: "Pasta",
    emoji: "🍝",
    icon: Utensils,
    veg: [
      { name: "Alfredo Pasta", price: "399" }, { name: "Aglio Olio", price: "399" },
      { name: "Arrabiata Pasta", price: "399" }, { name: "Lasagna", price: "399" },
      { name: "Mama Rosa", price: "399" }, { name: "Pesto", price: "399" },
      { name: "Spaghetti Pasta", price: "399" }
    ],
    nonVeg: [
      { name: "Alfredo Pasta", price: "499" }, { name: "Aglio Olio", price: "499" },
      { name: "Arrabiata Pasta", price: "499" }, { name: "Lasagna", price: "499" },
      { name: "Mama Rosa", price: "499" }, { name: "Pesto", price: "499" },
      { name: "Spaghetti Pasta", price: "499" }
    ]
  },
  {
    id: "rice-noodles",
    category: "Rice & Noodles",
    emoji: "🍚",
    icon: Soup,
    veg: [
      { name: "Steamed Rice", price: "399" }, { name: "Noodles", price: "499" },
      { name: "Kashmiri Pulao", price: "499" }, { name: "Fried Rice", price: "499" },
      { name: "Schezwan Fried Rice", price: "499" }, { name: "Combination Fried Rice", price: "499" },
      { name: "Biryani", price: "499" }, { name: "Hakka Noodles", price: "499" },
      { name: "Butter Chilli Garlic Noodles", price: "499" }, { name: "Singapori Noodles", price: "499" },
      { name: "Schezwan Noodles", price: "499" }
    ],
    nonVeg: [
      { name: "Street Chicken Biryani", price: "499" }
    ]
  },
  {
    id: "salad",
    category: "Salad",
    emoji: "🥗",
    icon: Utensils,
    veg: [
      { name: "Veg Pasta Salad", price: "399", desc: "Penne pasta with bell pepper dressed in cocktail sauce" },
      { name: "Veg Oriental Salad", price: "399", desc: "Cucumber, tomato, paneer, bell pepper with vineger dressing" },
      { name: "Sprouted Fruity Beans Salad", price: "399", desc: "Fruits, beans, sprouts in honey mustard sauce" },
      { name: "Bagheera Spl. Nutty Harvest", price: "399", desc: "Low fat cottage cheese or tofu with nutritious salad mix" },
      { name: "Vegan Garden", price: "399", desc: "Nutritious salad mix topped with chick peas and pomegranates" }
    ],
    nonVeg: [
      { name: "Chicken Mix Fruit Salad", price: "499", desc: "Apple, Pomegrananete, lettuce, brocoli walnut, cashew nuts" },
      { name: "Chicken Nicoise Salad", price: "499", desc: "Chicken, boiled egg, corn, onion, capsicum, dry fruit" },
      { name: "Chicken Pasta Salad", price: "499", desc: "Penne pasta with chicken, bell pepper dressed in coctail sauce" },
      { name: "Bagheera Spl. Cajun Spiced Chicken", price: "499", desc: "Grilled chicken breast served with nutritious salad mix" },
      { name: "Chicken Greek Salad", price: "499", desc: "Cettuce, carrot, capsicum, olive, walnut, cashew added chicken" }
    ]
  },
  {
    id: "sizzlers",
    category: "Sizzlers",
    emoji: "💨",
    icon: Flame,
    veg: [
      { name: "Cottage Cheese Shaslik Sizzler", price: "499", desc: "Toosed butter, parsley rice, exotic vegetable, french fries" },
      { name: "Mix Veg Grilled Sizzler", price: "499", desc: "Chilli spiced rice, exotic veg stick, french fries with spicy chilli sauce" },
      { name: "Veg Delight Sizzler", price: "499", desc: "Spicy maxicon rice, exotic vegetable, mashed tomato with cheese sauce" },
      { name: "Veg Satellite Sizzler", price: "499", desc: "Indian style masala rice, veg-steak, french fries" },
      { name: "Peri-Peri Sizzler", price: "499", desc: "Crumbe fried cottage cheese with chilli rice" },
      { name: "Chottage Cheese Sizzler", price: "499", desc: "Wok tossed noodels, burnt garlic vegetables, masala fries" },
      { name: "BBQ Sizzler", price: "499", desc: "Barbequed mashroom with spaghatti noodels" }
    ],
    nonVeg: [
      { name: "Chicken Paprika Sizzler", price: "599", desc: "Peprica rice, exotic vegetable, french fries, grilled chicken" },
      { name: "Char Grilled Breast Sizzler", price: "599", desc: "Dami rice, chicken breast, exotic vegetable, french fries" },
      { name: "Chicken Satellite Sizzler", price: "599", desc: "Indian style masala rice, chicken steak, french fries" },
      { name: "Peri-Peri Sizzler", price: "599", desc: "Crumbe fried cottage cheese / grilled chicken with chilli rice" },
      { name: "BBQ Sizzler", price: "599", desc: "BBQ chicken with spaghatti noodels, sauteed vegetables" }
    ]
  },
  {
    id: "main-course",
    category: "Main Course",
    emoji: "🥘",
    icon: Soup,
    veg: [
      { name: "Dal Makhni", price: "349" }, { name: "Mix Vegetable", price: "250" },
      { name: "Shahi Paneer", price: "389" }, { name: "Gobhi Masala Adraki", price: "240" },
      { name: "Paneer Lababdar", price: "349" }, { name: "Mashroom Taka-Tak", price: "280" },
      { name: "Kadhai Paneer", price: "349" }, { name: "Bagheera Spl. Roasted Paneer", price: "340" }
    ],
    nonVeg: [
      { name: "Punjabi Chicken Masala", price: "480" }, { name: "Kadhai Chicken", price: "480" },
      { name: "Home Style Chicken", price: "460" }, { name: "Chicken Patiala", price: "470" },
      { name: "Chicken Handi", price: "490" }, { name: "Chicken Lababdar", price: "490" },
      { name: "Butter Chicken", price: "480" }
    ]
  },
  {
    id: "breads-extras",
    category: "Breads & Extras",
    emoji: "🫓",
    icon: Pizza,
    veg: [
      { name: "Tanduri Roti", price: "20" }, { name: "Stuff Naan", price: "89" },
      { name: "Butter Roti", price: "25" }, { name: "Laccha Paratha", price: "69" },
      { name: "Plain Naan", price: "35" }, { name: "Butter Naan", price: "69" },
      { name: "Fry Papad", price: "59" }, { name: "Masala Papad", price: "79" },
      { name: "Roasted Papad", price: "39" }, { name: "Cheese Masala Papad", price: "99" },
      { name: "Masala Peanut", price: "160" }
    ],
    nonVeg: []
  },
  {
    id: "dessert-beverage",
    category: "Dessert & Beverages",
    emoji: "☕",
    icon: Coffee,
    veg: [
      { name: "Ice Cream", price: "149" }, { name: "Gulab Jamun", price: "149" },
      { name: "Mineral Water", price: "on MRP" }, { name: "Masala Tea", price: "79" },
      { name: "Hot Coffee", price: "99" }, { name: "Boondi Raita", price: "99" },
      { name: "Plain Curd", price: "50" }, { name: "Mix Veg Raita", price: "99" },
      { name: "Pine Apple Raita", price: "119" }
    ],
    nonVeg: []
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // ── 🧠 ROCK-SOLID SCROLL SPY LOGIC ──
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-160px 0px -75% 0px", 
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveCategory(id);
            
            const activeButton = scrollContainerRef.current?.querySelector(`[data-id="${id}"]`);
            if (activeButton && scrollContainerRef.current) {
               const container = scrollContainerRef.current;
               const scrollLeft = (activeButton as HTMLElement).offsetLeft - container.offsetWidth / 2 + (activeButton as HTMLElement).offsetWidth / 2;
               container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ── 🖱️ SMOOTH JUMP TO SECTION ──
  const handleCategoryClick = (id: string) => {
    setActiveCategory(id); 
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      className="pt-[80px] pb-20 min-h-screen select-none relative bg-[#0A0F0D]"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 40%, #0D1C15 0%, #0A0F0D 100%)",
      }}
    >
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

      {/* ── CSS FOR THE RUNNING PANTHER ── */}
      <style>{`
        /* Mobile (Tall Boxes) */
        @keyframes pantherRunMobile {
          0%      { top: -35px; left: -35px; transform: rotate(0deg); }
          19.9%   { top: -35px; left: calc(100% - 35px); transform: rotate(0deg); }
          20%     { top: -35px; left: calc(100% - 35px); transform: rotate(90deg); }
          49.9%   { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(90deg); }
          50%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(180deg); }
          69.9%   { top: calc(100% - 35px); left: -35px; transform: rotate(180deg); }
          70%     { top: calc(100% - 35px); left: -35px; transform: rotate(270deg); }
          99.9%   { top: -35px; left: -35px; transform: rotate(270deg); }
          100%    { top: -35px; left: -35px; transform: rotate(0deg); }
        }

        /* Desktop (Wide Boxes) */
        @keyframes pantherRunDesktop {
          0%      { top: -35px; left: -35px; transform: rotate(0deg); }
          34.9%   { top: -35px; left: calc(100% - 35px); transform: rotate(0deg); }
          35%     { top: -35px; left: calc(100% - 35px); transform: rotate(90deg); }
          49.9%   { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(90deg); }
          50%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(180deg); }
          84.9%   { top: calc(100% - 35px); left: -35px; transform: rotate(180deg); }
          85%     { top: calc(100% - 35px); left: -35px; transform: rotate(270deg); }
          99.9%   { top: -35px; left: -35px; transform: rotate(270deg); }
          100%    { top: -35px; left: -35px; transform: rotate(0deg); }
        }

        .revolving-panther {
          position: absolute;
          z-index: 30;
          pointer-events: none;
          width: 70px;
          height: 70px;
          animation: pantherRunMobile 30s linear infinite;
          /* 🪄 THE GOLDEN SPIRIT FILTER */
          filter: drop-shadow(0 0 12px rgba(243,208,107,0.8)) sepia(100%) saturate(300%) hue-rotate(5deg) brightness(1.3);
        }

        @media (min-width: 768px) {
          .revolving-panther {
            animation: pantherRunDesktop 40s linear infinite;
          }
        }
      `}</style>

      {/* ── 🚀 FIXED STICKY CATEGORY NAV BAR 🚀 ── */}
      <nav className="fixed top-[64px] md:top-[80px] left-0 right-0 z-30 bg-[#0A0F0D]/95 backdrop-blur-md border-b-2 border-[#F3D06B]/20 py-4 shadow-2xl">
        
        {/* 🪴 LEFT HANGING POT */}
        <div className="absolute top-full left-2 md:left-8 w-16 md:w-20 z-0 origin-top opacity-90 pointer-events-none">
           <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>

        {/* 🪴 RIGHT HANGING POT */}
        <div className="absolute top-full right-2 md:right-8 w-16 md:w-20 z-0 origin-top opacity-90 pointer-events-none">
           <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>

        <div className="container px-4 relative z-10">
          <div 
            ref={scrollContainerRef}
            className="flex flex-row gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x"
          >
            {menuData.map(cat => (
              <button 
                key={cat.id} 
                data-id={cat.id}
                onClick={() => handleCategoryClick(cat.id)} 
                className={`px-6 py-3 rounded-full text-[13px] font-black uppercase transition-all flex-shrink-0 snap-start flex items-center gap-3 border-2 ${
                  activeCategory === cat.id 
                  ? "bg-[#F3D06B] text-black border-[#F3D06B] shadow-[0_0_15px_rgba(243,208,107,0.4)] scale-105" 
                  : "bg-[#FDF5E6]/5 text-[#FDF5E6]/60 border-transparent hover:bg-[#FDF5E6]/10 hover:text-[#FDF5E6]"
                }`}
              >
                 <span className="text-xl">{cat.emoji}</span> 
                 <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BAGHEERA MENU HEADER ── */}
      <div className="pt-32 md:pt-40 pb-10 text-center relative z-10">
         <h1 className="text-5xl md:text-7xl font-display font-black text-[#FDF5E6] uppercase tracking-tighter">Bagheera Menu</h1>
      </div>

      <div className="container relative mt-12 z-10">
        <main className="w-full">
          {/* ── MENU CONTENT SECTIONS ── */}
          <div className="space-y-32">
            {menuData.map(cat => (
              <div 
                key={cat.id} 
                id={cat.id} 
                ref={(el) => (sectionRefs.current[cat.id] = el)}
                className="space-y-12 scroll-mt-[200px]"
              >
                <div className="flex items-center gap-6 border-l-4 border-[#F3D06B] pl-6">
                   <span className="text-5xl">{cat.emoji}</span>
                   <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-[#FDF5E6] tracking-tight">{cat.category}</h2>
                </div>
                
                {/* VEG SECTION */}
                {cat.veg && cat.veg.length > 0 && (
                  <div className="bg-[#0D1C15]/80 p-8 md:p-14 rounded-[3.5rem] border border-[#FDF5E6]/10 shadow-2xl backdrop-blur-sm relative">
                    
                    {/* 🐆 GLOWING GOLDEN PANTHER ANIMATION */}
                    <div className="revolving-panther">
                      <Lottie animationData={catAnimation} loop={true} />
                    </div>

                    <h3 className="text-[11px] font-black uppercase text-green-400 mb-10 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Veg Selection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {cat.veg.map((item, i) => (
                        <div key={i} className="flex justify-between border-b border-[#FDF5E6]/10 pb-6 text-[#FDF5E6] group transition-colors hover:border-[#F3D06B]/30 relative z-10">
                          <div className="flex-1 pr-6">
                            <h4 className="font-bold text-lg group-hover:text-[#F3D06B] transition-colors">{item.name}</h4>
                            {item.desc && <p className="text-xs text-[#FDF5E6]/50 italic mt-2 font-light leading-relaxed">{item.desc}</p>}
                          </div>
                          <span className="font-black text-[#F3D06B] text-lg tabular-nums">
                            {item.price === "on MRP" ? "MRP" : `₹${item.price}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* NON-VEG SECTION */}
                {cat.nonVeg && cat.nonVeg.length > 0 && (
                  <div className="bg-[#0D1C15]/80 p-8 md:p-14 rounded-[3.5rem] border border-[#FDF5E6]/10 shadow-2xl backdrop-blur-sm relative">
                    
                    {/* 🐆 GLOWING GOLDEN PANTHER ANIMATION */}
                    <div className="revolving-panther">
                      <Lottie animationData={catAnimation} loop={true} />
                    </div>

                    <h3 className="text-[11px] font-black uppercase text-red-400 mb-10 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" /> Non-Veg Selection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {cat.nonVeg.map((item, i) => (
                        <div key={i} className="flex justify-between border-b border-[#FDF5E6]/10 pb-6 text-[#FDF5E6] group transition-colors hover:border-[#F3D06B]/30 relative z-10">
                          <div className="flex-1 pr-6">
                            <h4 className="font-bold text-lg group-hover:text-[#F3D06B] transition-colors">{item.name}</h4>
                            {item.desc && <p className="text-xs text-[#FDF5E6]/50 italic mt-2 font-light leading-relaxed">{item.desc}</p>}
                          </div>
                          <span className="font-black text-[#F3D06B] text-lg tabular-nums">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;