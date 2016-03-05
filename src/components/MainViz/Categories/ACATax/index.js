import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class MainVizCategoriesACATaxItem extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Item
        title="ACA Tax"
        color="#EA80FC"
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
)(MainVizCategoriesACATaxItem);
