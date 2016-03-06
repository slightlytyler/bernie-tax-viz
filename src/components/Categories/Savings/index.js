import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class MainVizCategoriesSavingsItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Savings"
        color="#0277BD"
        invertColor
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { totalSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: totalSavingsSelector(state),
  }),
)(MainVizCategoriesSavingsItem);
