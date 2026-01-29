export interface FunnelInputs {
  outreachVolume: number;
  meetingScheduledRate: number;
  postMeetingCloseRate: number;
  averageDealGP: number;
  horizonMonths: number;
}

export interface FunnelMonthlyData {
  month: number;
  outreaches: number;
  meetings: number;
  dealsClosed: number;
  monthlyGP: number;
  cumulativeGP: number;
}

export interface FunnelScenarioResult {
  monthlyData: FunnelMonthlyData[];
  totalGP: number;
  totalDeals: number;
}

export interface FunnelComparisonResult {
  traditional: FunnelScenarioResult;
  defft: FunnelScenarioResult;
  gpDifference: number;
  dealsDifference: number;
}

export const DEFAULT_FUNNEL_INPUTS_TRADITIONAL: FunnelInputs = {
  outreachVolume: 100,
  meetingScheduledRate: 0.1,
  postMeetingCloseRate: 0.1,
  averageDealGP: 5000,
  horizonMonths: 60,
};

export const DEFAULT_FUNNEL_INPUTS_DEFFT: FunnelInputs = {
  outreachVolume: 100,
  meetingScheduledRate: 0.15,
  postMeetingCloseRate: 0.15,
  averageDealGP: 5000,
  horizonMonths: 60,
};

export const calculateFunnelScenario = (inputs: FunnelInputs): FunnelScenarioResult => {
  const monthlyData: FunnelMonthlyData[] = [];
  let cumulativeGP = 0;
  let totalDeals = 0;

  for (let month = 1; month <= inputs.horizonMonths; month++) {
    const outreaches = inputs.outreachVolume;
    const meetings = outreaches * inputs.meetingScheduledRate;
    const dealsClosed = meetings * inputs.postMeetingCloseRate;
    const monthlyGP = dealsClosed * inputs.averageDealGP;

    cumulativeGP += monthlyGP;
    totalDeals += dealsClosed;

    monthlyData.push({
      month,
      outreaches,
      meetings,
      dealsClosed,
      monthlyGP,
      cumulativeGP,
    });
  }

  return {
    monthlyData,
    totalGP: cumulativeGP,
    totalDeals,
  };
};

export const compareFunnelScenarios = (inputsTraditional: FunnelInputs, inputsDefft: FunnelInputs): FunnelComparisonResult => {
  const traditional = calculateFunnelScenario(inputsTraditional);
  const defft = calculateFunnelScenario(inputsDefft);

  return {
    traditional,
    defft,
    gpDifference: defft.totalGP - traditional.totalGP,
    dealsDifference: defft.totalDeals - traditional.totalDeals,
  };
};

