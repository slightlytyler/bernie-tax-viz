import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class MainVizCategoriesIncomeItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Income"
        color="#FF9100"
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
)(MainVizCategoriesIncomeItem);
