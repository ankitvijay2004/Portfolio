import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const theme = useContext(ThemeContext);
  const isDark = theme.isDarkmode;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate arrays for the 3 rows
  // Row 1: f1 to f6
  const row1 = Array.from({ length: 6 }, (_, i) => `/f${i + 1}.png`);
  // Row 2: f7 to f12
  const row2 = Array.from({ length: 6 }, (_, i) => `/f${i + 7}.png`);
  // Row 3: f13 to f18
  const row3 = Array.from({ length: 6 }, (_, i) => `/f${i + 13}.png`);

  return (
    <section className="py-20 overflow-hidden">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className={`text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Client Reviews
        </h2>
        <div className={`h-1 w-20 mb-4 rounded-full ${isDark ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-blue-600'}`}></div>
        <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Voices of satisfaction from clients around the globe
        </p>
      </div>
      
      <div className="flex flex-col gap-10 mt-10">
        {/* Row 1 - Right to Left */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
            style={{ width: "max-content" }}
          >
            {[...row1, ...row1].map((src, index) => (
              <ReviewCard
                key={`r1-${index}`}
                src={src}
                isDark={isDark}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
            style={{ width: "max-content" }}
          >
            {[...row2, ...row2].map((src, index) => (
              <ReviewCard
                key={`r2-${index}`}
                src={src}
                isDark={isDark}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 3 - Right to Left */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
            style={{ width: "max-content" }}
          >
            {[...row3, ...row3].map((src, index) => (
              <ReviewCard
                key={`r3-${index}`}
                src={src}
                isDark={isDark}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl w-full h-full flex flex-col justify-center items-center"
            >
               <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 sm:right-0 sm:-top-10 text-white hover:text-cyan-400 transition-colors z-[10000]"
              >
                <CloseIcon />
              </button>
              <img
                src={selectedImage}
                alt="Full Review"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-slate-900/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ReviewCard = ({ src, isDark, onClick }: { src: string; isDark: boolean; onClick: () => void }) => {
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (hasError) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        relative inline-block h-64 w-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg
        border transition-all duration-300 transform hover:scale-105 cursor-pointer group
        ${
          isDark
            ? "bg-slate-900/50 border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            : "bg-slate-100 border-white/20 shadow-xl"
        }
        backdrop-blur-md
      `}
    >
      <img
        src={src}
        alt="Client Review"
        className="w-full h-full object-contain p-2"
        loading="lazy"
        onError={() => setHasError(true)}
      />
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-full border border-white/30 backdrop-blur-md">
          Click to View
        </span>
      </div>
    </div>
  );
};

export default Reviews;
