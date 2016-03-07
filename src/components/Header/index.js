import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import vector from 'assets/bernie-vector.svg';
import text from 'assets/text.svg';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Header extends Component {
  render() {
    return (
      <header className="pane" styleName="header">
        <img src={text} styleName="text" />
        <img src={vector} styleName="vector" />
      </header>
    );
  }
}
