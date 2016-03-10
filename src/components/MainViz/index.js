import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import colors from 'styles/colors';
import styles from './styles.styl';
import DifferenceBar from './DifferenceBar';
import userCases from 'constants/cases';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class MainViz extends Component {
  static propTypes = {
    difference: PropTypes.shape({
      spend: PropTypes.number.isRequired,
      save: PropTypes.number.isRequired,
    }),
    savings: PropTypes.number.isRequired,
    currentCase: PropTypes.string.isRequired,
  };

  render() {
    const { savings, difference, currentCase } = this.props;
    const positiveSavings = savings > 0;
    const netZeroSavings = savings === 0;
    const userName = currentCase === 'custom'
      ? 'Normal'
      : userCases[currentCase].label
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
                    {accounting.formatMoney(savings, '$', 0)}
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

import { connect } from 'react-redux';
import { totalDifferenceSelector, totalSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    difference: totalDifferenceSelector(state),
    savings: totalSavingsSelector(state),
    currentCase: state.userCase,
  }),
)(MainViz);
