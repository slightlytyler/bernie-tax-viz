import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import categories from 'constants/categories';
import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategories extends Component {
  render() {
    return (
      <div styleName="container">
        <ul styleName="categories">
          {
            categories.map(category => (
              <Item
                key={category.title}
                title={category.title}
                color={category.color}
                difference={category.difference}
              />
            ))
          }
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
