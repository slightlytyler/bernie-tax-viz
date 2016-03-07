import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import meet from 'assets/meet.svg';
import clipboard from 'assets/clipboard.svg';
import chart from 'assets/chart.svg';
import share from 'assets/share.svg';
import arrow from 'assets/arrow.svg';
import close from 'assets/close.svg';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Title extends Component {
  static propTypes ={
  };

  render() {
    return (
      <div className="pane" styleName="instructions">
        <ul styleName="icons">
          <li styleName="item">
            <img src={meet} styleName="icon" />
            <span styleName="text">Meet the taxpayers</span>
          </li>
          <li styleName="item arrow">
            <img src={arrow} styleName="image" />
          </li>
          <li styleName="item">
            <img src={clipboard} styleName="icon" />
            <span styleName="text">Enter your data</span>
          </li>
          <li styleName="item arrow">
            <img src={arrow} styleName="image" />
          </li>
          <li styleName="item">
            <img src={chart} styleName="icon" />
            <span styleName="text">View your savings</span>
          </li>
          <li styleName="item arrow">
            <img src={arrow} styleName="image" />
          </li>
          <li styleName="item">
            <img src={share} styleName="icon" />
            <span styleName="text">Spread the word!</span>
          </li>
        </ul>

        <img src={close} styleName="close" />
      </div>
    );
  }
}
