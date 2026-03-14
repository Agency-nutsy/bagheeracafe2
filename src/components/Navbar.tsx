import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "09910192252";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-[#0A0F0D]/95 backdrop-blur-md border-b border-[#FDF5E6]/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/" 
          className="group relative transition-all duration-300"
        >
          {/* 🐆 GLOWING GOLDEN BRAND TEXT */}
          <span 
            className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(to bottom, #FDF5E6 0%, #F3D06B 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 8px rgba(243,208,107,0.6)) drop-shadow(0 0 2px rgba(243,208,107,0.8))"
            }}
          >
            Bagheera
          </span>
          {/* Subtle underline glow on hover */}
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F3D06B] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#F3D06B]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                style={{ fontFamily: "'Lato', sans-serif" }}
                className={`text-sm font-bold uppercase tracking-widest transition-colors relative py-1 ${
                  location.pathname === l.to
                    ? "text-[#F3D06B]"
                    : "text-[#FDF5E6]/70 hover:text-[#FDF5E6]"
                }`}
              >
                {l.label}
                {location.pathname === l.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[#F3D06B] shadow-[0_0_10px_#F3D06B]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <a
          href={`tel:${PHONE}`}
          style={{ fontFamily: "'Lato', sans-serif" }}
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
            showSolid
              ? "bg-[#F3D06B] text-black hover:bg-[#FDF5E6] shadow-[0_0_20px_rgba(243,208,107,0.4)] scale-105"
              : "bg-[#FDF5E6]/10 text-[#FDF5E6] border border-[#FDF5E6]/20 hover:bg-[#FDF5E6]/20"
          }`}
        >
          <Phone size={16} />
          Book Table
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 transition-colors duration-300 text-[#FDF5E6]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#FDF5E6]/10 bg-[#0A0F0D] overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    className={`block py-3 px-4 rounded-xl text-sm font-bold transition-colors uppercase tracking-widest ${
                      location.pathname === l.to
                        ? "bg-[#F3D06B] text-black shadow-[0_0_15px_rgba(243,208,107,0.3)]"
                        : "text-[#FDF5E6]/70 hover:bg-[#FDF5E6]/10 hover:text-[#FDF5E6]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href={`tel:${PHONE}`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  className="flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-[#F3D06B] text-black text-sm font-black text-center mt-4 shadow-[0_0_20px_rgba(243,208,107,0.4)] uppercase tracking-widest"
                >
                  <Phone size={16} />
                  Book Your Table
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;