export interface CalculatorInputs {
  hiringOnboardingCost: number;
  repCostPerMonth: number;
  gpMilestones: {
    month12: number;
    month18: number;
    month24: number;
    month36: number;
    month48: number;
    month60: number;
  };
  successRate: number;
  repsCount: number;
  horizonMonths: number;
  commissionRate: number;
  commissionStartMonth: number;
}

export interface MonthlyData {
  month: number;
  activeReps: number;
  monthlyCost: number;
  monthlyGP: number;
  monthlyNet: number;
  cumulativeCost: number;
  cumulativeGP: number;
  cumulativeNet: number;
}

export interface ScenarioResult {
  monthlyData: MonthlyData[];
  totalInvestment: number;
  totalGP: number;
  totalNetProfit: number;
  firstProfitableMonth: number | null;
  paybackPeriod: number | null;
  moic: number;
}

export interface ComparisonResult {
  traditional: ScenarioResult;
  defft: ScenarioResult;
  valueCreated: number;
  netProfitDifference: number;
}

export const DEFAULT_INPUTS_TRADITIONAL: CalculatorInputs = {
  hiringOnboardingCost: -30000,
  repCostPerMonth: -12000,
  gpMilestones: {
    month12: 0,
    month18: 10000,
    month24: 25000,
    month36: 38500,
    month48: 50000,
    month60: 65000,
  },
  successRate: 0.3,
  repsCount: 10,
  horizonMonths: 60,
  commissionRate: 0.3,
  commissionStartMonth: 32,
};

export const DEFAULT_INPUTS_DEFFT: CalculatorInputs = {
  hiringOnboardingCost: -30000,
  repCostPerMonth: -12000,
  gpMilestones: {
    month12: 0,
    month18: 26333,
    month24: 38000,
    month36: 50000,
    month48: 65000,
    month60: 80000,
  },
  successRate: 0.7,
  repsCount: 10,
  horizonMonths: 60,
  commissionRate: 0.3,
  commissionStartMonth: 21,
};

const getMonthlyGP = (month: number, milestones: CalculatorInputs["gpMilestones"]): number => {
  if (month <= 1) return 0;

  if (month <= 12) {
    const slope = milestones.month12 / 11;
    return slope * (month - 1);
  }

  if (month <= 18) {
    const slope = (milestones.month18 - milestones.month12) / 6;
    return milestones.month12 + slope * (month - 12);
  }

  if (month <= 24) {
    const slope = (milestones.month24 - milestones.month18) / 6;
    return milestones.month18 + slope * (month - 18);
  }

  if (month <= 36) {
    const slope = (milestones.month36 - milestones.month24) / 12;
    return milestones.month24 + slope * (month - 24);
  }

  if (month <= 48) {
    const slope = (milestones.month48 - milestones.month36) / 12;
    return milestones.month36 + slope * (month - 36);
  }

  if (month <= 60) {
    const slope = (milestones.month60 - milestones.month48) / 12;
    return milestones.month48 + slope * (month - 48);
  }

  return milestones.month60;
};

export const calculateScenario = (inputs: CalculatorInputs): ScenarioResult => {
  const monthlyData: MonthlyData[] = [];
  let cumulativeCost = 0;
  let cumulativeGP = 0;
  let cumulativeNet = 0;

  let firstProfitableMonth: number | null = null;
  let paybackPeriod: number | null = null;

  for (let month = 1; month <= inputs.horizonMonths; month++) {
    let activeReps = inputs.repsCount;
    const targetSuccessfulReps = inputs.repsCount * inputs.successRate;
    const attritionMonth = inputs.successRate > 0.5 ? 7 : 19;

    if (month >= attritionMonth) {
      activeReps = targetSuccessfulReps;
    }

    let monthlyHiringCost = 0;
    if (month === 1) {
      monthlyHiringCost = inputs.hiringOnboardingCost * inputs.repsCount;
    }

    const gpPerRep = getMonthlyGP(month, inputs.gpMilestones);
    const totalMonthlyGP = gpPerRep * activeReps;

    let monthlyRepCost = 0;
    let commissionCost = 0;

    if (month < inputs.commissionStartMonth) {
      monthlyRepCost = inputs.repCostPerMonth * activeReps;
    } else {
      commissionCost = totalMonthlyGP * inputs.commissionRate;
    }

    const totalFixedCost = monthlyHiringCost + monthlyRepCost;
    const monthlyNet = totalMonthlyGP + totalFixedCost - commissionCost;
    const totalMonthlyExpense = totalFixedCost - commissionCost;

    cumulativeCost += totalMonthlyExpense;
    cumulativeGP += totalMonthlyGP;
    cumulativeNet += monthlyNet;

    if (firstProfitableMonth === null && monthlyNet > 0) {
      firstProfitableMonth = month;
    }

    if (paybackPeriod === null && cumulativeNet > 0) {
      paybackPeriod = month;
    }

    monthlyData.push({
      month,
      activeReps,
      monthlyCost: totalMonthlyExpense,
      monthlyGP: totalMonthlyGP,
      monthlyNet,
      cumulativeCost,
      cumulativeGP,
      cumulativeNet,
    });
  }

  let minCumulativeNet = 0;
  for (const m of monthlyData) {
    if (m.cumulativeNet < minCumulativeNet) minCumulativeNet = m.cumulativeNet;
  }

  const totalInvestment = minCumulativeNet;
  const totalGP = cumulativeGP;
  const totalNetProfit = cumulativeNet;

  const moic =
    Math.abs(totalInvestment) > 0 ? (totalNetProfit + Math.abs(totalInvestment)) / Math.abs(totalInvestment) : 0;

  return {
    monthlyData,
    totalInvestment,
    totalGP,
    totalNetProfit,
    firstProfitableMonth,
    paybackPeriod,
    moic,
  };
};

export const compareScenarios = (inputsTraditional: CalculatorInputs, inputsDefft: CalculatorInputs): ComparisonResult => {
  const traditional = calculateScenario(inputsTraditional);
  const defft = calculateScenario(inputsDefft);

  return {
    traditional,
    defft,
    valueCreated: defft.totalNetProfit - traditional.totalNetProfit,
    netProfitDifference: defft.totalNetProfit - traditional.totalNetProfit,
  };
};

// Alias for convenience
export const calculateROI = compareScenarios;

