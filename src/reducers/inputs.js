//
// Constants
//
const UPDATE_INPUTS = 'UPDATE_INPUTS';

//
// Selectors
//
import { createSelector } from 'reselect';
import incomeTaxRates from 'constants/incomeTaxRates';
import agiTaxRates from 'constants/agiTaxRates';
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
export const agiSelector = createSelector(
  inputsSelector,
  inputs => inputs.agi
);
export const capitalGainsSelector = createSelector(
  inputsSelector,
  inputs => inputs.capitalGains
);
export const estateBenefitsSelector = createSelector(
  inputsSelector,
  inputs => inputs.estateBenefits
);
export const monthlyInsurancePremiumSelector = createSelector(
  inputsSelector,
  inputs => inputs.monthlyInsurancePremium
);
export const insuranceDeductibleSelector = createSelector(
  inputsSelector,
  inputs => inputs.insuranceDeductible
);
export const anticipatedYearlyHealthSpendingSelector = createSelector(
  inputsSelector,
  inputs => inputs.anticipatedYearlyHealthSpending
);

function incomeTaxCalculator(type, income, filingStatus, agi) {
  const incomeTaxRatesForStatus = incomeTaxRates[filingStatus];
  const incomeTaxBrackets = Array.from(incomeTaxRatesForStatus.keys());
  const agiTaxRatesForStatus = agiTaxRates[filingStatus];
  const agiTaxBrackets = Array.from(agiTaxRatesForStatus.keys());
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

    if (income > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = income - bracketFloor;
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

    if (income <= bracketCeiling) {
      break;
    }
  }

  for (const bracketCeiling of agiTaxBrackets) {
    const bracketIndex = agiTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : agiTaxBrackets[bracketIndex - 1]
    ;
    const adjustedIncome = income * agi;
    let difference;

    if (adjustedIncome > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = adjustedIncome - bracketFloor;
    }

    const currentTax =
      difference * (agiTaxRatesForStatus.get(bracketCeiling).current[type] / 100)
    ;
    const sandersTax =
      difference * (agiTaxRatesForStatus.get(bracketCeiling).sanders[type] / 100)
    ;

    totalTax = {
      current: totalTax.current + currentTax,
      sanders: totalTax.sanders + sandersTax,
    };

    if (income <= bracketCeiling) {
      break;
    }
  }

  return totalTax;
}

export const ordinaryIncomeTaxSelector = createSelector(
  taxableIncomeSelector,
  filingStatusSelector,
  agiSelector,
  (income, filingStatus, agi) => incomeTaxCalculator('ordinaryIncome', income, filingStatus, agi)
);
export const ordinaryIncomeSavingsSelector = createSelector(
  ordinaryIncomeTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const capitalGainsTaxSelector = createSelector(
  capitalGainsSelector,
  filingStatusSelector,
  agiSelector,
  (income, filingStatus, agi) => incomeTaxCalculator('capitalGains', income, filingStatus, agi)
);
export const capitalGainsSavingsSelector = createSelector(
  capitalGainsTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const payrollTaxSelector = createSelector(
  taxableIncomeSelector,
  filingStatusSelector,
  (income, filingStatus) => {
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

      if (income > bracketCeiling) {
        difference = bracketCeiling - bracketFloor;
      } else {
        difference = income - bracketFloor;
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

      if (income <= bracketCeiling) {
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

export const totalSavingsSelector = createSelector(
  ordinaryIncomeSavingsSelector,
  capitalGainsSavingsSelector,
  (ordinaryIncomeSavings, capitalGainsSavings) =>
    ordinaryIncomeSavings + capitalGainsSavings
);

//
// Actions
//
export const actions = {
  updateInputs: (key, val) => ({ type: UPDATE_INPUTS, key, val }),
};

//
// Reducers
//
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUTS:
      return Object.assign({}, state, { [action.key]: action.val });

    default:
      return state;
  }
}
