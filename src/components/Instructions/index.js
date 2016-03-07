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
        The Tax Plan ft. Senator Bernie Sanders is an interactive applet that let's you quickly explore, experiment with and share
        the effect that Senator Bernie Sander's tax plan would have on people across the income spectrum.
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
            <span styleName="text">Enter some data</span>
          </li>
          <li styleName="item arrow">
            <img src={arrow} styleName="image" />
          </li>
          <li styleName="item">
            <img src={chart} styleName="icon" />
            <span styleName="text">View the savings</span>
          </li>
          <li styleName="item arrow">
            <img src={arrow} styleName="image" />
          </li>
          <li styleName="item">
            <img src={share} styleName="icon" />
            <span styleName="text">Share the viz!</span>
          </li>

          <img src={close} styleName="close" />
        </ul>
        Below are 5 examples of tax scenarios, by income, from Low Income to Super-High Income.
        Click each example to pre-fill the form with their data, or fill in your own estimation as you scroll down.
      </div>
    );
  }
}
