//
// Constants
//
export const UPDATE_INPUTS = 'UPDATE_INPUTS';
import { UPDATE_USER_CASE } from 'reducers/userCase';

//
// Selectors
//
import { createSelector } from 'reselect';
import incomeTaxRates from 'constants/incomeTaxRates';
import payrollTaxRates from 'constants/payrollTaxRates';
import estateTaxRates from 'constants/estateTaxRates';

export const inputsSelector = state => state.inputs;

export const taxableIncomeSelector = createSelector(
  inputsSelector,
  inputs => inputs.taxableIncome
);
export const filingStatusSelector = createSelector(
  inputsSelector,
  inputs => inputs.filingStatus
);
export const dependentsSelector = createSelector(
  inputsSelector,
  inputs => inputs.dependents
);
export const capitalGainsSelector = createSelector(
  inputsSelector,
  inputs => inputs.capitalGains
);
export const estateBenefitsSelector = createSelector(
  inputsSelector,
  inputs => inputs.estateBenefits
);
export const anticipatedYearlyHealthSpendingSelector = createSelector(
  inputsSelector,
  inputs => inputs.anticipatedYearlyHealthSpending
);

export const agiSelector = createSelector(
  taxableIncomeSelector,
  capitalGainsSelector,
  filingStatusSelector,
  dependentsSelector,
  (income, capitalGains, filingStatus, dependents) => {
    const exemptions = (filingStatus === 'married' ? 2 : 1) + dependents;
    const agi = (income + capitalGains) - (4000 * exemptions);

    return agi > 0 ? agi : 0;
  }
);

function incomeTaxCalculator(type, agi, filingStatus) {
  const incomeTaxRatesForStatus = incomeTaxRates[filingStatus];
  const incomeTaxBrackets = Array.from(incomeTaxRatesForStatus.keys());
  let totalTax = {
    current: 0,
    sanders: 0,
  };

  for (const bracketCeiling of incomeTaxBrackets) {
    const bracketIndex = incomeTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : incomeTaxBrackets[bracketIndex - 1]
    ;
    let difference;

    if (agi > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = agi - bracketFloor;
    }

    const currentTax =
      difference * (incomeTaxRatesForStatus.get(bracketCeiling).current[type] / 100)
    ;
    const sandersTax =
      difference * (incomeTaxRatesForStatus.get(bracketCeiling).sanders[type] / 100)
    ;

    totalTax = {
      current: totalTax.current + currentTax,
      sanders: totalTax.sanders + sandersTax,
    };

    if (agi <= bracketCeiling) {
      break;
    }
  }


  return totalTax;
}

export const ordinaryIncomeTaxSelector = createSelector(
  taxableIncomeSelector,
  filingStatusSelector,
  agiSelector,
  (income, filingStatus, agi) => incomeTaxCalculator('ordinaryIncome', agi, filingStatus)
);
export const ordinaryIncomeSavingsSelector = createSelector(
  ordinaryIncomeTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const capitalGainsTaxSelector = createSelector(
  capitalGainsSelector,
  filingStatusSelector,
  agiSelector,
  (income, filingStatus, agi) => incomeTaxCalculator('capitalGains', agi, filingStatus)
);
export const capitalGainsSavingsSelector = createSelector(
  capitalGainsTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const payrollTaxSelector = createSelector(
  agiSelector,
  filingStatusSelector,
  (agi, filingStatus) => {
    const payrollTaxRatesForStatus = payrollTaxRates[filingStatus];
    const payrollTaxBrackets = Array.from(payrollTaxRatesForStatus.keys());

    let totalTax = {
      current: 0,
      sanders: 0,
    };

    for (const bracketCeiling of payrollTaxBrackets) {
      const bracketIndex = payrollTaxBrackets.indexOf(bracketCeiling);
      const bracketFloor =
        bracketIndex === 0
        ? 0
        : payrollTaxBrackets[bracketIndex - 1]
      ;
      let difference;

      if (agi > bracketCeiling) {
        difference = bracketCeiling - bracketFloor;
      } else {
        difference = agi - bracketFloor;
      }

      const currentTax =
        difference * (payrollTaxRatesForStatus.get(bracketCeiling).current / 100)
      ;
      const sandersTax =
        difference * (payrollTaxRatesForStatus.get(bracketCeiling).sanders / 100)
      ;

      totalTax = {
        current: totalTax.current + currentTax,
        sanders: totalTax.sanders + sandersTax,
      };

      if (agi <= bracketCeiling) {
        break;
      }
    }

    return totalTax;
  }
);
export const payrollSavingsSelector = createSelector(
  payrollTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const estateTaxSelector = createSelector(
  estateBenefitsSelector,
  filingStatusSelector,
  (income, filingStatus) => {
    const { current: currentTaxRates, sanders: sandersTaxRates } = estateTaxRates;

    const currentTaxRatesForStatus = currentTaxRates[filingStatus];
    const currentTaxBrackets = Array.from(currentTaxRatesForStatus.keys());
    let currentTaxLiability = 0;

    for (const bracketCeiling of currentTaxBrackets) {
      const bracketIndex = currentTaxBrackets.indexOf(bracketCeiling);
      const bracketFloor =
        bracketIndex === 0
        ? 0
        : currentTaxBrackets[bracketIndex - 1]
      ;
      let difference;

      if (income > bracketCeiling) {
        difference = bracketCeiling - bracketFloor;
      } else {
        difference = income - bracketFloor;
      }

      currentTaxLiability = difference * (currentTaxRatesForStatus.get(bracketCeiling) / 100);

      if (income <= bracketCeiling) {
        break;
      }
    }

    const sandersTaxRatesForStatus = sandersTaxRates[filingStatus];
    const sandersTaxBrackets = Array.from(sandersTaxRatesForStatus.keys());
    let sandersTaxLiability = 0;

    for (const bracketCeiling of sandersTaxBrackets) {
      const bracketIndex = sandersTaxBrackets.indexOf(bracketCeiling);
      const bracketFloor =
        bracketIndex === 0
        ? 0
        : sandersTaxBrackets[bracketIndex - 1]
      ;
      let difference;

      if (income > bracketCeiling) {
        difference = bracketCeiling - bracketFloor;
      } else {
        difference = income - bracketFloor;
      }

      sandersTaxLiability = difference * (sandersTaxRatesForStatus.get(bracketCeiling) / 100);

      if (income <= bracketCeiling) {
        break;
      }
    }

    return {
      current: currentTaxLiability,
      sanders: sandersTaxLiability,
    };
  }
);
export const estateSavingsSelector = createSelector(
  estateTaxSelector,
  tax => tax.current - tax.sanders
);

const sandersACATaxRate = 2.2;
export const acaTaxSelector = createSelector(
  agiSelector,
  anticipatedYearlyHealthSpendingSelector,
  (agi, healthSpending) => ({
    current: healthSpending,
    sanders: (sandersACATaxRate / 100) * agi,
  })
);
export const acaSavingsSelector = createSelector(
  acaTaxSelector,
  tax => tax.current - tax.sanders
);

export const totalSavingsSelector = createSelector(
  ordinaryIncomeSavingsSelector,
  capitalGainsSavingsSelector,
  payrollSavingsSelector,
  acaSavingsSelector,
  (ordinaryIncomeSavings, capitalGainsSavings, payrollSavings, acaSavings) =>
    ordinaryIncomeSavings + capitalGainsSavings + payrollSavings + acaSavings
);

//
// Actions
//
export const actions = {
  updateInputs: (key, val) => {
    if (typeof val === 'number' && val < 0) {
      return { type: UPDATE_INPUTS, key, val: 0 };
    }

    return { type: UPDATE_INPUTS, key, val };
  },
};

//
// Reducers
//
import cases from 'constants/cases';

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUTS:
      return Object.assign({}, state, { [action.key]: action.val });

    case UPDATE_USER_CASE:
      return cases[action.userCase];

    default:
      return state;
  }
}
