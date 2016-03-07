import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <div styleName="social-links">
          <a
            href="https://twitter.com/intent/tweet?button_hashtag=berniesplan"
            className="twitter-hashtag-button"
            data-url="bernies-tax.dataviz.work"
          >
            Tweet #berniesplan
          </a>
          <div
            className="fb-share-button"
            data-href="http://bernies-tax.dataviz.work/"
            data-layout="button"
            data-size="large"
          />
        </div>
        <span>thePlan ep. 1</span>

        <a
          href="http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf"
          styleName="link"
        >
          .data(taxPolicyCenter)
        </a>
        <a
          href="www.reactd3.org/"
          styleName="link"
        >
          .engine(react, react-d3)
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
        <span>figures = estimatesNotAdvice</span>
        <span>&& notOfficial;</span>
        <span>.</span>
        <span>
          inquiries: admin@dataViz.work
        </span>
        <span><a
          href="https://twitter.com/dataviz_work"
          styleName="link"
        >
          @dataviz_work
        </a></span>
        <span><a
          href="https://github.com/slightlytyler/bernie-tax-viz"
          styleName="link"
        >
          @gitHub
        </a></span>
      </footer>
    );
  }
}
