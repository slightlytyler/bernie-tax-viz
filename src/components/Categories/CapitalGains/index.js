import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class MainVizCategoriesCapitalGainsItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Capital Gains"
        color={colors.capitalGains}
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { capitalGainsSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: capitalGainsSavingsSelector(state),
  }),
)(MainVizCategoriesCapitalGainsItem);
