import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
          <MoveHorizontal className="w-6 h-6" />
        </div>
      </div>
      
      {/* Instructions Overlay (Fades out on interaction) */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium pointer-events-none border border-white/10"
      >
        Drag to compare
      </motion.div>
    </div>
  );
}
