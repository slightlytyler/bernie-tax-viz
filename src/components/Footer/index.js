import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import hearticon from 'assets/hearticon.svg';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <div styleName="container">
          <section styleName="links row">
            <a styleName="link item">Some link</a>
            <a styleName="link item">Some link</a>
            <a styleName="link item">Some link</a>
            <a styleName="link item">Some link</a>
          </section>
          <section styleName="credit row">
            made with <img src={hearticon} styleName="heart" /> by <a styleName="link">data-viz.work</a>
          </section>
          <section styleName="disclaimer row">
            super tiny disclaimer or something like that
          </section>
        </div>
      </footer>
    );
  }
}
