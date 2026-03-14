import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110033";
const MAPS_LINK = "https://maps.app.goo.gl/Lxwj73bFELRHevfw6";
// 📍 Updated with your specific embed source
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8327455165877!2d77.20425139999999!3d28.6946494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf094b1ae2f%3A0xb37be3005f8e6407!2sBagheera%20Cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1772806528628!5m2!1sen!2sin";
const WHATSAPP = "https://wa.me/919910192252";
const INSTAGRAM = "https://www.instagram.com/bagheeracafelounge";

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0A0F0D] text-[#FDF5E6] min-h-screen">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#F3D06B] text-sm font-black tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 text-[#FDF5E6]">Contact Bagheera</h1>
            <p className="text-[#FDF5E6]/70 mt-3 max-w-md mx-auto">Ready to step into the jungle? Book your table or reach out for event inquiries.</p>
            <div className="section-divider max-w-xs mx-auto mt-6 bg-[#F3D06B]/20" />
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <motion.a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#F3D06B] text-black px-6 py-5 font-bold text-lg shadow-[0_0_15px_rgba(243,208,107,0.3)] hover:shadow-[0_0_25px_rgba(243,208,107,0.5)] hover:bg-[#FDF5E6] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={22} />
              Call for Booking
            </motion.a>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white px-6 py-5 font-bold text-lg shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </motion.a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Cards */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#F3D06B]/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#F3D06B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FDF5E6] text-sm mb-1">Location</h4>
                  <p className="text-sm text-[#FDF5E6]/70 leading-relaxed">{ADDRESS}</p>
                </div>
              </a>
              
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#F3D06B]/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#F3D06B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FDF5E6] text-sm mb-1">Direct Line</h4>
                  <p className="text-sm text-[#FDF5E6]/70 font-medium">{PHONE_DISPLAY}</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10">
                <h4 className="font-bold text-[#FDF5E6] text-sm mb-3">Join the Pack</h4>
                <div className="flex gap-3">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#F3D06B]/10 flex items-center justify-center text-[#F3D06B] hover:bg-[#F3D06B] hover:text-black transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps Embed */}
          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden border-4 border-[#0D1C15] bg-[#0D1C15] h-72 md:h-full min-h-[350px] shadow-2xl group relative">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bagheera Lounge Location"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;