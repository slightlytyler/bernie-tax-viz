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
        <section styleName="title">{title}</section>
        <section
          styleName="savings"
          style={{
            color: invertColor
             ? isPositive ? 'currentColor' : colors['negative-red']
             : colors.black
            ,
            backgroundColor: invertColor
              ? colors.white
              : isPositive ? colors['positive-green'] : colors['negative-red']
            ,
          }}
        >
          {accounting.formatMoney(savings)}
        </section>
      </li>
    );
  }
}
