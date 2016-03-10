import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class CategoriesHealthcareItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="Healthcare"
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
)(CategoriesHealthcareItem);
