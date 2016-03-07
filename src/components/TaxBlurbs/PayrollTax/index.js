import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsPayrollTaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number,
  };

  render() {
    return (
      <Item
        name="Other Payroll Taxes"
        blurb={`
          Today, payroll taxes on your wages contribute towards SS, Medicare, and Medicaid.
          The Plan will tax 0.2% from the first $118,500 of your taxable income to
          pay for paid family and medical leave. It will also add a 6.2% tax on
          earnings over $200,000 ($250,000 for couples) to help expand and strengthen Social Security.
        `}
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { payrollSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: payrollSavingsSelector(state),
  }),
)(TaxBlurbsPayrollTaxItem);
