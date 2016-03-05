import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Categories from './categories';
import PersonViz from './person-viz';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainViz extends Component {
  render() {
    return (
      <div className="pane" styleName="main-viz">
        <Categories />
        <PersonViz />
      </div>
    );
  }
}
