import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Income from './Income';
import CapitalGains from './CapitalGains';
import PayrollTax from './PayrollTax';
import EstateBenefits from './EstateBenefits';
import ACATax from './ACATax';
import Savings from './Savings';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategories extends Component {
  render() {
    return (
      <div styleName="container">
        <ul styleName="categories">
          <Income />
          <CapitalGains />
          <PayrollTax />
          <EstateBenefits />
          <ACATax />
        </ul>

        <ul styleName="categories" style={{ color: '#0277BD' }}>
          <Savings />
        </ul>
      </div>
    );
  }
}
