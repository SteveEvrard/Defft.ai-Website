import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Users, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
            src="/assets/hero-human-future.png" 
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
                Category Design Document
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-tight text-white">
              System of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Recommendation™</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The MI-powered human-centered OS for packaging distributors.
              <br />
              <span className="text-foreground font-medium">ERP tells you what happened. CRM tells you what you did. Defft.ai tells you what to do next.</span>
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('category')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore the System
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                onClick={() => window.open('/Defft_Category_Design_Report.pdf', '_blank')}
              >
                Download PDF
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. The Villain: Tribal Knowledge */}
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">The Villain: <span className="text-destructive">Tribal Knowledge</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Packaging distribution runs on a fragile, inefficient model: The tribal knowledge of veteran reps = the company brain.
                When they retire or leave, that intelligence evaporates.
              </p>
              <div className="pl-6 border-l-4 border-destructive/50 italic text-xl text-foreground/90">
                "New reps take 18–36 months to become competent. 70% of recommendations are suboptimal."
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is the <strong className="text-white">Phantom Expertise Problem™</strong> — the invisible leakage of intelligence that prevents distributors from scaling.
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="bg-card/50 p-6 rounded-xl border border-border/50 backdrop-blur-sm">
              <img src="/assets/tampa-human-hero.png" alt="Empowered Rep" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Empowered Reps</h3>
              <p className="text-muted-foreground">Armed with intelligence, not just data.</p>
            </div>
            <div className="bg-card/50 p-6 rounded-xl border border-border/50 backdrop-blur-sm">
              <img src="/assets/tampa-human-success.png" alt="Successful Deal" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Trusted Partners</h3>
              <p className="text-muted-foreground">Building relationships that last decades.</p>
            </div>
            <div className="bg-card/50 p-6 rounded-xl border border-border/50 backdrop-blur-sm">
              <img src="/assets/tampa-human-team.png" alt="Winning Team" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Winning Culture</h3>
              <p className="text-muted-foreground">Where talent meets technology.</p>
            </div>
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

            {/* Card 3: Defft.ai */}
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

      {/* Next Chapter Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/10 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Next Chapter</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            The <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Discover how Defft.ai restores the human element to distribution through the 4Es and Symbiosis.
          </p>
          <Link href="/philosophy">
            <Button size="lg" className="text-xl px-10 py-8 bg-white text-background hover:bg-white/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Continue Reading <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
