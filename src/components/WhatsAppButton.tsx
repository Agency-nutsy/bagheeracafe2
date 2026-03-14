import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react"; // Using clean icons

const ActionButtons = () => {
  // 📍 Precise Google Maps link for Bagheera Cafe & Lounge, Hudson Lane
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Bagheera+Cafe+%26+Lounge+Hudson+Lane+Delhi";
  
  // 🟢 Official Bagheera WhatsApp link
  const whatsappUrl = "https://wa.me/919910192252"; 

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      
      {/* 📍 GET DIRECTIONS BUTTON */}
      <motion.a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions"
        className="flex items-center justify-center bg-white text-black rounded-full shadow-2xl w-14 h-14 sm:w-16 sm:h-16 border border-black/5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center justify-center">
          <MapPin size={24} className="text-black" />
          <span className="text-[8px] font-black uppercase mt-0.5">Go</span>
        </div>
      </motion.a>

      {/* 🟢 WHATSAPP BUTTON (Using modern icon instead of jpeg) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 w-14 h-14 sm:w-16 sm:h-16"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

    </div>
  );
};

export default ActionButtons;