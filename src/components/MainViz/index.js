import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import colors from 'styles/colors';
import styles from './styles.styl';
import DifferenceBar from './DifferenceBar';
import { casesById } from 'constants/cases';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class MainViz extends Component {
  static propTypes = {
    difference: PropTypes.shape({
      spend: PropTypes.number.isRequired,
      save: PropTypes.number.isRequired,
    }),
    savings: PropTypes.number.isRequired,
    maxSaveCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    maxSpendCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    currentCase: PropTypes.string.isRequired,
  };

  emptySubject = 'Normal';

  renderEmpty() {
    return (
      <div styleName="main-viz">
        <section styleName="container">
          <header styleName="header">
            <section styleName="large row">
              Hi, I'm <span styleName="whom">a {this.emptySubject} American</span>.
            </section>
            <section styleName="row">
              Fill out the form to the right
            </section>
            <section styleName="row">
              to get started.
            </section>
          </header>
          <DifferenceBar />
          <footer styleName="footer">
            <section styleName="row">
              Give us the facts
            </section>
            <section styleName="row">
              and we'll show you the differences.
            </section>
          </footer>
          {this.renderShareBar()}
        </section>
      </div>
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

  renderShareBar() {
    return (
      <section styleName="share-bar">
        Feeling the bern?
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=berniesplan"
          className="twitter-hashtag-button"
          data-url="bernies-tax.dataviz.work"
        >
          Tweet #berniesplan
        </a>
        <div
          className="fb-share-button"
          data-href="http://bernies-tax.dataviz.work/"
          data-layout="button"
          data-size="large"
        />
      </section>
    );
  }

  render() {
    const { savings, difference, currentCase } = this.props;
    const positiveSavings = savings > 0;
    const netZeroSavings = savings === 0;
    const userName = currentCase === 'custom'
      ? this.emptySubject
      : casesById[currentCase].label
    ;

    let variationText;
    let savingsColor;
    if (positiveSavings) {
      variationText = 'less';
      savingsColor = colors.bernieBlue;
    } else {
      variationText = 'more';
      savingsColor = colors.negativeRed;
    }

    if (difference.save !== 0 || difference.spend !== 0) {
      return (
        <div styleName="main-viz">
          <section styleName="container">
            <header styleName="header">
              <section styleName="large row">
                Hi, I'm <span styleName="whom">a {userName} American</span>.
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

    return this.renderEmpty();
  }
}

import { connect } from 'react-redux';
import {
  totalDifferenceSelector,
  totalSavingsSelector,
  maxSaveCategorySelector,
  maxSpendCategorySelector,
} from 'reducers/inputs';

export default connect(
  state => ({
    difference: totalDifferenceSelector(state),
    savings: totalSavingsSelector(state),
    maxSaveCategory: maxSaveCategorySelector(state),
    maxSpendCategory: maxSpendCategorySelector(state),
  }),
)(MainViz);
