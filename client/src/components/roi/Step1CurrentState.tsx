import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, DollarSign, Users, TrendingUp, AlertCircle } from "lucide-react";
import { calculateROI, type CalculatorInputs } from "@/lib/roi/calculator";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface Step1Props {
  inputs: CalculatorInputs;
  setInputs: (inputs: CalculatorInputs) => void;
  onNext: () => void;
}

export default function Step1CurrentState({ inputs, setInputs, onNext }: Step1Props) {
  const results = calculateROI(inputs, inputs);
  const traditionalData = results.traditional.monthlyData.map((d) => ({
    month: d.month,
    activeReps: d.activeReps,
    cumulativeNet: d.cumulativeNet,
  }));

  const totalInvestment = Math.abs(results.traditional.totalInvestment);
  const totalNetProfit = results.traditional.totalNetProfit;

  const handleInputChange = (key: keyof CalculatorInputs, value: any) => {
    setInputs({ ...inputs, [key]: value });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
          Step 1 of 2: Current State
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Analyze Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Current Model</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Set a baseline. Adjust costs and ramp assumptions to see the true economics of traditional onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Current Assumptions
              </CardTitle>
              <div className="mt-2 px-3 py-2 rounded-md bg-primary/10 border border-primary/20 text-xs text-white/80 flex items-start gap-2">
                <Users className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <p>
                  Calculations use a cohort of <strong>{inputs.repsCount} reps</strong> over{" "}
                  <strong>{inputs.horizonMonths} months</strong>.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Hiring Cost */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-white/90">Hiring & Onboarding Cost</Label>
                  <span className="font-mono text-primary">${Math.abs(inputs.hiringOnboardingCost).toLocaleString()}</span>
                </div>
                <Slider
                  value={[Math.abs(inputs.hiringOnboardingCost)]}
                  min={5000}
                  max={100000}
                  step={1000}
                  onValueChange={(vals) => handleInputChange("hiringOnboardingCost", -vals[0])}
                />
                <p className="text-xs text-white/40">Per-rep cost for recruiting, training, and ramp-up.</p>
              </div>

              {/* Monthly Cost */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-white/90">Monthly Rep Cost (Draw/Base)</Label>
                  <span className="font-mono text-primary">${Math.abs(inputs.repCostPerMonth).toLocaleString()}</span>
                </div>
                <Slider
                  value={[Math.abs(inputs.repCostPerMonth)]}
                  min={2000}
                  max={30000}
                  step={500}
                  onValueChange={(vals) => handleInputChange("repCostPerMonth", -vals[0])}
                />
                <p className="text-xs text-white/40">Fixed monthly cost during the ramp period.</p>
              </div>

              {/* Success Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-white/90">Success Rate</Label>
                  <span className="font-mono text-primary">{(inputs.successRate * 100).toFixed(0)}%</span>
                </div>
                <Slider
                  value={[inputs.successRate * 100]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(vals) => handleInputChange("successRate", vals[0] / 100)}
                />
                <p className="text-xs text-white/40">Percent of reps that become fully productive.</p>
              </div>

              {/* GP Milestones */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                  Revenue Ramp (Monthly GP per rep)
                </Label>

                {[12, 18, 24, 36, 48, 60].map((month) => (
                  <div key={month} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <Label className="text-white/90">Month {month}</Label>
                      <span className="font-mono text-primary">
                        $
                        {inputs.gpMilestones[`month${month}` as keyof typeof inputs.gpMilestones].toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[inputs.gpMilestones[`month${month}` as keyof typeof inputs.gpMilestones]]}
                      min={0}
                      max={100000}
                      step={500}
                      onValueChange={(vals) => {
                        const newMilestones = { ...inputs.gpMilestones, [`month${month}`]: vals[0] } as any;
                        handleInputChange("gpMilestones", newMilestones);
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Commission Settings */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold">Comp Structure</Label>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="text-white/90">Commission Rate</Label>
                    <span className="font-mono text-primary">{(inputs.commissionRate * 100).toFixed(0)}%</span>
                  </div>
                  <Slider
                    value={[inputs.commissionRate * 100]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(vals) => handleInputChange("commissionRate", vals[0] / 100)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="text-white/90">Commission Starts (Month)</Label>
                    <span className="font-mono text-primary">{inputs.commissionStartMonth}</span>
                  </div>
                  <Slider
                    value={[inputs.commissionStartMonth]}
                    min={1}
                    max={60}
                    step={1}
                    onValueChange={(vals) => handleInputChange("commissionStartMonth", vals[0])}
                  />
                  <p className="text-xs text-white/40">Month when fixed cost stops and commission begins.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Total Investment</span>
                  <DollarSign className="w-4 h-4 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white">${(totalInvestment / 1_000_000).toFixed(1)}M</div>
                <div className="text-xs text-white/40 mt-1">Max cash draw over the horizon</div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Net Profit</span>
                  <TrendingUp className="w-4 h-4 text-white/40" />
                </div>
                <div className={`text-2xl font-bold ${totalNetProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                  ${(totalNetProfit / 1_000_000).toFixed(1)}M
                </div>
                <div className="text-xs text-white/40 mt-1">Cumulative</div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Active Reps (Yr 5)</span>
                  <Users className="w-4 h-4 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white">{traditionalData[inputs.horizonMonths - 1]?.activeReps ?? 0}</div>
                <div className="text-xs text-white/40 mt-1">Out of {inputs.repsCount} hired</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/40 border-white/10 backdrop-blur-xl h-[420px] flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white">Cumulative Net Profit (Traditional)</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={traditionalData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="roiStep1Net" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    interval={11}
                    tickFormatter={(val) => `M${val}`}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(val) => `$${Math.round(val / 1_000_000)}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff" }}
                    formatter={(val: number) => [`$${val.toLocaleString()}`, ""]}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulativeNet"
                    stroke="#94a3b8"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#roiStep1Net)"
                    name="Net Profit"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-2">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-[0_0_20px_rgba(255,107,0,0.25)] hover:shadow-[0_0_30px_rgba(255,107,0,0.35)] transition-all duration-300 group"
            >
              See Defft.ai Impact
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

