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
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';

export default connect(
  state => ({
    savings: 0,
  }),
)(TaxBlurbsPayrollTaxItem);
