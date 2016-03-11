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
class IndexLayout extends Component {
  render() {
    return (
      <div styleName="base">
        <Header />
        <div styleName="main">
          <Cases currentCase={this.props.currentCase}/>
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

import { connect } from 'react-redux';
import { cases } from 'constants/cases';

export default connect(
  (state, props) => ({
    currentCase: props.params.caseId || cases[0],
  })
)(IndexLayout);