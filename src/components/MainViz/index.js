import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import colors from 'styles/colors';
import styles from './styles.styl';
import DifferenceBar from './DifferenceBar';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainViz extends Component {
  render() {
    return (
      <div styleName="main-viz">
        <section styleName="container">
          <header styleName="header">
            <section styleName="large row">
              Hi, I'm <span styleName="whom">a Low Income American</span>.
            </section>
            <section styleName="row">
              I'll spend about&nbsp;
              <span
                styleName="savings"
                style={{ color: colors.bernieBlue }}
              >
                $1,200
              </span>
            </section>
            <section styleName="row">
              less per year under Bernie's plan.
            </section>
          </header>
          <DifferenceBar />
          <footer styleName="footer">
            <section styleName="row">
              I'll save the most on medical expenses
            </section>
            <section styleName="row">
              and spend the most on payroll taxes.
            </section>
          </footer>
          <section styleName="share-bar">
            Share
          </section>
        </section>
      </div>
    );
  }
}
