import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <span>thePlan</span>
        <a
          href="http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf"
          styleName="link"
        >
          .data(taxPolicyCenter)
        </a>
        <a
          href="http://http://berniecare.org/"
          styleName="link"
        >
          .math(bernieCare)
        </a>
        <a
          href="http://http://bernietax.com/"
          styleName="link"
        >
          .const(bernieTax)
        </a>
        <span>figures = estimatesNotAdvice;</span>
        <span></span>
        <span>
          admin@dataViz.work
        </span>
        <span><a
          href="https://github.com/slightlytyler/bernie-tax-viz"
          styleName="link"
        >
          @gitHub
        </a></span>
        <span><a
          href="https://twitter.com/dataviz_work"
          styleName="link"
        >
          @dataviz_work
        </a></span>
      </footer>
    );
  }
}
