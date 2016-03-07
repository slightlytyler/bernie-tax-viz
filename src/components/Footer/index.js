import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer className="pane" styleName="footer">
        <span>The Plan by dataviz.work</span>
        <span>information sourced from:</span>
        <br>
        <a
          href="http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf"
          styleName="link"
        >
          Tax Policy Center
        </a><br>
        <a
          href="http://http://berniecare.org/"
          styleName="link"
        >
          berniecare.org
        </a><br>
        <a
          href="http://http://bernietax.com/"
          styleName="link"
        >
          bernietax.com
        </a><br>
        IRS <br>
        SSA <br>
        <br>
          Figures provided are solely estimates and are not tax advice.
        <br><br>
          Please email admin@dataviz.work with comments and suggestions.

      </footer>
    );
  }
}
