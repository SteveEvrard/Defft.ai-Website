import { motion } from "framer-motion";
import TampaLayout from "@/components/TampaLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Lock, TrendingUp, Users, Zap } from "lucide-react";

export default function TampaConfidential() {
  return (
    <TampaLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/lindenmeyr-future.png" 
            alt="The Future of Distribution" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>

        <div className="container relative z-10 px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-mono uppercase tracking-wider">Confidential Strategy Brief</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              From the Lab <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                To The Empire.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              We proved the hypothesis at Kelly Spicers. <br />
              Now we build the future at Lindenmeyr.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8 h-14">
                Review The Proposal <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Narrative: Lab vs. Scale */}
      <section className="py-24 bg-black">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why We Started in the West
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  Kelly Spicers was the perfect laboratory. Agile, hungry, and willing to experiment. 
                  We used them to test the core hypothesis: <strong className="text-white">Can AI turn tribal knowledge into compounding intelligence?</strong>
                </p>
                <p>
                  The answer was yes. The "60-Second Interaction" works. The data flywheel spins.
                </p>
                <p>
                  But a lab is not a factory. To scale this technology to its full potential—to turn it into the 
                  industry standard—we need the biggest cog in the wheel. We need Lindenmeyr.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 blur-3xl rounded-full" />
              <Card className="relative bg-zinc-900 border-zinc-800">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-zinc-800 text-gray-400">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">The Lab (Kelly Spicers)</h3>
                        <p className="text-gray-400">Proved the technology works. Validated the "System of Recommendation."</p>
                      </div>
                    </div>
                    <Separator className="bg-zinc-800" />
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">The Scale (Lindenmeyr)</h3>
                        <p className="text-gray-400">Deploys the technology at scale. Defines the category. Owns the future.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Deal */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/5">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Partnership Proposal</h2>
            <p className="text-xl text-gray-400">
              We are closing our $1M SAFE round by year-end. We are offering Lindenmeyr the strategic allocation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-primary text-xl">01. Development Deal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  $1M licensing and development agreement to accelerate the roadmap specifically for Lindenmeyr's workflow.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">✓ Custom Integration</li>
                  <li className="flex items-center gap-2">✓ Priority Feature Access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-primary text-xl">02. First Right</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  First Right of Refusal on future strategic rounds. Ensure your equity position is protected as we scale.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">✓ Anti-Dilution Protection</li>
                  <li className="flex items-center gap-2">✓ Board Observer Seat</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-primary text-xl">03. Executive Sidecar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Personal allocation for key executives. We want the people driving the success to share in the upside.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">✓ Direct Cap Table Access</li>
                  <li className="flex items-center gap-2">✓ "Family & Friends" Terms</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white">
              Download Term Sheet Summary
            </Button>
          </div>
        </div>
      </section>
    </TampaLayout>
  );
}
