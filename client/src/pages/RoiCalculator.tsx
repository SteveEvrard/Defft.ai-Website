import { useState } from "react";
import Layout from "@/components/Layout";
import DataOverlay from "@/components/DataOverlay";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Step1CurrentState from "@/components/roi/Step1CurrentState";
import Step2Comparison from "@/components/roi/Step2Comparison";
import FunnelModel from "@/components/roi/FunnelModel";
import { DEFAULT_INPUTS_DEFFT, DEFAULT_INPUTS_TRADITIONAL, type CalculatorInputs } from "@/lib/roi/calculator";

export default function RoiCalculator() {
  const [activeModel, setActiveModel] = useState<"onboarding" | "funnel">("onboarding");
  const [step, setStep] = useState<1 | 2>(1);
  const [tradInputs, setTradInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS_TRADITIONAL);
  const [defftInputs, setDefftInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS_DEFFT);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/assets/hero-human-insight.png" alt="ROI Calculator" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
          <DataOverlay />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              ROI Calculator
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Prove the <span className="text-gradient">Value</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Model how Defft.ai changes onboarding economics and funnel efficiency—then use the outputs to guide a real buying conversation.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <Tabs value={activeModel} onValueChange={(v) => { setActiveModel(v as any); setStep(1); }} className="w-full max-w-xl">
              <TabsList className="grid w-full grid-cols-2 bg-black/30 border border-white/10 p-1 h-12 rounded-full">
                <TabsTrigger
                  value="onboarding"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Onboarding Model
                </TabsTrigger>
                <TabsTrigger
                  value="funnel"
                  className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all duration-300"
                >
                  Funnel Efficiency
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {activeModel === "onboarding" ? (
            step === 1 ? (
              <Step1CurrentState inputs={tradInputs} setInputs={setTradInputs} onNext={() => setStep(2)} />
            ) : (
              <Step2Comparison
                traditionalInputs={tradInputs}
                defftInputs={defftInputs}
                setDefftInputs={setDefftInputs}
                onBack={() => setStep(1)}
              />
            )
          ) : (
            <FunnelModel />
          )}
        </div>
      </div>
    </Layout>
  );
}

