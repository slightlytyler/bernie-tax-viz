import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizDiffenceBar extends Component {
  render() {
    return (
      <section styleName="difference-bar">
        <secion
          styleName="negative"
          style={{ width: '40%' }}
        />
        <section
          styleName="positive"
          style={{ width: '60%' }}
        />
        <span styleName="origin" />
      </section>
    );
  }
}
