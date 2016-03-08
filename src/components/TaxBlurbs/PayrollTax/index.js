import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class TaxBlurbsPayrollTaxItem extends Component {
  static propTypes ={
    taxableIncome: PropTypes.number.isRequired,
    savings: PropTypes.number,
  };

  render() {
    return (
      <Item
        name="Other Payroll Taxes"
        blurb={`
          Today, payroll taxes on your wages contribute towards SS, Medicare, and
          Medicaid. The Plan will tax 0.2% from the first $118,500 of your taxable
          income to pay for paid family and medical leave. It will also add a 6.2%
          tax on earnings over $200,000 ($250,000 for couples) to help expand and
          strengthen Social Security.
        `}
        savings={this.props.savings}
        themeColor={colors.payroll}
        showThemeColor={!(this.props.taxableIncome)}
      />
    );
  }
}

import { connect } from 'react-redux';
import { taxableIncomeSelector, payrollSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    taxableIncome: taxableIncomeSelector(state),
    savings: payrollSavingsSelector(state),
  }),
)(TaxBlurbsPayrollTaxItem);
