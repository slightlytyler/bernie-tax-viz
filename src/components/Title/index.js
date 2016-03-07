import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import vector from 'assets/bernie-vector.svg';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Title extends Component {
  static propTypes ={
  };

  render() {
    return (
      <header styleName="title">
        <img src={vector} styleName="vector" />
      </header>
    );
  }
}
