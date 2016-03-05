import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Item from './Item';
import TaxableIncomeBlurb from './TaxableIncome';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class TaxBlurbs extends Component {
  static propTypes ={
    capitalGains: PropTypes.number,
    estateBenefits: PropTypes.number,
    monthlyInsurancePremium: PropTypes.number,
    insuranceDeductible: PropTypes.number,
    anticipatedYearlyHealthSpending: PropTypes.number,
    updateInputs: PropTypes.func.isRequired,
  };

  render() {
    const {
      capitalGains,
      estateBenefits,
      monthlyInsurancePremium,
      insuranceDeductible,
      anticipatedYearlyHealthSpending,
      updateInputs,
    } = this.props;

    return (
      <ul styleName="tax-blurbs">
        <TaxableIncomeBlurb />
        <Item
          name="Capital Gains"
          savings={-53}
          inputs={[
            {
              label: 'Capital Gains',
              value: capitalGains,
              handleChange: e => updateInputs('capitalGains', e.target.value),
            },
          ]}
        />
        <Item
          name="Payroll Tax"
          savings={25}
        />
        <Item
          name="Estate Benefits"
          savings={-53}
          inputs={[
            {
              label: 'Income',
              value: estateBenefits,
              handleChange: e => updateInputs('estateBenefits', e.target.value),
            },
          ]}
        />
        <Item
          name="ACA Taxes"
          savings={-53}
          inputs={[
            {
              label: 'Monthly Insurance Premium',
              value: monthlyInsurancePremium,
              handleChange: e => updateInputs('monthlyInsurancePremium', e.target.value),
            },
            {
              label: 'Insurance Deductible',
              value: insuranceDeductible,
              handleChange: e => updateInputs('insuranceDeductible', e.target.value),
            },
            {
              label: 'Anticipated Yearly Health Spending',
              value: anticipatedYearlyHealthSpending,
              handleChange: e => updateInputs('anticipatedYearlyHealthSpending', e.target.value),
            },
          ]}
        />
      </ul>
    );
  }
}

import { actions } from 'reducers/inputs';

export default connect(
  state => ({ ...state.inputs }),
  dispatch => bindActionCreators(actions, dispatch),
)(TaxBlurbs);
