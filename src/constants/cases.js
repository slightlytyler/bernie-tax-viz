export const customKey = 'what-about-me';

export const cases = [
  'low-income',
  'median-income',
  'high-income',
  'super-high-income',
  customKey,
];

export const casesById = {
  'low-income': {
    id: 'low-income',
    label: 'Low Income',
    taxableIncome: 17000,
    filingStatus: 'single',
    dependents: 3,
    anticipatedYearlyHealthSpending: 2800,
    capitalGains: 0,
    estateBenefits: 0,
  },

  'median-income': {
    id: 'median-income',
    label: 'Median Income',
    taxableIncome: 51000,
    filingStatus: 'married',
    dependents: 2,
    anticipatedYearlyHealthSpending: 4800,
    capitalGains: 1500,
    estateBenefits: 50000,
  },

  'high-income': {
    id: 'high-income',
    label: 'High Income',
    taxableIncome: 145000,
    filingStatus: 'single',
    dependents: 0,
    anticipatedYearlyHealthSpending: 6000,
    capitalGains: 6000,
    estateBenefits: 250000,
  },

  'super-high-income': {
    id: 'super-high-income',
    label: 'Super High Income',
    taxableIncome: 484000,
    filingStatus: 'married',
    dependents: 2,
    anticipatedYearlyHealthSpending: 20000,
    capitalGains: 25000,
    estateBenefits: 2500000,
  },

  [customKey]: {
    custom: true,
    id: customKey,
    label: 'What about me?',
    taxableIncome: undefined,
    filingStatus: undefined,
    dependents: undefined,
    anticipatedYearlyHealthSpending: undefined,
    capitalGains: undefined,
    estateBenefits: undefined,
  },
};
