import { motion } from "framer-motion";

export default function Flywheel({ className = "" }: { className?: string }) {
  // Geometry Constants
  const center = 250;
  const innerRadius = 180; // Inner edge of colored arrow
  const outerRadius = 250; // Outer edge of colored arrow
  const textRadius = 145;  // Radius for the text path
  const arrowHeadAngle = 12; // Degrees for the arrow head
  const segmentSpan = 76; // Total degrees per segment (90 - gap)
  const gap = 14; // Gap between segments

  // Helper to calculate point on circle
  const getPoint = (angleInDegrees: number, radius: number) => {
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(angleInRadians),
      y: center + radius * Math.sin(angleInRadians),
    };
  };

  // Generate Arrow Path
  const createArrowPath = (startAngle: number) => {
    const endAngle = startAngle + segmentSpan;
    const arrowBaseAngle = endAngle - arrowHeadAngle;

    // Points
    const p1 = getPoint(startAngle, innerRadius);
    const p2 = getPoint(arrowBaseAngle, innerRadius);
    const p3 = getPoint(arrowBaseAngle, innerRadius - 10); // Inner barb
    const p4 = getPoint(endAngle, (innerRadius + outerRadius) / 2); // Tip
    const p5 = getPoint(arrowBaseAngle, outerRadius + 10); // Outer barb
    const p6 = getPoint(arrowBaseAngle, outerRadius);
    const p7 = getPoint(startAngle, outerRadius);

    // Large arc flag: 0 because span < 180
    const largeArc = 0;
    // Sweep flag: 1 for clockwise
    const sweep = 1;

    return `
      M ${p1.x} ${p1.y}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} ${sweep} ${p2.x} ${p2.y}
      L ${p3.x} ${p3.y}
      L ${p4.x} ${p4.y}
      L ${p5.x} ${p5.y}
      L ${p6.x} ${p6.y}
      A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${p7.x} ${p7.y}
      Z
    `;
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Rotating Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9F66" />
              <stop offset="100%" stopColor="#FF5500" />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5EEAD4" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>
            
            {/* Text Path Circle */}
            <path id="textPathCircle" d={`M ${center}, ${center} m -${textRadius}, 0 a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`} />
          </defs>

          {/* Segments */}
          {/* Top-Left (Outcomes) -> Top-Right (Insights) -> Bottom-Right (Better Data) -> Bottom-Left (AI Learning) */}
          {/* 
             Reference Image Orientation:
             Top Arrow (Orange): Points Right. Starts Top-Left.
             Right Arrow (Teal): Points Down. Starts Top-Right.
             Bottom Arrow (Orange): Points Left. Starts Bottom-Right.
             Left Arrow (Teal): Points Up. Starts Bottom-Left.
          */}

          {/* Top Segment (Orange) - Starts at ~315 degrees (-45) */}
          <path d={createArrowPath(-45 + gap/2)} fill="url(#orangeGradient)" />

          {/* Right Segment (Teal) - Starts at ~45 degrees */}
          <path d={createArrowPath(45 + gap/2)} fill="url(#tealGradient)" />

          {/* Bottom Segment (Orange) - Starts at ~135 degrees */}
          <path d={createArrowPath(135 + gap/2)} fill="url(#orangeGradient)" />

          {/* Left Segment (Teal) - Starts at ~225 degrees */}
          <path d={createArrowPath(225 + gap/2)} fill="url(#tealGradient)" />

          {/* Text Labels */}
          {/* 
            Text needs to be centered in the quadrants.
            Top-Left: OUTCOMES (Angle ~315)
            Top-Right: INSIGHTS (Angle ~45)
            Bottom-Right: BETTER DATA (Angle ~135)
            Bottom-Left: AI LEARNING (Angle ~225)
            
            Path starts at 9 o'clock (270 deg? No, 'a' command logic).
            M (center-r), center -> Leftmost point (9 o'clock).
            0% = 9 o'clock.
            
            9 o'clock = 270 deg (in standard math) or 180 deg?
            SVG coord system: 0 deg is 3 o'clock.
            M 105 250 (left side).
            Arc draws clockwise? 
            If 0% is 9 o'clock:
            Top-Left (315 deg) is 45 deg from 9 o'clock (270). 
            Wait. 9 o'clock is 270. 12 o'clock is 0/360? No.
            Clockwise from 9 o'clock:
            9 -> 12 is 25%
            12 -> 3 is 50%
            3 -> 6 is 75%
            6 -> 9 is 100%
            
            OUTCOMES (Top-Left, ~10:30): Between 9 and 12. ~12.5%
            INSIGHTS (Top-Right, ~1:30): Between 12 and 3. ~37.5%
            BETTER DATA (Bottom-Right, ~4:30): Between 3 and 6. ~62.5%
            AI LEARNING (Bottom-Left, ~7:30): Between 6 and 9. ~87.5%
          */}

          <text fill="white" fontSize="22" fontWeight="800" letterSpacing="4" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="12.5%" textAnchor="middle" >
              OUTCOMES
            </textPath>
          </text>

          <text fill="white" fontSize="22" fontWeight="800" letterSpacing="4" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="37.5%" textAnchor="middle" >
              INSIGHTS
            </textPath>
          </text>

          <text fill="white" fontSize="22" fontWeight="800" letterSpacing="4" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="62.5%" textAnchor="middle" >
              BETTER DATA
            </textPath>
          </text>

          <text fill="white" fontSize="22" fontWeight="800" letterSpacing="4" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="87.5%" textAnchor="middle" >
              AI LEARNING
            </textPath>
          </text>

        </svg>
      </motion.div>

      {/* Center Logo Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[38%] h-[38%] bg-white rounded-full shadow-[0_0_60px_rgba(0,0,0,0.6)] flex items-center justify-center p-6 z-10 border-4 border-black/10">
           <img src="/assets/Defftlogolock.png" alt="Defft Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
