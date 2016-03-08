import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import colors from 'styles/colors';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class PersonVizTotalSavings extends Component {
  static propTypes ={
    savings: PropTypes.number.isRequired,
  };

  render() {
    const { savings } = this.props;
    const netZero = savings === 0;
    const positiveSavings = savings > 0;
    let valueColor;

    if (netZero) {
      valueColor = colors.bernieBlue;
    } else if (positiveSavings) {
      valueColor = colors['positive-green'];
    } else {
      valueColor = colors['negative-red'];
    }

    return (
      <section styleName="savings">
        <span styleName="container">
          <span styleName="title">Whats the difference?</span>
          <span
            styleName="value"
            style={{ color: valueColor }}
          >
            {accounting.formatMoney(this.props.savings, '$', 0)}
          </span>
        </span>
      </section>
    );
  }
}

import { connect } from 'react-redux';
import { totalSavingsSelector } from 'reducers/inputs';

export default connect(
  state => ({
    savings: totalSavingsSelector(state),
  }),
)(PersonVizTotalSavings);
