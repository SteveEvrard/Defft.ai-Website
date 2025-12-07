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
      <div className="pt-24 pb-12 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold mb-6">
            The <span className="text-gradient">Team</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
            The Insider & The Iconoclast.
          </motion.p>
        </motion.div>

        {/* Miodrag Minic Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-12 items-center mb-32"
        >
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img src="/assets/team-mio.png" alt="Miodrag Minic - The Insider" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold text-white">Miodrag "Mio" Minic</h2>
                <p className="text-primary font-bold uppercase tracking-wider">The Insider</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-4xl font-bold text-white">The Soul of the System</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mio isn't just a packaging expert; he's a pioneer who has lived the problem. A native of Nis, Serbia, Mio made history as the <strong>first Serbian to captain the basketball team at Morehouse College</strong>, an HBCU where he learned the power of legacy, leadership, and defying expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              He spent years inside the packaging industry (Pregis), witnessing firsthand the "Guesswork Tax" that plagues every distributor. He saw brilliant reps burning out, margins leaking, and sustainability goals failing—not for lack of effort, but for lack of intelligence. He knew the industry needed a brain.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-primary" />
                <span>Morehouse Captain</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full">
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
          className="flex flex-col md:flex-row-reverse gap-12 items-center mb-32"
        >
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img src="/assets/team-eric.png" alt="Eric Spitz - The Iconoclast" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold text-white">Eric Spitz</h2>
                <p className="text-accent font-bold uppercase tracking-wider">The Iconoclast</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-4xl font-bold text-white">The Architect of the Future</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eric doesn't fix industries; he reimagines them. A serial entrepreneur and self-described "Iconoclast," Eric has spent his career smashing idols in media (Orange County Register), sports tech, and cannabis (C4 Distro, Rootz.ai).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known for his <strong>patents, writings, and pioneering spirit</strong>, Eric saw packaging not as a boring logistics problem, but as a massive, unorganized data set waiting to be unlocked. Where others saw boxes, Eric saw a "System of Recommendation." He brought the outsider's ruthlessness to an insider's problem.
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Prolific Writer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-accent" />
                <span>Patent Holder</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full">
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
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <img src="/assets/team-origin.png" alt="Origin Story Background" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10">
            <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Origin Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              They didn't meet at a tech mixer. They met across a negotiation table, trying to talk their way out of a "certain situation." It was high stakes. It was tense. And in that crucible, they realized they were the only two people in the room who saw the world the same way.
            </p>
            <p className="text-xl text-white font-medium max-w-3xl mx-auto">
              They realized that by combining Mio's deep empathy for the rep with Eric's ruthless architectural vision, they could build something that didn't just improve the industry, but redefined it.
            </p>
            <div className="mt-12">
              <p className="text-2xl font-heading font-bold text-gradient">Defft.ai is their handshake.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Join the Revolution</h2>
          <Link href="/manifesto">
            <Button size="lg" className="text-xl px-10 py-8 bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Read the Manifesto <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
