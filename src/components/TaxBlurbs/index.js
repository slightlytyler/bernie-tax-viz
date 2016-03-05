import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class TaxBlurbs extends Component {
  static propTypes ={
    taxableIncome: PropTypes.number,
    filingStatus: PropTypes.oneOf(['single', 'married']),
    capitalGains: PropTypes.number,
    estateBenefits: PropTypes.number,
    monthlyInsurancePremium: PropTypes.number,
    insuranceDeductible: PropTypes.number,
    anticipatedYearlyHealthSpending: PropTypes.number,
  };

  render() {
    const {
      taxableIncome,
      filingStatus,
      capitalGains,
      estateBenefits,
      monthlyInsurancePremium,
      insuranceDeductible,
      anticipatedYearlyHealthSpending,
    } = this.props;
    return (
      <ul styleName="tax-blurbs">
        <Item
          name="Income"
          savings={125}
          inputs={[
            {
              label: 'Taxable Income',
              value: taxableIncome,
              handleChange: () => console.log('Update value from input A'),
            },
            {
              label: 'Filing Status',
              value: filingStatus,
              handleChange: () => console.log('Update value from input B'),
            },
          ]}
        />
        <Item
          name="Capital Gains"
          savings={-53}
          inputs={[
            {
              label: 'Capital Gains',
              value: capitalGains,
              handleChange: () => console.log('Update value from input D'),
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
              handleChange: () => console.log('Update value from input D'),
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
              handleChange: () => console.log('Update value from input D'),
            },
            {
              label: 'Insurance Deductible',
              value: insuranceDeductible,
              handleChange: () => console.log('Update value from input D'),
            },
            {
              label: 'Anticipated Yearly Health Spending',
              value: anticipatedYearlyHealthSpending,
              handleChange: () => console.log('Update value from input D'),
            },
          ]}
        />
      </ul>
    );
  }
}

export default connect(state => ({
  ...state.inputs,
}))(TaxBlurbs);
