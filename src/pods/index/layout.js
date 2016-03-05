import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles)
export default class IndexLayout extends Component {
  render() {
    return (
      <div styleName="test">Test</div>
    );
  }
}
