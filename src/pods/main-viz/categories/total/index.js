import React, { Component, PropTypes } from 'react';

import Item from '../item';

export default class MainVizCategoriesTotal extends Component {
  static propTypes ={
    value: PropTypes.number.isRequired,
  };

  render() {
    const { value } = this.props;

    return (
      <Item
        name="Savings"
        difference={value}
        invertDifference
        color="#0277BD"
        invertColor
      />
    );
  }
}
