import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class CategoriesEstateItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title=" Estate"
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
)(CategoriesEstateItem);
