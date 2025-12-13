import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Zap, Users, Heart, Sparkles, MessageCircle, Activity, ArrowRight } from "lucide-react";
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

export default function Philosophy() {
  return (
    <Layout>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-human-connection.png" 
            alt="Human Connection" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
              The <span className="text-gradient">Rehumanize</span> Layer
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-200 font-medium">
              Every packaging decision affects a real person. Defft.ai restores the human element to distribution.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4">

        {/* The 4Es Framework */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">The 4E Relationship Framework</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The industry describes humans as "targets," "accounts," and "SKUs." This language strips away the human. 
                Defft.ai restores it through measurable, operational empathy.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Heart, 
                  title: "Empathy", 
                  desc: "Understand the customer's motivations, constraints, and anxieties." 
                },
                { 
                  icon: Sparkles, 
                  title: "Experiences", 
                  desc: "Reduce friction. Every quote and recommend builds trust." 
                },
                { 
                  icon: MessageCircle, 
                  title: "Endorsement", 
                  desc: "Earn trust with accurate recommendations. Customers talk." 
                },
                { 
                  icon: Activity, 
                  title: "Energy", 
                  desc: "Create momentum. Who's engaged? Who's fading?" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HITL -> MITL Symbiosis */}
        <section className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 p-8 md:p-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background/50 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                  The Shift
                </span>
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold mb-8">
                HITL <span className="text-muted-foreground">→</span> <span className="text-white">MITL</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-white font-medium mb-6">
                Human-in-the-Loop is not enough. We are building Machine-Intelligence-in-the-Loop.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8">
                Humans are not removed — they are elevated. The machine handles calculations, comparisons, and pattern recognition. 
                The human handles context, empathy, and the final judgment call.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-white">The Machine</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Calculations & Costing</li>
                    <li>• Spec Matching</li>
                    <li>• Pattern Recognition</li>
                    <li>• Performance Simulation</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <h4 className="font-bold text-white">The Human</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Context & Nuance</li>
                    <li>• Empathy & Trust</li>
                    <li>• Value Positioning</li>
                    <li>• Relationship Building</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-[100px] rounded-full opacity-50" />
              <img 
                src="/assets/human-machine-symbiosis.png" 
                alt="Symbiosis" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Next Chapter Section */}
        <section className="py-12 border-t border-white/5 mt-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Next Chapter</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              The <span className="text-gradient">Engine</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Explore the core mechanics: The Knowledge Graph, The Wedge, and The Flywheel.
            </p>
            <Link href="/engine">
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
