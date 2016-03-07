import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class MainVizCategoriesIncomeItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Income"
        color={colors.taxableIncome}
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
)(MainVizCategoriesIncomeItem);
