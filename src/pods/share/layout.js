import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Header from 'components/Header';
import MainViz from 'components/MainViz';
import Footer from 'components/Footer';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class ShareLayout extends Component {
  static propTypes = {
    currentCase: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div styleName="base">
        <Header />
        <div styleName="main">
          <div styleName="sections">
            <MainViz />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

import { connect } from 'react-redux';

export default connect()(ShareLayout);
