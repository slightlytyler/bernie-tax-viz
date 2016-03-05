import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import styles from './styles.styl';
import colors from 'styles/colors';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategoriesItem extends Component {
  static propTypes ={
    name: PropTypes.string.isRequired,
    difference: PropTypes.number.isRequired,
    invertDifference: PropTypes.bool,
    color: PropTypes.string.isRequired,
    invertColor: PropTypes.bool,
  };

  render() {
    const {
      name,
      difference,
      invertDifference,
      color,
      invertColor,
    } = this.props;
    const isPositive =
      (difference < 0 && !invertDifference) || (difference >= 0 && invertDifference)
    ;
    const textColor = invertColor ? color : 'currentColor';
    const backgroundColor = invertColor ? colors.white : color;

    return (
      <li
        styleName="item"
        style={{
          color: textColor,
          backgroundColor,
        }}
      >
        <section styleName="title">{name}</section>
        <section
          styleName="difference"
          style={{
            backgroundColor: isPositive ? colors['positive-green'] : colors['negative-red'],
          }}
        >
          {accounting.formatMoney(difference)}
        </section>
      </li>
    );
  }
}
