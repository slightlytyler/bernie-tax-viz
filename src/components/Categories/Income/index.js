import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class CategoriesIncomeItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Income Tax"
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { ordinaryIncomeSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: ordinaryIncomeSavingsSelector(state),
  }),
)(CategoriesIncomeItem);
