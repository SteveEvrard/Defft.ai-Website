import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Database, Target, RefreshCw, Network, Box, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Engine() {
  return (
    <Layout>
      <div className="pt-24 pb-12 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold mb-6">
            The <span className="text-gradient">Engine</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
            The core mechanics that power the System of Recommendation.
          </motion.p>
        </motion.div>

        {/* Origin Story: Knowledge Graph */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <div className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center bg-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/hero-fluid-intelligence.png')] opacity-30 bg-cover animate-spin-slow-reverse" />
                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                  <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">The Brain of Packaging™</h3>
                  <p className="text-sm text-muted-foreground">Compounding Intelligence</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 md:order-2"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Origin: The Knowledge Graph
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6">
                A system cannot give better recommendations unless it understands packaging at a deeper level than any human.
                So Defft built the industry’s first <strong>Packaging Knowledge Graph</strong>.
              </motion.p>
              <motion.ul variants={fadeIn} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "All packaging materials", "Machine constraints", "SKU & spec relationships", 
                  "Vendor realities", "Lead-time modeling", "Sustainability scores",
                  "Cartonization logic", "Engineering tolerances"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeIn} className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-primary font-medium italic">
                  "The more Defft is used, the more irreplicable it becomes. That’s the moat."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Wedge */}
        <section className="mb-32 bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">The Wedge: Atomic Unit of Value</h2>
            <p className="text-lg text-muted-foreground">
              Category kings start narrow. For Defft, the atomic wedge is <strong>The Rep Recommendation</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-background/50 rounded-xl border border-white/10 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The 30-Second Interaction</h3>
              <p className="text-muted-foreground mb-6">
                A single moment where the system suggests the best box, material, vendor, price, and sustainability trade-off.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Box className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Best Box</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Layers className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Best Material</span>
                </div>
                {/* Add more items as needed */}
              </div>
            </div>

            <div className="bg-gradient-to-b from-destructive/10 to-background rounded-xl border border-destructive/20 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Replaces Hours Of:</h3>
              <ul className="space-y-3">
                {["Searching", "Guessing", "Calling Vendors", "Opening PDFs", "Reverse Engineering"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 text-xs text-destructive font-bold">X</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Flywheel */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">The Defft <span className="text-gradient">Flywheel</span></h2>
              <p className="text-xl text-muted-foreground">
                This is what creates the moat. The system gets smarter for every rep, forever.
              </p>
              
              <div className="space-y-0 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent opacity-30" />
                {[
                  { step: "1. Capture", desc: "Meeting prep, customer signals, product context" },
                  { step: "2. Recommend", desc: "MI suggests actions, options, products, angles" },
                  { step: "3. Act", desc: "Rep sends, shares, proposes, calls" },
                  { step: "4. Learn", desc: "Defft captures behavior, outcomes, decisions" },
                  { step: "5. Compound", desc: "The system gets smarter for every rep, forever" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative group">
                    <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center shrink-0 z-10 group-hover:border-primary group-hover:text-primary transition-colors">
                      <RefreshCw className={cn("w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors", i === 4 && "animate-spin-slow")} />
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.step}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <img 
                src="/assets/flywheel-momentum.png" 
                alt="Flywheel" 
                className="w-full h-auto object-contain opacity-80 mix-blend-screen animate-pulse-slow"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
