import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import meet from 'assets/meet.svg';
import clipboard from 'assets/clipboard.svg';
import chart from 'assets/chart.svg';
import share from 'assets/share.svg';
import arrow from 'assets/arrow.svg';
import close from 'assets/close.svg';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class Instructions extends Component {
  static propTypes ={
    hidden: PropTypes.bool.isRequired,
    hideInstructions: PropTypes.func.isRequired,
  };

  render() {
    if (this.props.hidden) {
      return undefined;
    }

    return (
      <div className="pane" styleName="instructions">
        <div styleName="container">
          <p styleName="blurb">
            The Tax Plan with Senator Bernie Sanders is an interactive applet that
            lets you quickly explore, experiment with and share the effect that
            Senator Bernie Sander's tax plan would have on people across the income spectrum.
          </p>
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
              <span styleName="text">Share the viz!</span>
            </li>

            <img
              src={close}
              styleName="close"
              onClick={this.props.hideInstructions}
            />
          </ul>
          <p styleName="blurb">
            Below are 4 examples of tax scenarios, by income, from Low Income to
            Super-High Income. Click each example to pre-fill the form with their data,
            or fill in your own estimation as you scroll down.
          </p>
        </div>
      </div>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducers/instructions';

export default connect(
  state => state.instructions,
  dispatch => bindActionCreators({
    hideInstructions: actions.hideInstructions,
  }, dispatch),
)(Instructions);
