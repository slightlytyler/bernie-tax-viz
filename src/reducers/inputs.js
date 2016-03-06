// Constants
const UPDATE_INPUTS = 'UPDATE_INPUTS';

// Selectors
import { createSelector } from 'reselect';

export const inputsSelector = state => state.input;
export const taxableIncomeSelector = createSelector(
  inputsSelector,
  inputs => inputs.taxableIncome
);
export const filingStateSelector = createSelector(
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
