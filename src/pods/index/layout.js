import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Title from 'components/Title';
import Instructions from 'components/Instructions';
import MainViz from 'components/MainViz';
import TaxBlurbs from 'components/TaxBlurbs';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class IndexLayout extends Component {
  render() {
    return (
      <div styleName="base">
        <Title />
        <Instructions />
        <MainViz />
        <TaxBlurbs />
      </div>
    );
  }
}
