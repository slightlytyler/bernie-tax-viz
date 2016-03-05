import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class IndexLayout extends Component {
  render() {
    return (
      <div styleName="base">
        <h1 styleName="title">Bernie Sander Tax Plan</h1>
        <div styleName="pane instructions" />

        <div styleName="pane main-viz">
          <ul styleName="categories">
            <li styleName="item">
              <section styleName="title">Cat 1</section>
              <section styleName="difference">12</section>
            </li>

            <li styleName="item">
              <section styleName="title">Cat 2</section>
              <section styleName="difference">12</section>
            </li>

            <li styleName="item">
              <section styleName="title">Cat 3</section>
              <section styleName="difference">12</section>
            </li>

            <li styleName="item">
              <section styleName="title">Cat 4</section>
              <section styleName="difference">12</section>
            </li>

            <li styleName="item">
              <section styleName="title">Cat 5</section>
              <section styleName="difference">12</section>
            </li>
          </ul>

          <div styleName="person-viz">
            person viz
          </div>
        </div>

        <ul styleName="line-items">
          <li styleName="item pane positive">
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

          <li styleName="item pane positive">
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

          <li styleName="item pane positive">
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
