export default {
  case1: {
    label: 'Low Income',
    taxableIncome: 17000,
    filingStatus: 'single',
    dependents: 3,
    anticipatedYearlyHealthSpending: 1400,
    capitalGains: 0,
    estateBenefits: 0,
  },

  case2: {
    label: 'Median Income',
    taxableIncome: 90000,
    filingStatus: 'married',
    dependents: 2,
    anticipatedYearlyHealthSpending: 5400,
    capitalGains: 1250,
    estateBenefits: 50000,
  },

  case3: {
    label: 'High Income',
    taxableIncome: 120000,
    filingStatus: 'single',
    dependents: 0,
    anticipatedYearlyHealthSpending: 1200,
    capitalGains: 6000,
    estateBenefits: 250000,
  },

  case4: {
    label: 'Super High Income',
    taxableIncome: 300000,
    filingStatus: 'married',
    dependents: 2,
    anticipatedYearlyHealthSpending: 20000,
    capitalGains: 25000,
    estateBenefits: 2500000,
  },

  custom: {
    label: 'Custom',
    taxableIncome: undefined,
    filingStatus: undefined,
    dependents: undefined,
    anticipatedYearlyHealthSpending: undefined,
    capitalGains: undefined,
    estateBenefits: undefined,
  },
};
