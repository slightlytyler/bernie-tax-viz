import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import styles from './styles.styl';
import colors from 'styles/colors';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class CategoriesItem extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
    savings: PropTypes.number.isRequired,
  };

  render() {
    const { title, savings } = this.props;
    const isPositive = savings >= 0;
    const netZero = savings === 0;

    let color;
    let backgroundColor;

    if (netZero) {
      color = colors.gray2;
      backgroundColor = colors.gray;
    } else {
      color = colors.lightAlpha;

      if (isPositive) {
        backgroundColor = colors.positiveGreen;
      } else {
        backgroundColor = colors.negativeRed;
      }
    }

    return (
      <tr styleName="item">
        <td styleName="title">{title}</td>
        <td
          styleName="savings"
          style={{
            color,
            backgroundColor,
          }}
        >
          {accounting.formatMoney(savings, '$', 0)}
        </td>
      </tr>
    );
  }
}
