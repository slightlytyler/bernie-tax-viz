import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class MainVizCategoriesPayrollTaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Payroll Tax"
        color={colors.payroll}
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
)(MainVizCategoriesPayrollTaxItem);
