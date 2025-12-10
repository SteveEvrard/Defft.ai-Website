import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Tampa() {
  return (
    <Layout>
      <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary/20">
            Welcome Lindenmeyr Munroe
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
            Fashionably Late to the <span className="text-gradient">Future</span>.
          </h1>
          <p className="text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
            We might have been late to New Jersey. But we're here to make sure you're first to the System of Recommendation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/5 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">The "Guesswork Tax" Calculator</h2>
            <p className="text-muted-foreground mb-8">
              Every day your reps spend guessing what to sell is a day you lose revenue. Let's run the numbers for Lindenmeyr.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Number of Reps</label>
                <input type="number" placeholder="e.g. 500" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Avg. Annual Revenue per Rep</label>
                <input type="number" placeholder="e.g. $2,000,000" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <Button className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90">
                Calculate Lost Revenue
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The 60-Second Interaction</h3>
                <p className="text-muted-foreground">Stop wasting hours on prep. Give your reps the answer before they even ask the question.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Compound Intelligence</h3>
                <p className="text-muted-foreground">Unlike tribal knowledge, the System gets smarter with every interaction. It's an asset that appreciates.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Institutional Memory</h3>
                <p className="text-muted-foreground">When a rep retires, their knowledge shouldn't retire with them. Capture it. Scale it. Own it.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">The Choice: Lab vs. Scale</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20 text-left max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-muted-foreground mb-4">Kelly Spicers was the Lab.</h3>
              <p className="text-lg text-muted-foreground">
                We needed a controlled environment to prove the hypothesis. We broke things. We fixed them. We proved the "60-Second Interaction" works. The experiment is over.
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4">Lindenmeyr is the Scale.</h3>
              <p className="text-lg text-white">
                You don't test a Ferrari engine in a semi-truck. Now that the engine is built, we need a chassis big enough to handle the horsepower. That's you.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-black border border-white/20 rounded-3xl p-10 max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">The Proposal</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We are closing our $1M SAFE round by year-end. We have interest from financial investors, but we want "Smart Capital" first.
            </p>
            <div className="flex flex-col gap-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black">1</div>
                <p className="text-white text-lg"><strong>$1M Development Deal:</strong> Pre-pay for exclusivity and influence.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black">2</div>
                <p className="text-white text-lg"><strong>First Right of Refusal:</strong> Lock in the "Enterprise Edition" for the East Coast.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black">3</div>
                <p className="text-white text-lg"><strong>Executive Sidecar:</strong> Personal allocation for the leaders in this room.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8">Ready for Dessert?</h2>
          <Link href="/roadmap">
            <Button size="lg" className="text-xl px-10 py-8 bg-white text-black hover:bg-gray-200 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              See the Roadmap <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
