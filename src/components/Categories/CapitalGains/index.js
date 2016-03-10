import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class CategoriesCapitalGainsItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Capital Gains"
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
)(CategoriesCapitalGainsItem);
