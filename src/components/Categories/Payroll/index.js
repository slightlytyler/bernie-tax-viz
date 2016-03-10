import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class CategoriesPayrollItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Payroll"
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
)(CategoriesPayrollItem);
