import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, 110033";
// 🛠️ Updated to the working map link
const MAPS_LINK = "https://www.google.com/maps/place/Bagheera+Cafe+%26+Lounge/@28.6946494,77.2042514,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfdf094b1ae2f:0xb37be3005f8e6407!8m2!3d28.6946494!4d77.2042514!16s%2Fg%2F11tnkym4w9?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

const Footer = () => (
  <footer className="bg-[#0A0F0D] text-[#FDF5E6] relative overflow-hidden bg-grain">
    {/* Subtle Matte Border */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FDF5E6]/10" />
    
    <div className="container py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4 tracking-tight text-[#FDF5E6]">
            Bagheera
          </h3>
          <p className="text-[#FDF5E6]/60 text-sm leading-relaxed mb-6 font-light">
            North Delhi's premier jungle-themed lounge offering an exquisite blend of North Indian, Chinese, and Continental delicacies.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/bagheeracafelounge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-[#F3D06B]/10 flex items-center justify-center text-[#F3D06B] hover:bg-[#F3D06B] hover:text-black transition-all duration-500"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Navigate</h4>
          <ul className="space-y-4 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[#FDF5E6]/70 hover:text-[#F3D06B] transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Items */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Signatures</h4>
          <ul className="space-y-4 text-sm text-[#FDF5E6]/70">
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Moradabadi Biryani</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Stuffed Murg Tangdi</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Peri Peri Tikka</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Chicken Nachos</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Bagheera Sangriya</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Contact</h4>
          <ul className="space-y-4 text-sm text-[#FDF5E6]/70">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#F3D06B] transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F3D06B]" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-[#F3D06B] transition-colors">
                <Phone size={16} className="shrink-0 text-[#F3D06B]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FDF5E6]/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-[#FDF5E6]/40 tracking-widest uppercase">
          © {new Date().getFullYear()} Bagheera Cafe & Lounge
        </p>
        <p className="text-[10px] text-[#FDF5E6]/40 tracking-widest uppercase">
          Open Daily: 11:00 AM – 01:00 AM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;