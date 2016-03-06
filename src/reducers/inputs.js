// Constants
const UPDATE_INPUTS = 'UPDATE_INPUTS';

// Selectors
import { createSelector } from 'reselect';
import mapValues from 'lodash.mapvalues';
import incomeTaxRates from 'constants/incomeTaxRates';

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

export const incomeTaxRateSelector = createSelector(
  taxableIncomeSelector,
  agiSelector,
  filingStatusSelector,
  (taxableIncome, agi, filingStatus) => {
    const taxRatesForStatus = incomeTaxRates[filingStatus];
    const adjustedGross = taxableIncome * agi;
    let taxRateBracket;

    for (const key of taxRatesForStatus.keys()) {
      if (key > adjustedGross || key === 'over') {
        taxRateBracket = key;
        break;
      }
    }

    return taxRatesForStatus.get(taxRateBracket);
  }
);

export const ordinaryIncomeTaxSelector = createSelector(
  taxableIncomeSelector,
  incomeTaxRateSelector,
  (taxableIncome, taxRate) =>
    mapValues(taxRate, value => (value.ordinaryIncome / 100) * taxableIncome)
);
export const ordinaryIncomeSavingsSelector = createSelector(
  ordinaryIncomeTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

export const capitalGainsTaxSelector = createSelector(
  capitalGainsSelector,
  incomeTaxRateSelector,
  (capitalGains, taxRate) =>
    mapValues(taxRate, value => (value.capitalGains / 100) * capitalGains)
);
export const capitalGainsSavingsSelector = createSelector(
  capitalGainsTaxSelector,
  incomeTax => incomeTax.current - incomeTax.sanders
);

// Actions
export const actions = {
  updateInputs: (key, val) => ({ type: UPDATE_INPUTS, key, val }),
};

// Reducers
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUTS:
      return Object.assign({}, state, { [action.key]: action.val });

    default:
      return state;
  }
}
