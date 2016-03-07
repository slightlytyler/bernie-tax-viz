import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer className="pane" styleName="footer">
        <span>The Plan</span>
        <span>sources:</span>
        <a
          href="http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf"
          styleName="link"
        >
          Tax Policy Center
        </a>
        <a
          href="http://http://berniecare.org/"
          styleName="link"
        >
          berniecare.org
        </a>
        <a
          href="http://http://bernietax.com/"
          styleName="link"
        >
          bernietax.com
        </a>
        <span>.</span>
        <span>Figures provided are estimates, not advice.</span>
        <span>.</span>
        <span>admin@dataviz.work</span>
      </footer>
    );
  }
}
