import { motion } from "framer-motion";

export default function Flywheel({ className = "" }: { className?: string }) {
  // Geometry Constants
  const center = 250;
  const innerRadius = 140; // Reduced inner radius for thicker arrows
  const outerRadius = 250; // Outer edge of colored arrow
  const textRadius = 195;  // Centered in the arrow thickness (140 + 250) / 2
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

          {/* Segments - Rotated to align with quadrants */}
          
          {/* Top-Left (Outcomes) - Orange */}
          {/* Center at 315 (-45). Start = -45 - 38 = -83 */}
          <path d={createArrowPath(-83)} fill="url(#orangeGradient)" />

          {/* Top-Right (Insights) - Teal */}
          {/* Center at 45. Start = 45 - 38 = 7 */}
          <path d={createArrowPath(7)} fill="url(#tealGradient)" />

          {/* Bottom-Right (Better Data) - Orange */}
          {/* Center at 135. Start = 135 - 38 = 97 */}
          <path d={createArrowPath(97)} fill="url(#orangeGradient)" />

          {/* Bottom-Left (AI Learning) - Teal */}
          {/* Center at 225. Start = 225 - 38 = 187 */}
          <path d={createArrowPath(187)} fill="url(#tealGradient)" />

          {/* Text Labels */}
          <text fill="white" fontSize="24" fontWeight="800" letterSpacing="2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="12.5%" textAnchor="middle" >
              OUTCOMES
            </textPath>
          </text>

          <text fill="white" fontSize="24" fontWeight="800" letterSpacing="2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="37.5%" textAnchor="middle" >
              INSIGHTS
            </textPath>
          </text>

          <text fill="white" fontSize="24" fontWeight="800" letterSpacing="2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="62.5%" textAnchor="middle" >
              BETTER DATA
            </textPath>
          </text>

          <text fill="white" fontSize="24" fontWeight="800" letterSpacing="2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
            <textPath href="#textPathCircle" startOffset="87.5%" textAnchor="middle" >
              AI LEARNING
            </textPath>
          </text>

        </svg>
      </motion.div>

      {/* Center Logo Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[38%] h-[38%] bg-white rounded-full shadow-[0_0_60px_rgba(0,0,0,0.6)] flex items-center justify-center p-6 z-10 border-4 border-black/10">
           <img src="/assets/logo-orange.png" alt="Defft Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
