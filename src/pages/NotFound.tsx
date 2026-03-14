import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* Matte Finish Texture Overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="rounded-full bg-primary/10 p-6">
            <Compass size={64} className="text-primary" />
          </div>
        </motion.div>

        <motion.h1 
          className="mb-2 text-7xl md:text-8xl font-display font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2 
          className="mb-4 text-xl md:text-2xl font-display italic text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lost in the Jungle?
        </motion.h2>

        <motion.p 
          className="mb-10 text-muted-foreground max-w-xs mx-auto text-sm"
          style={{ fontFamily: "'Lato', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The trail you're looking for doesn't exist. Let's get you back to the lounge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={18} />
            Back to Safety
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;