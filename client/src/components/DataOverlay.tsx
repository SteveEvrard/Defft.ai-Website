import { motion } from "framer-motion";

export default function DataOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Data Points */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-full text-xs font-mono text-primary shadow-[0_0_15px_rgba(255,85,0,0.3)]"
      >
        <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2 animate-pulse" />
        ROI: +32%
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: [0.3, 0.7, 0.3], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] right-[20%] bg-background/80 backdrop-blur-sm border border-accent/30 px-3 py-1 rounded-full text-xs font-mono text-accent shadow-[0_0_15px_rgba(0,255,255,0.3)]"
      >
        <span className="w-2 h-2 rounded-full bg-accent inline-block mr-2 animate-pulse" />
        Insight: Match Found
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[10%] bg-background/80 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-white inline-block mr-2 animate-pulse" />
        Confidence: 98%
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M100,100 Q400,50 600,300 T900,100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
