import { motion } from "framer-motion";

export default function Flywheel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Rotating Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7E33" />
              <stop offset="100%" stopColor="#FF5500" />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>
          </defs>

          {/* Top Segment: Better Data (Orange) */}
          <path
            d="M250 50 A200 200 0 0 1 423 150 L380 175 A150 150 0 0 0 250 100 Z"
            fill="url(#orangeGradient)"
          />
          <path d="M423 150 L450 135 L435 180 Z" fill="#FF5500" /> {/* Arrowhead */}
          <text x="336" y="110" fill="white" fontSize="24" fontWeight="bold" transform="rotate(45, 336, 110)" textAnchor="middle">BETTER DATA</text>

          {/* Right Segment: AI Learning (Teal) */}
          <path
            d="M450 250 A200 200 0 0 1 350 423 L325 380 A150 150 0 0 0 400 250 Z"
            fill="url(#tealGradient)"
          />
          <path d="M350 423 L365 450 L320 435 Z" fill="#0F766E" /> {/* Arrowhead */}
          <text x="390" y="336" fill="white" fontSize="24" fontWeight="bold" transform="rotate(135, 390, 336)" textAnchor="middle">AI LEARNING</text>

          {/* Bottom Segment: Outcomes (Orange) */}
          <path
            d="M250 450 A200 200 0 0 1 77 350 L120 325 A150 150 0 0 0 250 400 Z"
            fill="url(#orangeGradient)"
          />
          <path d="M77 350 L50 365 L65 320 Z" fill="#FF5500" /> {/* Arrowhead */}
          <text x="164" y="390" fill="white" fontSize="24" fontWeight="bold" transform="rotate(225, 164, 390)" textAnchor="middle">OUTCOMES</text>

          {/* Left Segment: Insights (Teal) */}
          <path
            d="M50 250 A200 200 0 0 1 150 77 L175 120 A150 150 0 0 0 100 250 Z"
            fill="url(#tealGradient)"
          />
          <path d="M150 77 L135 50 L180 65 Z" fill="#0F766E" /> {/* Arrowhead */}
          <text x="110" y="164" fill="white" fontSize="24" fontWeight="bold" transform="rotate(315, 110, 164)" textAnchor="middle">INSIGHTS</text>
        </svg>
      </motion.div>

      {/* Center Logo (Static) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/3 h-1/3 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 z-10">
           <img src="/assets/Defftlogolock.png" alt="Defft Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
