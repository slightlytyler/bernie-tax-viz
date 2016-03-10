import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Header from 'components/Header';
import Cases from 'components/Cases';
import Categories from 'components/Categories';
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
            <section styleName="section">
              inputs
            </section>
            <section styleName="section">
              <Categories />
            </section>
            <section styleName="section">
              viz
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
