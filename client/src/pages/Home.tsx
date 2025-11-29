import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, Users, BarChart3, Layers, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants
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

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-fluid-intelligence.png" 
            alt="Fluid Intelligence Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-block">
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                Category Design Document v2.0
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-tight text-white">
              System of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Recommendation™</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The MI-powered human-centered OS for packaging distributors.
              <br />
              <span className="text-foreground font-medium">ERP tells you what happened. CRM tells you what you did. Defft tells you what to do next.</span>
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:scale-105">
                Explore the System
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Download PDF
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. The Blind Spot */}
      <section id="blind-spot" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">The World Has a <span className="text-destructive">Blind Spot</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Packaging distribution runs on tribal knowledge, inconsistent processes, and human memory. 
                Reps sell what they remember. Customers buy what a rep recalls. Intelligence lives in notebooks, trunks, and inboxes — and disappears when a rep leaves.
              </p>
              <div className="pl-6 border-l-4 border-destructive/50 italic text-xl text-foreground/90">
                "Most organizations are drowning in data, but starving for understanding."
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Packaging distributors know less: Not why the customer buys. Not how the rep thinks. Not why opportunities are won, lost, or ignored.
                <br /><br />
                <strong className="text-white">This is the Phantom Knowledge Problem.</strong>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-destructive/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <img 
                src="/assets/blind-spot-illumination.png" 
                alt="The Blind Spot" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Category */}
      <section id="category" className="py-24 bg-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Third Major Category</h2>
            <p className="text-xl text-muted-foreground">
              A System of Recommendation is the missing link in the distribution software stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: ERP */}
            <Card className="bg-card border-white/5 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Layers className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white">1. System of Record (ERP)</h3>
                <p className="text-muted-foreground">Stores transactions and documents.</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm font-mono text-muted-foreground">➡️ Tells you what happened</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: CRM */}
            <Card className="bg-card border-white/5 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Users className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white">2. System of Engagement (CRM)</h3>
                <p className="text-muted-foreground">Stores activities and pipeline.</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm font-mono text-muted-foreground">➡️ Tells you what you did</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Defft */}
            <Card className="bg-gradient-to-b from-card to-primary/5 border-primary/30 shadow-[0_0_30px_-10px_var(--primary)] relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">3. System of Recommendation™</h3>
                <p className="text-muted-foreground">Understands human behavior, product fit, customer context, and machine intelligence.</p>
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm font-mono text-primary font-bold">➡️ Tells you what to do next</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Human-Machine Symbiosis */}
      <section id="symbiosis" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="/assets/human-machine-symbiosis.png" 
                alt="Human Machine Symbiosis" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-heading text-2xl font-bold">"A human-in-the-loop is not a flaw — it is the feature."</p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 md:order-2 space-y-8"
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold text-white">The Human–Machine <span className="text-gradient">Symbiosis</span></motion.h2>
              
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">The MI Job</h4>
                    <p className="text-muted-foreground">Reduce touches, compound intelligence, ensure no smart action is forgotten.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">The Human Job</h4>
                    <p className="text-muted-foreground">Bring empathy, understand nuance, build trust, make the final judgment call.</p>
                  </div>
                </div>
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg text-muted-foreground border-l-2 border-white/10 pl-4">
                Traditional CRMs try to replace the rep. <strong className="text-white">Defft.ai tries to augment them.</strong>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The 4Es */}
      <section id="rehumanize" className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Rehumanize Perspective</h2>
            <p className="text-xl text-muted-foreground">
              Everything Defft does is grounded in the 4Es model of human relationships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Empathy", desc: "See the business through the customer's eyes. The buyer's constraints, motivations, and anxieties." },
              { title: "Experiences", desc: "Every quote, every recommend, every email becomes a compounding moment where trust is built." },
              { title: "Endorsement", desc: "Customers talk. Reps talk. Defft learns what influences decisions — socially, professionally, economically." },
              { title: "Energy", desc: "Momentum inside a relationship: Who's engaged? Who's fading? Who's open to new products?" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-white/10 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Flywheel */}
      <section id="flywheel" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/flywheel-momentum.png" 
            alt="Flywheel Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">The Defft <span className="text-gradient">Flywheel</span></h2>
              <p className="text-xl text-muted-foreground">
                This is what creates the moat. The system gets smarter for every rep, forever.
              </p>
              
              <div className="space-y-0 relative">
                {/* Connecting Line */}
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
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative animate-spin-slow-reverse">
                <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                <div className="w-2/3 h-2/3 rounded-full border border-primary/30 flex items-center justify-center relative animate-spin-slow">
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">MOAT</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Compounding<br/>Intelligence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/10 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            The System of Recommendation replaces guesswork with <span className="text-gradient">guidance</span>.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join the Packaging Intelligence Summit and see the future of distribution.
          </p>
          <Button size="lg" className="text-xl px-10 py-8 bg-white text-background hover:bg-white/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
            Get the Playbook <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
