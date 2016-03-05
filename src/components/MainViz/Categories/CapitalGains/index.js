import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class MainVizCategoriesCapitalGainsItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Capital Gains"
        color="#00B0FF"
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
)(MainVizCategoriesCapitalGainsItem);
