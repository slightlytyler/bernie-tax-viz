import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Footer extends Component {
  render() {
    return (
      <footer className="pane" styleName="footer">
        The Plan by dataviz.work<br>
        information sourced from: <br>
        <a href='http://taxpolicycenter.org/UploadedPDF/2000639-an-analysis-of-senator-bernie-sanderss-tax-proposals.pdf'>Tax Policy Center</a>
      </footer>
    );
  }
}
