import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class MainVizCategoriesPayrollTaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Payroll Tax"
        color="#1DE9B6"
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';

export default connect(
  state => ({
    savings: 125,
  }),
)(MainVizCategoriesPayrollTaxItem);
