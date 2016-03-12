export const customKey = 'what-about-me';

export const emptyCase = {
  taxableIncome: 0,
  filingStatus: 'single',
  dependents: 0,
  anticipatedYearlyHealthSpending: 0,
  capitalGains: 0,
  estateBenefits: 0,
};

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
    label: 'low income',
    taxableIncome: 17000,
    filingStatus: 'single',
    dependents: 3,
    anticipatedYearlyHealthSpending: 2800,
    capitalGains: 0,
    estateBenefits: 0,
  },

  'median-income': {
    id: 'median-income',
    label: 'median income',
    taxableIncome: 51000,
    filingStatus: 'married',
    dependents: 2,
    anticipatedYearlyHealthSpending: 4800,
    capitalGains: 1500,
    estateBenefits: 50000,
  },

  'high-income': {
    id: 'high-income',
    label: 'high income',
    taxableIncome: 145000,
    filingStatus: 'single',
    dependents: 0,
    anticipatedYearlyHealthSpending: 6000,
    capitalGains: 6000,
    estateBenefits: 250000,
  },

  'super-high-income': {
    id: 'super-high-income',
    label: 'super high income',
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
