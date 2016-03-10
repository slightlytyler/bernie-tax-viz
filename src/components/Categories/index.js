import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Income from './Income';
import Healthcare from './Healthcare';
import Payroll from './Payroll';
import CapitalGains from './CapitalGains';
import Estate from './Estate';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Categories extends Component {
  render() {
    return (
      <section styleName="categories">
        <table styleName="table">
          <tbody>
            <Income />
            <Healthcare />
            <Payroll />
            <CapitalGains />
            <Estate />
          </tbody>
        </table>
      </section>
    );
  }
}
