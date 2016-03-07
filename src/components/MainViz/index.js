import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Categories from 'components/Categories';
import PersonViz from 'components/PersonViz';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainViz extends Component {
  render() {
    return (
      <div styleName="main-viz">
        <div styleName="container">
          <Categories />
          <PersonViz />
        </div>
      </div>
    );
  }
}
