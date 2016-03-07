import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import Item from '../Item';

class MainVizCategoriesEstateBenefitsItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title=" Estate Benefits"
        color={colors.estate}
        savings={this.props.savings}
      />
    );
  }
}

import { connect } from 'react-redux';
import { estateSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: estateSavingsSelector(state),
  }),
)(MainVizCategoriesEstateBenefitsItem);
