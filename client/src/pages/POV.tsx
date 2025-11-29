import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Heart, Zap, ArrowRight } from "lucide-react";
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

export default function POV() {
  return (
    <Layout>
      <div className="pt-24 pb-12 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={fadeIn} className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
              The Culmination
            </span>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold mb-8">
            Our <span className="text-gradient">Point of View</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What’s true in life should be true in distribution.
            <br />
            <span className="text-white font-medium">We believe packaging must move from opinion-based to intelligence-based.</span>
          </motion.p>
        </motion.div>

        {/* Mantra & Mission */}
        <section className="mb-32 grid md:grid-cols-2 gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-center text-center md:text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">The Mantra</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              "Recommendation, <br />Not Guesswork."
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-center text-center md:text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Compass className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">The Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To transform packaging distribution from an opinion-based industry to an <strong className="text-white">intelligence-based</strong> one, equipping every rep with the machine-backed reasoning they need to be experts.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide the machine and the humans building it.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Lightbulb, 
                title: "Intelligence First", 
                desc: "We don't guess. We build from the data up. Every decision is backed by the Knowledge Graph." 
              },
              { 
                icon: Heart, 
                title: "Radical Empathy", 
                desc: "We design for the human on the other side. We restore the humanity stripped away by 'SKUs' and 'Targets'." 
              },
              { 
                icon: Zap, 
                title: "Compounding Value", 
                desc: "Static systems die. Ours learns. Every interaction makes the system smarter for everyone." 
              },
              { 
                icon: Users, 
                title: "Symbiosis", 
                desc: "Humans + Machines > Humans alone. We don't replace reps; we give them superpowers." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-white/10 p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[url('/assets/hero-fluid-intelligence.png')] opacity-20 bg-cover mix-blend-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">The Vision</h2>
            <p className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-12">
              "A world where institutional knowledge never evaporates, where the machine handles the complexity, and humans are free to build relationships."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] rounded-full"
                onClick={() => window.open('#', '_blank')}
              >
                Join the Revolution
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

import { Users } from "lucide-react";
