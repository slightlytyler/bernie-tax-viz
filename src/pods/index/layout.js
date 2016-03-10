import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Header from 'components/Header';
import Cases from 'components/Cases';
import Inputs from 'components/Inputs';
import Categories from 'components/Categories';
import MainViz from 'components/MainViz';
import Footer from 'components/Footer';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class IndexLayout extends Component {
  render() {
    return (
      <div styleName="base">
        <Header />
        <div styleName="main">
          <Cases />
          <div styleName="sections">
            <Inputs />
            <Categories />
            <MainViz />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
