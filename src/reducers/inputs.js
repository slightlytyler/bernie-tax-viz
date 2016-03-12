//
// Constants
//
export const UPDATE_INPUTS = 'UPDATE_INPUTS';
export const SAVE_INPUTS = 'SAVE_INPUTS';
import { UPDATE_USER_CASE } from 'reducers/userCase';

//
// Selectors
//
import { createSelector } from 'reselect';

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

import {
  adjustedGrossIncome,
  incomeTax,
  capitalGainsTax,
  payrollTax,
  estateTax,
  medicare,
} from 'api/tax-calculations';

export const agiSelector = createSelector(
  taxableIncomeSelector,
  filingStatusSelector,
  dependentsSelector,
  adjustedGrossIncome,
);

export const ordinaryIncomeTaxSelector = createSelector(
  agiSelector,
  filingStatusSelector,
  incomeTax,
);
export const ordinaryIncomeSavingsSelector = createSelector(
  ordinaryIncomeTaxSelector,
  spending => spending.current - spending.sanders
);

export const capitalGainsTaxSelector = createSelector(
  capitalGainsSelector,
  agiSelector,
  filingStatusSelector,
  capitalGainsTax,
);
export const capitalGainsSavingsSelector = createSelector(
  capitalGainsTaxSelector,
  spending => spending.current - spending.sanders
);

export const payrollTaxSelector = createSelector(
  agiSelector,
  filingStatusSelector,
  payrollTax
);
export const payrollSavingsSelector = createSelector(
  payrollTaxSelector,
  spending => spending.current - spending.sanders
);

export const estateTaxSelector = createSelector(
  estateBenefitsSelector,
  filingStatusSelector,
  estateTax,
);
export const estateSavingsSelector = createSelector(
  estateTaxSelector,
  tax => tax.current - tax.sanders
);

export const acaTaxSelector = createSelector(
  agiSelector,
  anticipatedYearlyHealthSpendingSelector,
  medicare,
);
export const acaSavingsSelector = createSelector(
  acaTaxSelector,
  tax => tax.current - tax.sanders
);

export const totalDifferenceSelector = createSelector(
  ordinaryIncomeSavingsSelector,
  capitalGainsSavingsSelector,
  payrollSavingsSelector,
  acaSavingsSelector,
  (...savings) => ({
    spend: Math.abs(savings.filter(s => s < 0).reduce((a, b) => a + b, 0)),
    save: savings.filter(s => s > 0).reduce((a, b) => a + b, 0),
  })
);
export const totalSavingsSelector = createSelector(
  totalDifferenceSelector,
  difference => difference.save - difference.spend
);

export const maxCategoryLabels = (income, capitalGains, payroll, aca) => ([
  { value: income, label: 'income taxes' },
  { value: capitalGains, label: 'capital gains taxes' },
  { value: payroll, label: 'payroll taxes' },
  { value: aca, label: 'healthcare expenses' },
]);

export const maxSaveCategorySelector = createSelector(
  ordinaryIncomeSavingsSelector,
  capitalGainsSavingsSelector,
  payrollSavingsSelector,
  acaSavingsSelector,
  (income, capitalGains, payroll, aca) => {
    const category =
      maxCategoryLabels(income, capitalGains, payroll, aca)
        .reduce((a, b) => a.value > b.value ? a : b)
    ;

    return category.value !== 0 ? category.label : false;
  }
);
export const maxSpendCategorySelector = createSelector(
  ordinaryIncomeSavingsSelector,
  capitalGainsSavingsSelector,
  payrollSavingsSelector,
  acaSavingsSelector,
  (income, capitalGains, payroll, aca) => {
    const category =
      maxCategoryLabels(income, capitalGains, payroll, aca)
        .reduce((a, b) => a.value < b.value ? a : b)
    ;

    return category.value !== 0 ? category.label : false;
  }
);

//
// Actions
//
import { push } from 'react-router-redux';
let inputsTimeout;

export const actions = {
  updateInputs: (key, val) => dispatch => {
    dispatch(push('what-about-me'));

    if (isNaN(Number(val))) {
      dispatch({ type: UPDATE_INPUTS, key, val });
    } else {
      const normalizedVal = Math.round(Number(val));

      if (normalizedVal < 0) {
        dispatch({ type: UPDATE_INPUTS, key, val: 0 });
      } else {
        dispatch({ type: UPDATE_INPUTS, key, val: normalizedVal });
      }
    }

    if (inputsTimeout) {
      clearTimeout(inputsTimeout);
    }

    inputsTimeout = setTimeout(() => dispatch({ type: SAVE_INPUTS }), 1500);
  },
};

//
// Reducers
//
// import { LOCATION_CHANGE } from 'react-router-redux';
import { casesById } from 'constants/cases';

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUTS:
      return Object.assign(
        {},
        state,
        {
          [action.key]: action.val,
          custom: true,
        },
      );

    case UPDATE_USER_CASE:
      return Object.assign({}, casesById[action.userCase]);

    // case LOCATION_CHANGE:
    //   return action.payload.pathname === '/' ? Object.assign({}, casesById[cases[0]]) : state;

    default:
      return state;
  }
}
