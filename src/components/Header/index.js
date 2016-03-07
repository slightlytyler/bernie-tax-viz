import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import vector from 'assets/bernie-vector.svg';
import text from 'assets/text.svg';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Header extends Component {
  render() {
    return (
      <header styleName="header">
        <div styleName="container">
          <img src={text} styleName="text" />
          <img src={vector} styleName="vector" />
        </div>
      </header>
    );
  }
}
