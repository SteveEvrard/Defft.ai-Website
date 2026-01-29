import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Zap, Users, Heart, Sparkles, MessageCircle, Activity, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import DataOverlay from "@/components/DataOverlay";
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
          <DataOverlay />
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

        {/* Manifesto (Seed) */}
        <section id="manifesto" className="mb-32 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Seed</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                The <span className="text-gradient">Manifesto</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                A declaration of war on the &quot;Guesswork Tax&quot; — and the origin of our philosophy.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="/assets/manifesto-hero.png"
                alt="System of Recommendation Visualization"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mb-12 bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-[400px] md:h-auto">
                  <video
                    src="/assets/manifesto-rep-interview.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 md:hidden" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Meet Sarah</h3>
                      <p className="text-sm text-muted-foreground">Senior Account Executive</p>
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-200 italic mb-6">
                    &quot;Before Defft, I spent 4 hours a day just looking for answers. I felt like a clerk, not a
                    consultant. Now? I walk into every meeting knowing exactly what they need before they ask. It&apos;s
                    not just faster—it&apos;s empowering.&quot;
                  </blockquote>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-bold">
                      The Pain: Guesswork Tax
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                      The Gain: Trusted Advisor
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground"
            >
              <p>
                We believe packaging distribution is broken. Not because the people are broken, but because the system
                they are forced to use is broken.
              </p>
              <p>
                We believe the future of this industry lies not in warehouses, trucks, or catalogs, but in{" "}
                <strong className="text-white">intelligence</strong>.
              </p>
              <p>
                We believe the scoreboard must evolve. We reject the idea that &quot;more calls&quot; equals &quot;more
                sales.&quot; We reject the <strong className="text-destructive">Guesswork Tax</strong> that drains
                millions from the bottom line.
              </p>
              <div className="p-8 bg-white/5 border-l-4 border-primary rounded-r-xl">
                <h3 className="text-2xl font-bold text-white mb-3">We commit to a new truth:</h3>
                <p className="text-3xl font-heading font-bold text-gradient">The System of Recommendation.</p>
              </div>
              <p>
                We refuse to settle for software that just records what happened. We demand software that tells you{" "}
                <strong className="text-white">what to do next</strong>.
              </p>
              <p>
                We believe that when you combine human creativity with machine intelligence, you don&apos;t just get
                efficiency. You get <strong className="text-accent">superpowers</strong>.
              </p>
              <p>This is our call to arms. To stop guessing. To stop searching. To start knowing.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 text-center">
              <Link href="/category">
                <Button
                  size="lg"
                  className="text-xl px-10 py-8 bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform"
                >
                  Understand the Category <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

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
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/assets/philosophy-empathy.png" 
                  alt="Empathy in Action" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
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

            <div className="space-y-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-[100px] rounded-full opacity-50" />
                <img 
                  src="/assets/philosophy-empowerment.png" 
                  alt="Empowered by Intelligence" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <img 
                  src="/assets/philosophy-creativity.png" 
                  alt="Creative Collaboration" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>
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
