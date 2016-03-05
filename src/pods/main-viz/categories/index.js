import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Item from './item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategories extends Component {
  render() {
    return (
      <div styleName="container">
        <ul styleName="categories">
          <Item
            name="Category 1"
            difference={-125}
            color="#FF9100"
          />

          <Item
            name="Category 2"
            difference={-1450}
            color="#00B0FF"
          />

          <Item
            name="Category 3"
            difference={-75}
            color="#1DE9B6"
          />

          <Item
            name="Category 4"
            difference={129}
            color="#FF80AB"
          />

          <Item
            name="Category 5"
            difference={-35}
            color="#EA80FC"
          />
        </ul>

        <ul styleName="categories" style={{ color: '#0277BD' }}>
          <Item
            name="Savings"
            difference={1750}
            invertDifference
            color="#0277BD"
            invertColor
          />
        </ul>
      </div>
    );
  }
}
