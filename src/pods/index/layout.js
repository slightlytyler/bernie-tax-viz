import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import logo from 'assets/title.svg';
import MainViz from 'pods/main-viz';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class IndexLayout extends Component {
  render() {
    return (
      <div styleName="base">
        <header styleName="title">
          <img src={logo} styleName="logo" />
        </header>

        <div className="pane" styleName="instructions" />

        <MainViz />

        <ul styleName="line-items">
          <li className="pane" styleName="item positive">
            <section styleName="title">Tax Item 1</section>

            <ul styleName="inputs">
              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>

              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>
            </ul>
          </li>

          <li className="pane" styleName="item positive">
            <section styleName="title">Tax Item 2</section>

            <ul styleName="inputs">
              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>

              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>
            </ul>
          </li>

          <li className="pane" styleName="item positive">
            <section styleName="title">Tax Item 3</section>

            <ul styleName="inputs">
              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>

              <li styleName="item">
                <label styleName="label">Input</label>
                <input styleName="input" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
