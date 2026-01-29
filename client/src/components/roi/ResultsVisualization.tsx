import type { ComparisonResult } from "@/lib/roi/calculator";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultsVisualizationProps {
  results: ComparisonResult;
}

export default function ResultsVisualization({ results }: ResultsVisualizationProps) {
  const chartData = results.traditional.monthlyData.map((trad, index) => {
    const defft = results.defft.monthlyData[index];
    return {
      month: trad.month,
      "Traditional Net": trad.cumulativeNet,
      "Defft.ai Net": defft.cumulativeNet,
      "Traditional GP": trad.monthlyGP,
      "Defft.ai GP": defft.monthlyGP,
      "Value Created": defft.cumulativeNet - trad.cumulativeNet,
    };
  });

  const formatCurrency = (value: number) => {
    if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(0)}k`;
    return `$${Math.round(value)}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-background/90 backdrop-blur-xl p-4 rounded-lg border border-white/10 text-sm shadow-2xl">
        <p className="font-bold mb-2 text-white">Month {label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-white/70">{entry.name}:</span>
            <span className="font-mono font-medium text-white">{formatCurrency(entry.value)}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 border-white/10 backdrop-blur-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Total Value Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gradient">{formatCurrency(results.valueCreated)}</div>
            <p className="text-sm text-muted-foreground mt-2">Additional net profit over {results.defft.monthlyData.length} months</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">MOIC</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end gap-6">
            <div>
              <div className="text-3xl font-bold text-white">{results.defft.moic.toFixed(2)}x</div>
              <div className="text-xs text-primary font-bold uppercase">Defft.ai</div>
            </div>
            <div className="mb-1">
              <div className="text-xl font-bold text-white/50">{results.traditional.moic.toFixed(2)}x</div>
              <div className="text-xs text-white/40 font-bold uppercase">Traditional</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Payback Period</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end gap-6">
            <div>
              <div className="text-3xl font-bold text-white">
                {results.defft.paybackPeriod ?? "N/A"} <span className="text-lg font-normal text-white/60">mo</span>
              </div>
              <div className="text-xs text-primary font-bold uppercase">Defft.ai</div>
            </div>
            <div className="mb-1">
              <div className="text-xl font-bold text-white/50">
                {results.traditional.paybackPeriod ?? "N/A"}{" "}
                <span className="text-sm font-normal text-white/40">mo</span>
              </div>
              <div className="text-xs text-white/40 font-bold uppercase">Traditional</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
        <Tabs defaultValue="cumulative" className="w-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <CardTitle className="text-xl font-bold">Financial Projections</CardTitle>
              <TabsList className="bg-black/20 border border-white/10">
                <TabsTrigger
                  value="cumulative"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Cumulative Net
                </TabsTrigger>
                <TabsTrigger value="monthly" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                  Monthly GP
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value="cumulative" className="w-full">
              <div className="h-[420px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="roiColorDefft" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="roiColorTrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis
                      dataKey="month"
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                      tickFormatter={formatCurrency}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" />
                    <Area
                      type="monotone"
                      dataKey="Defft.ai Net"
                      stroke="var(--primary)"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#roiColorDefft)"
                    />
                    <Area
                      type="monotone"
                      dataKey="Traditional Net"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fillOpacity={1}
                      fill="url(#roiColorTrad)"
                    />
                    <Legend wrapperStyle={{ paddingTop: "16px" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="w-full">
              <div className="h-[420px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis
                      dataKey="month"
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                      tickFormatter={formatCurrency}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                    <Bar dataKey="Defft.ai GP" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Traditional GP" fill="#94a3b8" radius={[4, 4, 0, 0]} fillOpacity={0.5} />
                    <Legend wrapperStyle={{ paddingTop: "16px" }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}

