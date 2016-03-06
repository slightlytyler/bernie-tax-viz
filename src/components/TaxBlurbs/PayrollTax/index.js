import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsPayrollTaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number,
  };

  render() {
    return (
      <Item
        name="Payroll Tax"
        blurb={`
          Under the current system, you pay payroll taxes on your wages up to a
          certain level. These go towards Social Security, Medicare, and Medicaid.
          The Plan will add a small tax to the first $118,500 of your earnings to
          help pay for nation-wide family leave. It will also add a 6.2% tax on
          earnings over $200,000 ($250,000 for couples) to help expand Social Security.
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
