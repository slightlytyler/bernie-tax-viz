import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class MainVizCategoriesACATaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="ACA Tax"
        color={colors.aca}
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { acaSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: acaSavingsSelector(state),
  }),
)(MainVizCategoriesACATaxItem);
