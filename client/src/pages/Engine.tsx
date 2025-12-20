import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Database, Target, RefreshCw, Network, Box, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Flywheel from "@/components/Flywheel";
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

        {/* The 100 Year Old Brain */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
            >
              The <span className="text-gradient">100-Year-Old Brain</span>
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-lg text-muted-foreground"
            >
              The System of Recommendation doesn't just give you data. It gives every new rep the wisdom of a 75-year veteran. Instantly.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Maya: The New Rep */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-background/50"
            >
              <div className="absolute inset-0">
                <img 
                  src="/assets/engine-maya.png" 
                  alt="Maya - The New Rep" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Maya</h3>
                <p className="text-primary font-medium mb-4">The New Rep (18 Months Exp)</p>
                <div className="space-y-3 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/5">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Has Product Knowledge</p>
                      <p className="text-sm text-muted-foreground">Knows specs, pricing, and features cold.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Has Energy</p>
                      <p className="text-sm text-muted-foreground">Hustles, makes calls, logs activity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center text-xs text-destructive font-bold shrink-0">!</div>
                    <div>
                      <p className="text-white font-medium">Missing Context</p>
                      <p className="text-sm text-muted-foreground">"Send me some info."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Walt: The Veteran */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-background/50"
            >
              <div className="absolute inset-0">
                <img 
                  src="/assets/engine-walt.png" 
                  alt="Walt - The Veteran" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Walt</h3>
                <p className="text-primary font-medium mb-4">The Veteran (45 Years Exp)</p>
                <div className="space-y-3 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/5">
                  <div className="flex items-start gap-3">
                    <Network className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Has Pattern Recognition</p>
                      <p className="text-sm text-muted-foreground">"I've seen this exact problem before."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Has Deep Memory</p>
                      <p className="text-sm text-muted-foreground">Remembers lead times, vendor quirks, and history.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent font-bold shrink-0">✓</div>
                    <div>
                      <p className="text-white font-medium">Closes the Deal</p>
                      <p className="text-sm text-muted-foreground">"Let's run the samples."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">The Defft.ai Promise</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10">
              We digitized Walt's brain. The System of Recommendation gives <span className="text-white font-bold">Maya</span> the pattern recognition of <span className="text-white font-bold">Walt</span>.
            </p>
          </div>
        </section>

        {/* The Wedge */}
        <section className="mb-32 bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">The Wedge: Atomic Unit of Value</h2>
            <p className="text-lg text-muted-foreground">
              Category kings start narrow. For Defft.ai, the atomic wedge is <strong>The Rep Recommendation</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-background/50 rounded-xl border border-white/10 p-0 relative overflow-hidden group">
              <div className="absolute inset-0">
                <img 
                  src="/assets/engine-wedge-interaction.png" 
                  alt="The 60-Second Interaction" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">The 60-Second Interaction</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  A single moment where the system suggests the best box, material, vendor, price, and sustainability trade-off.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/5">
                    <Box className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-white">Best Box</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/5">
                    <Layers className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-white">Best Material</span>
                  </div>
                </div>
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">The Defft.ai <span className="text-gradient">Flywheel</span></h2>
              <p className="text-xl text-muted-foreground">
                This is what creates the moat. The system gets smarter for every rep, forever.
              </p>
              
              <div className="space-y-0 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent opacity-30" />
                {[
                  { step: "1. Capture", desc: "Meeting prep, customer signals, product context" },
                  { step: "2. Recommend", desc: "MI suggests actions, options, products, angles" },
                  { step: "3. Act", desc: "Rep sends, shares, proposes, calls" },
                  { step: "4. Learn", desc: "Defft.ai captures behavior, outcomes, decisions" },
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

            <div className="relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px] rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
                <img 
                  src="/assets/engine-flywheel-team.png" 
                  alt="Collaborative Flywheel" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flywheel className="w-[400px] h-[400px] animate-spin-slow opacity-80 mix-blend-screen" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Chapter Section */}
        <section className="py-12 border-t border-white/5 mt-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Next Chapter</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              The <span className="text-gradient">Manifesto</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              A declaration of war on the "Guesswork Tax."
            </p>
            <Link href="/manifesto">
              <Button size="lg" className="text-xl px-10 py-8 bg-white text-background hover:bg-white/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                Continue Reading <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
