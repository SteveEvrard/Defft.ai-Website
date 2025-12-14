import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";
import { Link } from "wouter";
import DataOverlay from "@/components/DataOverlay";

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

        <div className="grid md:grid-cols-2 gap-16 mb-32">
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
      </div>
    </Layout>
  );
}
