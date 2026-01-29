import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, CheckCircle2, TrendingUp, Settings2, Users } from "lucide-react";
import { compareScenarios, type CalculatorInputs } from "@/lib/roi/calculator";
import ResultsVisualization from "@/components/roi/ResultsVisualization";

interface Step2Props {
  traditionalInputs: CalculatorInputs;
  defftInputs: CalculatorInputs;
  setDefftInputs: (inputs: CalculatorInputs) => void;
  onBack: () => void;
}

export default function Step2Comparison({ traditionalInputs, defftInputs, setDefftInputs, onBack }: Step2Props) {
  const results = compareScenarios(traditionalInputs, defftInputs);

  const handleInputChange = (key: keyof CalculatorInputs, value: any) => {
    setDefftInputs({ ...defftInputs, [key]: value });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-sm font-medium text-primary-foreground backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Step 2 of 2: The Defft.ai Advantage
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Projected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Value Creation</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tune Defft.ai impact variables (success rate and ramp) to model the upside vs. traditional onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Defft Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-primary/5 border-primary/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-primary" />
                Defft.ai Impact Variables
              </CardTitle>
              <div className="mt-2 px-3 py-2 rounded-md bg-primary/10 border border-primary/20 text-xs text-white/80 flex items-start gap-2">
                <Users className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <p>
                  Comparison uses the same cohort size (<strong>{traditionalInputs.repsCount} reps</strong>) and horizon (
                  <strong>{traditionalInputs.horizonMonths} months</strong>).
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Success Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-white/90">Improved Success Rate</Label>
                  <span className="font-mono text-primary">{(defftInputs.successRate * 100).toFixed(0)}%</span>
                </div>
                <Slider
                  value={[defftInputs.successRate * 100]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(vals) => handleInputChange("successRate", vals[0] / 100)}
                />
                <p className="text-xs text-white/50">Traditional baseline: {(traditionalInputs.successRate * 100).toFixed(0)}%</p>
              </div>

              {/* Commission Start */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-white/90">Commission Starts (Month)</Label>
                  <span className="font-mono text-primary">{defftInputs.commissionStartMonth}</span>
                </div>
                <Slider
                  value={[defftInputs.commissionStartMonth]}
                  min={1}
                  max={60}
                  step={1}
                  onValueChange={(vals) => handleInputChange("commissionStartMonth", vals[0])}
                />
                <p className="text-xs text-white/50">Traditional baseline: {traditionalInputs.commissionStartMonth}</p>
              </div>

              {/* GP Milestones */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                  Accelerated Revenue Ramp (Monthly GP per rep)
                </Label>

                {[12, 18, 24, 36, 48, 60].map((month) => (
                  <div key={month} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <Label className="text-white/90">Month {month} GP</Label>
                      <span className="font-mono text-primary">
                        $
                        {defftInputs.gpMilestones[`month${month}` as keyof typeof defftInputs.gpMilestones].toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[defftInputs.gpMilestones[`month${month}` as keyof typeof defftInputs.gpMilestones]]}
                      min={0}
                      max={100000}
                      step={500}
                      onValueChange={(vals) => {
                        const newMilestones = { ...defftInputs.gpMilestones, [`month${month}`]: vals[0] } as any;
                        handleInputChange("gpMilestones", newMilestones);
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">Want the details behind the model?</h3>
              <p className="text-sm text-muted-foreground">
                Use this calculator as a conversation starter—then we can tailor inputs to your actual comp plan, ramp, and unit economics.
              </p>
              <Button variant="outline" onClick={onBack} className="border-white/20 text-white hover:bg-white/10 w-full">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Current State
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-8 space-y-6">
          <ResultsVisualization results={results} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-primary/5 border-primary/20 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Value Created</span>
                  <TrendingUp className="w-4 h-4 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-green-400">+${(results.valueCreated / 1_000_000).toFixed(1)}M</div>
                <div className="text-xs text-white/40 mt-1">Additional net profit</div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Payback Period</span>
                  <TrendingUp className="w-4 h-4 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white">{results.defft.paybackPeriod ?? "N/A"} mo</div>
                <div className="text-xs text-white/40 mt-1">
                  vs {results.traditional.paybackPeriod ?? "N/A"} mo (Traditional)
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">MOIC</span>
                  <TrendingUp className="w-4 h-4 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white">{results.defft.moic.toFixed(2)}x</div>
                <div className="text-xs text-white/40 mt-1">vs {results.traditional.moic.toFixed(2)}x (Traditional)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

