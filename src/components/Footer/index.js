import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <span>thePlan ep. 1</span>

        <a
          href="http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf"
          styleName="link"
        >
          .data(taxPolicyCenter)
        </a>
         .engine(react, react-d3)
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
        <span>figures = estimatesNotAdvice</span>
        <span>&& notOfficial;</span>

        <span></span>
        <span>.</span>
        <span>
          admin@dataViz.work
        </span>
        <span><a
          href="https://github.com/slightlytyler/bernie-tax-viz"
          styleName="link"
        >
          @gitHub
        </a></span>
        <span>
          <a class="twitter-share-button"
           href="https://twitter.com/intent/tweet?text=thePlan%20ep.1%20">
          Tweet
          </a>
        </span>
      </footer>
    );
  }
}
