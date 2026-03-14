import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import LottieLib from "lottie-react";

// ✅ THE FIX: handles both CJS (.default) and ESM exports
const Lottie = (LottieLib as any).default ?? LottieLib;

import heroSlide1 from "@/assets/butter-tea.jpg";
import heroSlide2 from "@/assets/butter-tea.jpg";
import heroSlide3 from "@/assets/butter-tea.jpg";
import heroSlide4 from "@/assets/butter-tea.jpg";
import catAnimation from "@/assets/cat.json";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [lottieReady, setLottieReady] = useState(false);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);

    const t4 = setTimeout(() => {
      document.body.style.overflow = "unset";
      onComplete();
    }, 2000);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const left = Math.max(4, Math.min(96, progress));

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        backgroundColor: "#0A0F0D",
        backgroundImage: "radial-gradient(circle at center, #0D1C15 0%, #0A0F0D 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PawPrint size={40} className="text-[#F3D06B]/20 mb-6" />
        <h1 className="font-display text-4xl sm:text-6xl font-black mb-4 text-[#FDF5E6] uppercase tracking-[0.2em]">
          Bagheera
        </h1>
      </motion.div>

      <div className="w-64 sm:w-80 h-[80px] relative mb-2" aria-hidden>
        <div
          className="absolute bottom-0"
          style={{
            left: `${left}%`,
            transform: "translateX(-50%)",
            transition: "left 0.4s cubic-bezier(.2,.9,.2,1)",
            pointerEvents: "none",
            width: 140,
            willChange: "left, transform",
          }}
        >
          {/* ✅ Hidden until correct frame is set — prevents caterpillar flash */}
          <div
            style={{
              filter: "brightness(0) invert(1)",
              visibility: lottieReady ? "visible" : "hidden",
            }}
          >
            <Lottie
              animationData={catAnimation}
              loop={true}
              lottieRef={lottieRef}
              onDOMLoaded={() => {
                if (lottieRef.current) {
                  const totalFrames = lottieRef.current.getDuration(true);
                  const startFrame = Math.floor(totalFrames * 0.3);
                  lottieRef.current.goToAndPlay(startFrame, true);
                }
                setLottieReady(true);
              }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="w-64 sm:w-80 h-1 rounded-full overflow-hidden"
        style={{ background: "rgba(253, 245, 230, 0.1)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full bg-[#F3D06B] shadow-[0_0_15px_rgba(243,208,107,0.5)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-8 text-[10px] font-bold tracking-[0.5em] uppercase text-[#FDF5E6]/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Lounge & Cafe
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;