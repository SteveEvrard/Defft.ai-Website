import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  DEFAULT_FUNNEL_INPUTS_DEFFT,
  DEFAULT_FUNNEL_INPUTS_TRADITIONAL,
  compareFunnelScenarios,
  type FunnelInputs,
} from "@/lib/roi/funnelCalculator";

export default function FunnelModel() {
  const [step, setStep] = useState<1 | 2>(1);
  const [tradInputs, setTradInputs] = useState<FunnelInputs>({ ...DEFAULT_FUNNEL_INPUTS_TRADITIONAL, horizonMonths: 60 });
  const [defftInputs, setDefftInputs] = useState<FunnelInputs>({ ...DEFAULT_FUNNEL_INPUTS_DEFFT, horizonMonths: 60 });

  const results = compareFunnelScenarios(tradInputs, defftInputs);
  const chartData = results.traditional.monthlyData.map((tradItem, index) => {
    const defftItem = results.defft.monthlyData[index];
    return {
      month: tradItem.month,
      cumulativeGP_Trad: tradItem.cumulativeGP,
      cumulativeGP_Defft: defftItem ? defftItem.cumulativeGP : 0,
    };
  });

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val: number) => `${(val * 100).toFixed(1)}%`;

  const activeInputs = step === 1 ? tradInputs : defftInputs;
  const setActiveInputs = step === 1 ? setTradInputs : setDefftInputs;

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4 py-6">
        <div
          className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full border text-sm font-medium backdrop-blur-md ${
            step === 1 ? "bg-secondary/30 border-white/10 text-secondary-foreground" : "bg-primary/20 border-primary/30 text-primary-foreground"
          }`}
        >
          <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${step === 1 ? "bg-secondary" : "bg-primary"}`} />
          Step {step} of 2: {step === 1 ? "Current Funnel Efficiency" : "Defft.ai Impact Comparison"}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {step === 1 ? <span className="text-primary">Analyze Your Sales Funnel</span> : <>The <span className="text-primary">Defft.ai</span> Advantage</>}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {step === 1
            ? "Input your current outreach and conversion metrics to see the compounding impact on Gross Profit."
            : "See how improving meeting and close rates with Defft.ai accelerates revenue growth."}
        </p>
      </div>

      {/* Context Cards - Step 2 */}
      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Land & Expand",
              icon: Target,
              current: "Generic outreach, quantity-focused, uninformed messages lead to low response rates.",
              impact:
                "Solution-led outreach + autonomous cadence. Higher relevance = more meetings booked.",
            },
            {
              title: "Meeting Prep",
              icon: Users,
              current: "<20% prepared, lacking foresight and industry insights. Customers disengage.",
              impact: "Guided prep with deep industry & customer insights. Better conversations.",
            },
            {
              title: "Post-Meeting",
              icon: TrendingUp,
              current: "2–3 week solution cycle with vendor back-and-forth. Deals often stall or die.",
              impact: "24-hour engineered solutions with data-backed options. Faster decisions & higher close rates.",
            },
          ].map((c) => (
            <Card key={c.title} className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                  <c.icon className="w-5 h-5" />
                  {c.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Current State</p>
                  <p className="text-white/80">{c.current}</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-primary font-medium mb-1">Defft.ai Impact</p>
                  <p className="text-white">{c.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {step === 1 ? <Target className="w-5 h-5 text-secondary" /> : <TrendingUp className="w-5 h-5 text-primary" />}
                {step === 1 ? "Current Metrics" : "Defft.ai Assumptions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Outreach Volume */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Monthly Outreach Volume</label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">{activeInputs.outreachVolume}</span>
                </div>
                <Slider
                  value={[activeInputs.outreachVolume]}
                  min={50}
                  max={1000}
                  step={10}
                  onValueChange={(val) => setActiveInputs({ ...activeInputs, outreachVolume: val[0] })}
                />
              </div>

              {/* Meeting Scheduled Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Meeting Scheduled Rate</label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">
                    {formatPercent(activeInputs.meetingScheduledRate)}
                  </span>
                </div>
                <Slider
                  value={[activeInputs.meetingScheduledRate * 100]}
                  min={1}
                  max={50}
                  step={0.5}
                  onValueChange={(val) => setActiveInputs({ ...activeInputs, meetingScheduledRate: val[0] / 100 })}
                />
              </div>

              {/* Close Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Post-Meeting Close Rate</label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">
                    {formatPercent(activeInputs.postMeetingCloseRate)}
                  </span>
                </div>
                <Slider
                  value={[activeInputs.postMeetingCloseRate * 100]}
                  min={1}
                  max={50}
                  step={0.5}
                  onValueChange={(val) => setActiveInputs({ ...activeInputs, postMeetingCloseRate: val[0] / 100 })}
                />
              </div>

              {/* Average Deal GP */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Avg. Deal GP (Annualized)</label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">
                    {formatCurrency(activeInputs.averageDealGP)}
                  </span>
                </div>
                <Slider
                  value={[activeInputs.averageDealGP]}
                  min={1000}
                  max={50000}
                  step={500}
                  onValueChange={(val) => setActiveInputs({ ...activeInputs, averageDealGP: val[0] })}
                />
              </div>

              <div className="pt-2">
                {step === 1 ? (
                  <Button
                    className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,107,0,0.25)]"
                    onClick={() => setStep(2)}
                  >
                    See Defft.ai Impact <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full h-12 text-lg border-white/10 hover:bg-white/5" onClick={() => setStep(1)}>
                    Back to Current Analysis
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-muted-foreground">Total GP (5 Years)</p>
                  <DollarSign className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(step === 1 ? results.traditional.totalGP : results.defft.totalGP)}
                </div>
                {step === 2 && (
                  <p className="text-xs text-primary mt-1 font-medium">+{formatCurrency(results.gpDifference)} vs Traditional</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-muted-foreground">Deals Closed</p>
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {(step === 1 ? results.traditional.totalDeals : results.defft.totalDeals).toFixed(1)}
                </div>
                {step === 2 && (
                  <p className="text-xs text-primary mt-1 font-medium">+{results.dealsDifference.toFixed(1)} vs Traditional</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-muted-foreground">Funnel Efficiency</p>
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {formatPercent(activeInputs.meetingScheduledRate * activeInputs.postMeetingCloseRate)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Overall conversion rate</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/40 border-white/10 backdrop-blur-xl h-[420px] flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white">Cumulative Gross Profit Growth</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="funnelTrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="funnelDefft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    ticks={[12, 24, 36, 48, 60]}
                    tickFormatter={(val) => `Mo ${val}`}
                    label={{
                      value: "Time (Months)",
                      position: "insideBottom",
                      offset: -10,
                      fill: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                    }}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(val) => `$${Math.round(val / 1000)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0a0a14",
                      borderColor: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff" }}
                    formatter={(val: number) => [formatCurrency(val), "Cumulative GP"]}
                    labelFormatter={(label) => `Month ${label}`}
                  />

                  {step === 2 && (
                    <Area
                      type="monotone"
                      dataKey="cumulativeGP_Trad"
                      stroke="var(--chart-2)"
                      strokeOpacity={0.6}
                      fill="url(#funnelTrad)"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      name="Traditional"
                    />
                  )}

                  <Area
                    type="monotone"
                    dataKey={step === 1 ? "cumulativeGP_Trad" : "cumulativeGP_Defft"}
                    stroke={step === 1 ? "var(--chart-2)" : "var(--primary)"}
                    fill={step === 1 ? "url(#funnelTrad)" : "url(#funnelDefft)"}
                    strokeWidth={3}
                    name={step === 1 ? "Traditional" : "Defft.ai"}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

