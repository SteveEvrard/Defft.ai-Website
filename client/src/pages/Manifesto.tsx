import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export default function Manifesto() {
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
            The <span className="text-gradient">Manifesto</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
            A declaration of war on the "Guesswork Tax."
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img src="/assets/manifesto-hero.png" alt="System of Recommendation Visualization" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-12 text-lg md:text-xl leading-relaxed text-muted-foreground"
        >
          <motion.p variants={fadeIn}>
            We believe packaging distribution is broken. Not because the people are broken, but because the system they are forced to use is broken.
          </motion.p>
          <motion.p variants={fadeIn}>
            We believe the future of this industry lies not in warehouses, trucks, or catalogs, but in <strong className="text-white">intelligence</strong>.
          </motion.p>
          <motion.p variants={fadeIn}>
            We believe the scoreboard must evolve. We reject the idea that "more calls" equals "more sales." We reject the <strong className="text-destructive">"Guesswork Tax"</strong> that drains millions from the bottom line.
          </motion.p>
          <motion.div variants={fadeIn} className="p-8 bg-white/5 border-l-4 border-primary rounded-r-xl">
            <h3 className="text-2xl font-bold text-white mb-4">We commit to a new truth:</h3>
            <p className="text-3xl font-heading font-bold text-gradient">The System of Recommendation.</p>
          </motion.div>
          <motion.p variants={fadeIn}>
            We refuse to settle for software that just records what happened. We demand software that tells you <strong className="text-white">what to do next</strong>.
          </motion.p>
          <motion.p variants={fadeIn}>
            We believe that when you combine human creativity with machine intelligence, you don't just get efficiency. You get <strong className="text-accent">superpowers</strong>.
          </motion.p>
          <motion.p variants={fadeIn}>
            This is our call to arms. To stop guessing. To stop searching. To start knowing.
          </motion.p>
          
          <motion.div variants={fadeIn} className="pt-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Defft.ai is the System of Recommendation.</h2>
            <Link href="/category">
              <Button size="lg" className="text-xl px-10 py-8 bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                Understand the Category <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
