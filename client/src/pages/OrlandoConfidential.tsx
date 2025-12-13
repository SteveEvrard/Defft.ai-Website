import { motion, useScroll, useTransform } from "framer-motion";
import OrlandoLayout from "@/components/OrlandoLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, ShieldCheck, Users, Rocket } from "lucide-react";
import { useRef } from "react";

export default function OrlandoConfidential() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <OrlandoLayout>
      {/* Hero Section with Warehouse Human Element */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/tampa-human-hero.png" 
            alt="Warehouse Operations" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-6 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-500/10 border border-cyan-400/50 text-cyan-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Zap className="w-5 h-5 animate-pulse text-fuchsia-500" />
              <span className="text-sm font-mono uppercase tracking-widest font-bold">Confidential Strategy Brief</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white drop-shadow-[0_0_25px_rgba(192,38,211,0.6)]">
              THE LIGHTNING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-white to-cyan-400 animate-gradient-x">
                STRIKE.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              We proved the hypothesis in the Lab. <br />
              <span className="font-bold text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Now we build the Empire with the Kings.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xl px-10 h-16 rounded-full shadow-[0_0_30px_rgba(192,38,211,0.5)] transition-all hover:scale-105 border border-fuchsia-400/30">
                Unlock The Proposal <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Narrative: Lab vs. Scale with Parallax */}
      <section ref={targetRef} className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        
        <div className="container px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div style={{ opacity, scale }}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
                From The Lab <br />
                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">To The Scale.</span>
              </h2>
              <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Kelly Spicers was the Lab.</strong> We used them to test the hypothesis: Can AI turn tribal knowledge into compounding intelligence? The answer was a resounding YES.
                </p>
                <p>
                  But a lab is not a factory. To scale this technology to its full potential—to turn it into the industry standard—we need the biggest cog in the wheel.
                </p>
                <p className="text-2xl font-bold text-white border-l-4 border-fuchsia-500 pl-6">
                  We need Lindenmeyr.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
              <img 
                src="/assets/tampa-human-team.png" 
                alt="The Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-[0_0_20px_rgba(192,38,211,0.2)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">The Human Element</h3>
                    <p className="text-cyan-400 text-sm">Empowered by Intelligence</p>
                  </div>
                  <Users className="text-fuchsia-500 w-8 h-8 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Deal: High Impact Cards */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-[url('/assets/tampa-human-success.png')] bg-cover bg-center opacity-20 fixed-bg mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">The Strategic Alliance</h2>
            <p className="text-2xl text-gray-400">
              We are closing our $1M SAFE round by year-end. <br />
              <span className="text-fuchsia-500 font-bold drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">This is your First Right of Refusal.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Development Deal",
                icon: <Zap className="w-10 h-10 text-fuchsia-500" />,
                desc: "$1M licensing agreement to accelerate the roadmap specifically for Lindenmeyr's workflow.",
                features: ["Custom Integration", "Priority Feature Access"]
              },
              {
                title: "First Right",
                icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
                desc: "First Right of Refusal on future strategic rounds. Protect your equity position as we scale.",
                features: ["Anti-Dilution Protection", "Board Observer Seat"]
              },
              {
                title: "Executive Sidecar",
                icon: <Users className="w-10 h-10 text-purple-500" />,
                desc: "Personal allocation for key executives. We want the people driving success to share the upside.",
                features: ["Direct Cap Table Access", "Family & Friends Terms"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-black/80 backdrop-blur-xl border-zinc-800 hover:border-fuchsia-500/50 transition-all duration-300 h-full group overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardHeader>
                    <div className="mb-4 p-4 bg-zinc-900/50 rounded-full w-fit group-hover:bg-white/10 transition-colors border border-white/5">
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-fuchsia-400 transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                    <ul className="space-y-3">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 text-lg px-12 h-14 rounded-full transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Download Confidential Term Sheet
            </Button>
          </div>
        </div>
      </section>
    </OrlandoLayout>
  );
}
