import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizPersonViz extends Component {
  render() {
    return (
      <div styleName="person-viz">
        <div>person viz</div>
      </div>
    );
  }
}
