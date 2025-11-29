import { motion } from "framer-motion";

export default function Flywheel({ className = "" }: { className?: string }) {
  // Brand Colors from index.css
  // Primary (Orange): oklch(0.65 0.22 35.0) -> #FF7E33 (approx)
  // Accent (Teal): oklch(0.75 0.15 190.0) -> #2DD4BF (approx)
  
  const orangeGradientStart = "#FF9F66"; // Lighter orange
  const orangeGradientEnd = "#FF5500";   // Darker orange
  const tealGradientStart = "#5EEAD4";   // Lighter teal
  const tealGradientEnd = "#0F766E";     // Darker teal

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Rotating Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={orangeGradientStart} />
              <stop offset="100%" stopColor={orangeGradientEnd} />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={tealGradientStart} />
              <stop offset="100%" stopColor={tealGradientEnd} />
            </linearGradient>
            
            {/* Paths for Text to Follow */}
            <path id="textPathTop" d="M140,250 A110,110 0 0,1 360,250" />
            <path id="textPathRight" d="M250,140 A110,110 0 0,1 250,360" />
            <path id="textPathBottom" d="M360,250 A110,110 0 0,1 140,250" />
            <path id="textPathLeft" d="M250,360 A110,110 0 0,1 250,140" />
          </defs>

          {/* 
            Segments:
            Top-Left: Better Data (Orange)
            Top-Right: AI Learning (Teal)
            Bottom-Right: Outcomes (Orange)
            Bottom-Left: Insights (Teal)
          */}

          {/* Top-Left Segment (Better Data) - Orange */}
          <g transform="rotate(-45, 250, 250)">
             <path
              d="M250 50 A200 200 0 0 1 423 150 L380 175 A150 150 0 0 0 250 100 Z"
              fill="url(#orangeGradient)"
            />
            <path d="M423 150 L450 135 L435 180 Z" fill={orangeGradientEnd} />
          </g>
          
          {/* Top-Right Segment (AI Learning) - Teal */}
          <g transform="rotate(45, 250, 250)">
            <path
              d="M250 50 A200 200 0 0 1 423 150 L380 175 A150 150 0 0 0 250 100 Z"
              fill="url(#tealGradient)"
            />
            <path d="M423 150 L450 135 L435 180 Z" fill={tealGradientEnd} />
          </g>

          {/* Bottom-Right Segment (Outcomes) - Orange */}
          <g transform="rotate(135, 250, 250)">
            <path
              d="M250 50 A200 200 0 0 1 423 150 L380 175 A150 150 0 0 0 250 100 Z"
              fill="url(#orangeGradient)"
            />
            <path d="M423 150 L450 135 L435 180 Z" fill={orangeGradientEnd} />
          </g>

          {/* Bottom-Left Segment (Insights) - Teal */}
          <g transform="rotate(225, 250, 250)">
            <path
              d="M250 50 A200 200 0 0 1 423 150 L380 175 A150 150 0 0 0 250 100 Z"
              fill="url(#tealGradient)"
            />
            <path d="M423 150 L450 135 L435 180 Z" fill={tealGradientEnd} />
          </g>

          {/* Curved Text Labels */}
          {/* Note: We rotate the text elements to match the segments */}
          
          {/* Better Data (Top Left) */}
          <text fill="white" fontSize="22" fontWeight="bold" letterSpacing="2" textAnchor="middle">
             <textPath href="#textPathTop" startOffset="25%">
               BETTER DATA
             </textPath>
          </text>

           {/* AI Learning (Top Right) */}
           <text fill="white" fontSize="22" fontWeight="bold" letterSpacing="2" textAnchor="middle" transform="rotate(90, 250, 250)">
             <textPath href="#textPathTop" startOffset="25%">
               AI LEARNING
             </textPath>
          </text>

          {/* Outcomes (Bottom Right) */}
          <text fill="white" fontSize="22" fontWeight="bold" letterSpacing="2" textAnchor="middle" transform="rotate(180, 250, 250)">
             <textPath href="#textPathTop" startOffset="25%">
               OUTCOMES
             </textPath>
          </text>

          {/* Insights (Bottom Left) */}
          <text fill="white" fontSize="22" fontWeight="bold" letterSpacing="2" textAnchor="middle" transform="rotate(270, 250, 250)">
             <textPath href="#textPathTop" startOffset="25%">
               INSIGHTS
             </textPath>
          </text>

        </svg>
      </motion.div>

      {/* Center Logo (Static) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[35%] h-[35%] bg-white rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-6 z-10">
           <img src="/assets/Defftlogolock.png" alt="Defft Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
