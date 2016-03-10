import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import hearticon from 'assets/hearticon.svg';
import twittericon from 'assets/twitter.svg';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <div styleName="container">
          <section styleName="links row">
            <a href="https://go.berniesanders.com/page/content/contribute/" styleName="link item">Donate</a>
            <a href="http://taxfoundation.org/article/details-and-analysis-senator-bernie-sanders-s-tax-plan" styleName="link item">The analysis</a>
            <a href="http://bernies-plan.dataviz.work" styleName="link item">What's next</a>
            <a href="mailto:admin@dataviz.work" styleName="link item">Let's talk</a>
            <a href="https://twitter.com/dataviz_work" styleName="link item"><img src={twittericon} styleName="twitter icon" />@dataviz_work</a>
          </section>
          <section styleName="credit row">
            made with&nbsp;
            <img src={hearticon} styleName="heart icon" />
            &nbsp;by <a href="http://data-viz.work/" styleName="link">data-viz.work</a> & <a href="http://slightlytyler.com/" styleName="link">slightlytyler</a>
          </section>
          <section styleName="disclaimer row">
            these are just like our thoughts man, not legal advice
          </section>
        </div>
      </footer>
    );
  }
}
