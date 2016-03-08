import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import accounting from 'accounting';

import styles from './styles.styl';
import colors from 'styles/colors';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbsItem extends Component {
  static propTypes ={
    name: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    savings: PropTypes.number.isRequired,
    themeColor: PropTypes.string.isRequired,
    showThemeColor: PropTypes.bool.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element),
    ]),
  };

  render() {
    const {
      name,
      blurb,
      savings,
      children,
      themeColor,
      showThemeColor,
    } = this.props;
    const magnitudeColor = savings >= 0 ? colors['positive-green'] : colors['negative-red'];
    return (
      <li
        className="pane"
        styleName="base"
        style={{
          backgroundColor: showThemeColor ? themeColor : magnitudeColor,
          borderColor: showThemeColor ? themeColor : magnitudeColor,
        }}
      >
        <div styleName="text">
          <header styleName="header">
            <section styleName="title">{name}</section>
            <section
              styleName="savings"
              style={{ color: showThemeColor ? themeColor : magnitudeColor }}
            >
              {accounting.formatMoney(savings, '$', 0)}
            </section>
          </header>
          <p styleName="blurb">{blurb}</p>
        </div>
        {
          children
          ? (
            <ul styleName="inputs">
              {children}
            </ul>
          )
          : undefined
        }
      </li>
    );
  }
}
