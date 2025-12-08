import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Award, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "wouter";

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

export default function Team() {
  return (
    <Layout>
      <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-heading font-bold mb-8 tracking-tight">
            The <span className="text-gradient">Team</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-2xl text-muted-foreground font-light tracking-wide">
            The Insider & The Iconoclast.
          </motion.p>
        </motion.div>

        {/* Miodrag Minic Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-40"
        >
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5]">
              <img src="/assets/team-mio.png" alt="Miodrag Minic - The Insider" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h2 className="text-4xl font-bold text-white mb-2">Miodrag "Mio" Minic</h2>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">The Insider</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-5xl font-bold text-white leading-tight">The Soul of the System</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                Mio isn't just a packaging expert; he's a pioneer who has lived the problem. A native of Nis, Serbia, Mio made history as the <strong className="text-white font-medium">first Serbian to captain the basketball team at Morehouse College</strong>, an HBCU where he learned the power of legacy, leadership, and defying expectations.
              </p>
              <p>
                He spent years inside the packaging industry (Pregis), witnessing firsthand the "Guesswork Tax" that plagues every distributor. He saw brilliant reps burning out, margins leaking, and sustainability goals failing—not for lack of effort, but for lack of intelligence. He knew the industry needed a brain.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 text-sm text-white bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
                <Award className="w-4 h-4 text-primary" />
                <span>Morehouse Captain</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>Packaging Expert</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Eric Spitz Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center mb-40"
        >
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5]">
              <img src="/assets/team-eric.png" alt="Eric Spitz - The Iconoclast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h2 className="text-4xl font-bold text-white mb-2">Eric Spitz</h2>
                <p className="text-accent font-bold uppercase tracking-widest text-sm">The Iconoclast</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-5xl font-bold text-white leading-tight">The Architect of the Future</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                Eric doesn't fix industries; he reimagines them. A serial entrepreneur and self-described "Iconoclast," Eric has spent his career smashing idols in media (Orange County Register), sports tech, and cannabis (C4 Distro, Rootz.ai).
              </p>
              <p>
                Known for his <strong className="text-white font-medium">patents, writings, and pioneering spirit</strong>, Eric saw packaging not as a boring logistics problem, but as a massive, unorganized data set waiting to be unlocked. Where others saw boxes, Eric saw a "System of Recommendation." He brought the outsider's ruthlessness to an insider's problem.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 text-sm text-white bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Prolific Writer</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
                <Award className="w-4 h-4 text-accent" />
                <span>Patent Holder</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
                <Lightbulb className="w-4 h-4 text-accent" />
                <span>Serial Entrepreneur</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Origin Story Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] p-10 md:p-20 text-center max-w-6xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
            <img src="/assets/team-origin.png" alt="Origin Story Background" className="w-full h-full object-cover blur-sm scale-110" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-primary mx-auto mb-10 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">The Origin Story</h2>
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-light">
              <p className="text-muted-foreground">
                They didn't meet at a tech mixer. They met across a negotiation table, trying to talk their way out of a "certain situation." It was high stakes. It was tense. And in that crucible, they realized they were the only two people in the room who saw the world the same way.
              </p>
              <p className="text-white font-normal">
                They realized that by combining Mio's deep empathy for the rep with Eric's ruthless architectural vision, they could build something that didn't just improve the industry, but redefined it.
              </p>
            </div>
            <div className="mt-16 pt-16 border-t border-white/10">
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">Defft.ai is their handshake.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-10">Join the Revolution</h2>
          <Link href="/manifesto">
            <Button size="lg" className="text-xl px-12 py-8 bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-[0_0_40px_-10px_rgba(255,85,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,85,0,0.7)] hover:scale-105 transition-all duration-300">
              Read the Manifesto <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
