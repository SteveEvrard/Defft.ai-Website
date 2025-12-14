import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Flag, Trophy, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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

export default function Strategy() {
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
            The <span className="text-gradient">Strategy</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
            The roadmap to becoming the Category King.
          </motion.p>
        </motion.div>

        {/* The From-To Shift */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">The From–To Shift</h2>
            <p className="text-lg text-muted-foreground">
              This is not "better CRM." This is an entirely new operating model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card/50 border border-white/5 rounded-xl p-8">
              <h3 className="text-xl font-bold text-muted-foreground mb-6 uppercase tracking-widest">Old Game</h3>
              <ul className="space-y-6">
                {[
                  "Reps guess",
                  "Intelligence lives in individual humans",
                  "Price-based selling",
                  "Reps decide what to quote",
                  "Inconsistent customer experience",
                  "Manual research",
                  "Tribal knowledge"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted-foreground opacity-70">
                    <div className="w-2 h-2 rounded-full bg-destructive/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-0 relative overflow-hidden group">
              <div className="absolute inset-0">
                <img 
                  src="/assets/strategy-winning.png" 
                  alt="Winning Together" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/10" />
              </div>
              <div className="relative z-10 p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                  New Game <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">System of Recommendation™</span>
                </h3>
              </div>
              <ul className="space-y-6 relative z-10 px-8 pb-8">
                {[
                  "Reps get machine-backed reasoning",
                  "Intelligence lives in a compounding knowledge graph",
                  "Expertise-based selling",
                  "Defft.ai recommends the optimal package",
                  "Precision, personalization, empathy",
                  "Instant recommendation",
                  "Institutional knowledge"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Lightning Strike Plan */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">The Lightning Strike Plan</h2>
            <p className="text-lg text-muted-foreground">
              Category kings don’t wait for adoption. They orchestrate demand.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />
            
            {[
              { phase: "Phase 1", title: "Publish", desc: "The 2025 Packaging Intelligence Gap Report™", icon: Flag },
              { phase: "Phase 2", title: "Demonstrate", desc: "The 60-Second Recommendation Test", icon: Zap },
              { phase: "Phase 3", title: "Evangelize", desc: "Roadshow to Kelly Spicers, Veritiv, Uline", icon: Trophy },
              { phase: "Phase 4", title: "Partner", desc: "Academic partnership with MIT & Cal Poly", icon: Users },
              { phase: "Phase 5", title: "Name the First", desc: "Announce the first 'System of Recommendation–Powered Distributor'", icon: CheckCircle2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{item.phase}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_-5px_var(--primary)]">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Defft Wins */}
        <section className="mb-24 bg-white/5 rounded-3xl p-8 md:p-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Defft.ai Wins</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vertical Depth", desc: "Only packaging. Not 'all distribution'." },
              { title: "MI First", desc: "We don't bolt AI onto ERP. We build from intelligence upward." },
              { title: "Rep-First", desc: "The system helps reps — it's not surveillance for managers." },
              { title: "Symbiosis", desc: "HITL → MITL is our philosophy and our moat." },
              { title: "Knowledge Graph", desc: "Competitors can't replicate a compounding intelligence asset." },
              { title: "Wedge Discipline", desc: "One atomic outcome → full category domination." }
            ].map((item, i) => (
              <Card key={i} className="bg-background/50 border-white/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Chapter Section */}
        <section className="py-12 border-t border-white/5 mt-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Next Chapter</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              The <span className="text-gradient">POV</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              The culmination: Our Mantra, Mission, Core Values, and Vision.
            </p>
            <Link href="/pov">
              <Button size="lg" className="text-xl px-10 py-8 bg-white text-background hover:bg-white/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                Read the Culmination <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
