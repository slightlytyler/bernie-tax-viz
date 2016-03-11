import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import colors from 'styles/colors';
import styles from './styles.styl';
import DifferenceBar from '../DifferenceBar';
import { Link } from 'react-router';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizViz extends Component {
  static propTypes = {
    savings: PropTypes.number.isRequired,
    difference: PropTypes.shape({
      spend: PropTypes.number.isRequired,
      save: PropTypes.number.isRequired,
    }),
    maxSaveCategory: PropTypes.string.isRequired,
    maxSpendCategory: PropTypes.string.isRequired,
  };

  renderShareBar() {
    return (
      <Link to="/what-about-me" styleName="share-bar">
        What about me?
      </Link>
    );
  }

  renderFooter() {
    const { maxSaveCategory, maxSpendCategory } = this.props;

    if (maxSaveCategory && maxSpendCategory) {
      return (
        <footer styleName="footer">
          <section styleName="row">
            I'll save the most on {maxSaveCategory}
          </section>
          <section styleName="row">
            and spend the most on {maxSpendCategory}.
          </section>
        </footer>
      );
    } else if (maxSpendCategory) {
      return (
        <footer styleName="footer">
          <section styleName="row">
            I'll spend the most on {maxSpendCategory}.
          </section>
          <section styleName="row">
          </section>
        </footer>
      );
    }

    return (
      <footer styleName="footer">
        <section styleName="row">
          I'll save the most on {maxSaveCategory}.
        </section>
        <section styleName="row">
        </section>
      </footer>
    );
  }

  render() {
    const { savings, difference } = this.props;
    const positiveSavings = savings > 0;
    const netZeroSavings = savings === 0;

    let variationText;
    let savingsColor;
    if (positiveSavings) {
      variationText = 'less';
      savingsColor = colors.bernieBlue;
    } else {
      variationText = 'more';
      savingsColor = colors.negativeRed;
    }

    return (
      <div styleName="main-viz">
        <section styleName="container">
          <header styleName="header">
            <section styleName="large row">
              Hi, I'm <span styleName="whom">an American taxpayer</span>.
            </section>
            <section styleName="row">
              I'll spend about&nbsp;
              {
                !netZeroSavings
                && (
                  <span
                    styleName="savings"
                    style={{
                      color: savingsColor,
                    }}
                  >
                    {accounting.formatMoney(Math.abs(savings), '$', 0)}
                  </span>
                )
              }
            </section>
            <section styleName="row">
              {netZeroSavings ? 'the same' : variationText} per year under Bernie's plan.
            </section>
          </header>
          <DifferenceBar
            spend={difference.spend}
            save={difference.save}
          />
          {this.renderFooter()}
          {this.renderShareBar()}
        </section>
      </div>
    );
  }
}
