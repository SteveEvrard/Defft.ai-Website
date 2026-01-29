import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";
import { Lightbulb, Compass, Heart, Zap, Users } from "lucide-react";
import { Link } from "wouter";
import DataOverlay from "@/components/DataOverlay";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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

export default function Category() {
  return (
    <Layout>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/category-human-leader.png" 
            alt="Collaborative Category" 
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
              The <span className="text-gradient">Category</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-200 font-medium">
              System of Recommendation™: From Hunter to Sniper.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4">

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img src="/assets/category-wedge.png" alt="The Wedge Visualization" className="w-full h-auto" />
        </motion.div>

        <div className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Visceral Shift: From Chaos to Clarity</h2>
            <div className="max-w-5xl mx-auto">
              <BeforeAfterSlider 
                beforeImage="/assets/category-chaos.png"
                afterImage="/assets/category-clarity.png"
                beforeLabel="The Guesswork Tax (Chaos)"
                afterLabel="System of Recommendation (Clarity)"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-6">The Problem: The Guesswork Tax</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8">
                Most distributors run on ERP (what happened) and CRM (who we know). But neither tells a rep <strong>what to sell right now</strong>.
              </motion.p>
              <motion.ul variants={fadeIn} className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 text-destructive">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Tribal Knowledge is a Liability</h4>
                    <p className="text-sm text-muted-foreground">When your best rep leaves, their brain leaves. That's a single point of failure.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 text-destructive">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">The Search Tax</h4>
                    <p className="text-sm text-muted-foreground">Reps spend 40% of their week searching for specs, pricing, and vendors. That's 16 hours of lost revenue.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 text-destructive">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Reactive Selling</h4>
                    <p className="text-sm text-muted-foreground">You wait for the phone to ring. You quote what they asked for, not what they need.</p>
                  </div>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-6">The Solution: Compounding Intelligence</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8">
                A System of Recommendation doesn't just store data; it <strong>thinks</strong>. It generates the <strong>60-Second Interaction</strong>.
              </motion.p>
              <motion.ul variants={fadeIn} className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Institutional Intelligence</h4>
                    <p className="text-sm text-muted-foreground">The system gets smarter with every interaction, forever.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Instant Answers</h4>
                    <p className="text-sm text-muted-foreground">From 4 hours of searching to 60 seconds of knowing.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Proactive Selling</h4>
                    <p className="text-sm text-muted-foreground">Pitch before they ask. Capture margin before it's bid out.</p>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-12">The From-To Shift</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-muted-foreground border-b border-white/10 pb-4">Old Way (ERP + CRM)</h3>
              <p className="text-muted-foreground">Reactive: Wait for the RFQ</p>
              <p className="text-muted-foreground">Tribal Knowledge: In the rep's head</p>
              <p className="text-muted-foreground">Manual Search: 4 hours/day</p>
              <p className="text-muted-foreground">Flat Data: Rows and columns</p>
            </div>
            <div className="space-y-4 relative">
              <h3 className="text-xl font-bold text-primary border-b border-primary/30 pb-4">New Way (System of Recommendation)</h3>
              <p className="text-white font-medium">Proactive: Pitch before they ask</p>
              <p className="text-white font-medium">Institutional Intelligence: In the system</p>
              <p className="text-white font-medium">Instant Answers: 60 seconds</p>
              <p className="text-white font-medium">Knowledge Graph: Relationships and context</p>
              
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                 <img 
                  src="/assets/category-new-standard.png" 
                  alt="The New Standard" 
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">The New Standard</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Link href="/roadmap">
              <Button size="lg" className="text-xl px-10 py-8 bg-white text-background hover:bg-white/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                See the Roadmap <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* POV (Combined) */}
        <section id="pov" className="mt-24 scroll-mt-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Culmination</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              The <span className="text-gradient">POV</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What’s true in life should be true in distribution: move from opinion-based to intelligence-based.
            </p>
          </div>

          {/* Point of View Statement */}
          <section className="mb-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl -z-10" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto shadow-2xl"
            >
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-8">The Point of View</h3>
              <p className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
                &quot;The future of distribution isn&apos;t about better logistics. It&apos;s about{" "}
                <span className="text-gradient">better decisions</span>.&quot;
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                In a world drowning in data, the ultimate advantage is turning noise into a clear, actionable
                recommendation. We are building the intelligence layer that makes every rep 10x more valuable.
              </p>
            </motion.div>
          </section>

          {/* Mantra & Mission */}
          <section className="mb-24 grid md:grid-cols-2 gap-12">
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
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">The Mantra</h3>
              <p className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                &quot;Recommendation, <br />
                Not Guesswork.&quot;
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
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">The Mission</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To transform packaging distribution from an opinion-based industry to an{" "}
                <strong className="text-white">intelligence-based</strong> one, equipping every rep with machine-backed
                reasoning.
              </p>
            </motion.div>
          </section>

          {/* Core Values */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Core Values</h3>
              <p className="text-lg text-muted-foreground">
                The principles that guide the machine — and the humans building it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Intelligence First",
                  desc: "We don’t guess. We build from the data up. Every decision is backed by the Knowledge Graph."
                },
                {
                  icon: Heart,
                  title: "Radical Empathy",
                  desc: "We design for the human on the other side. We restore humanity stripped away by 'SKUs' and 'Targets'."
                },
                {
                  icon: Zap,
                  title: "Compounding Value",
                  desc: "Static systems die. Ours learns. Every interaction makes the system smarter for everyone."
                },
                {
                  icon: Users,
                  title: "Symbiosis",
                  desc: "Humans + Machines > Humans alone. We don’t replace reps; we give them superpowers."
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
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision Statement */}
          <section className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-white/10 p-0 text-center group">
            <div className="absolute inset-0">
              <img
                src="/assets/pov-future-vision.png"
                alt="Future Vision"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto p-12 md:p-24">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">The Vision</h3>
              <p className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-12">
                &quot;A world where institutional knowledge never evaporates, where the machine handles the complexity,
                and humans are free to build relationships.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-10 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] rounded-full"
                  onClick={() => (window.location.href = "mailto:hello@defft.ai")}
                >
                  Join the Revolution
                </Button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
}
