import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import styles from './styles.styl';
import colors from 'styles/colors';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategoriesItem extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
    savings: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    invertColor: PropTypes.bool,
  };

  render() {
    const {
      title,
      savings,
      color,
      invertColor,
    } = this.props;
    const isPositive = savings >= 0;
    const netZero = savings === 0;

    const magnitudeColor = isPositive ? colors['positive-green'] : colors['negative-red'];
    const textColor = invertColor ? color : 'rgba(0, 0, 0, .7)';

    const titleBackgroundColor = invertColor ? colors.white : color;

    const savingsBackgroundColor = (invertColor || netZero) ? colors.white : magnitudeColor;
    const savingsBorderColor = netZero ? color : magnitudeColor;

    return (
      <li styleName="item">
        <section
          styleName="title"
          style={{
            color: textColor,
            backgroundColor: titleBackgroundColor,
          }}
        >
          {title}
        </section>
        <section
          styleName="savings"
          style={{
            color: (
              invertColor
                ? magnitudeColor
                : colors.black
            ),
            backgroundColor: savingsBackgroundColor,
            borderColor: invertColor ? colors.white : savingsBorderColor,
          }}
        >
          {accounting.formatMoney(savings, '$', 0)}
        </section>
      </li>
    );
  }
}
