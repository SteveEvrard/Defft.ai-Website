import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Milestone } from "lucide-react";
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

export default function Roadmap() {
  const phases = [
    {
      id: 1,
      title: "Discover",
      time: "Days 1-30",
      outcome: "Fast onboarding, first value in days.",
      wedge: "The 60-Second Interaction",
      metric: "Time to First Value < 3 Days"
    },
    {
      id: 2,
      title: "Adopt",
      time: "Months 2-6",
      outcome: "Weekly usage, habit formation.",
      wedge: "Post-Meeting Analyzer",
      metric: "75%+ Weekly Active Users"
    },
    {
      id: 3,
      title: "Expand",
      time: "Months 7-12",
      outcome: "Multi-team, quantified ROI.",
      wedge: "Operations & Management Dashboards",
      metric: "30%+ Revenue Growth per Rep"
    },
    {
      id: 4,
      title: "Automate",
      time: "Months 13-24",
      outcome: "Predictive intelligence, partnership.",
      wedge: "Morning Intelligence Briefings",
      metric: "85%+ Predictive Accuracy"
    },
    {
      id: 5,
      title: "Platform",
      time: "Month 24+",
      outcome: "Ecosystem, category leadership.",
      wedge: "API & Marketplace",
      metric: "90%+ Platform Dependency"
    }
  ];

  return (
    <Layout>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-human-future.png" 
            alt="Future Roadmap" 
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
              The <span className="text-gradient">Roadmap</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-200 font-medium">
              From "Trying it out" to "Can't live without it."
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
          className="mb-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[url('/assets/roadmap-human-journey.png')] opacity-40 bg-cover mix-blend-overlay" />
          <img src="/assets/roadmap-future.png" alt="Future Roadmap Visualization" className="w-full h-auto relative z-10" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent opacity-30" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 md:space-y-24"
          >
            {phases.map((phase, index) => (
              <motion.div 
                key={phase.id} 
                variants={fadeIn}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,85,0,0.4)]">
                  <span className="text-xl font-bold text-white">{phase.id}</span>
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 w-full md:w-1/2 p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{phase.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-muted-foreground uppercase tracking-wider">{phase.time}</span>
                  </div>
                  <p className="text-lg text-white mb-6">{phase.outcome}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Milestone className="w-5 h-5 text-accent" />
                      <span className="text-sm text-muted-foreground">The Wedge: <strong className="text-white">{phase.wedge}</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-[10px] font-bold text-primary">%</div>
                      <span className="text-sm text-muted-foreground">Success Metric: <strong className="text-white">{phase.metric}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
          <Link href="/team">
            <Button size="lg" className="text-xl px-10 py-8 bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Meet the Team <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
