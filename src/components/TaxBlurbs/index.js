import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import IncomeBlurb from './Income';
import CapitalGainsBlurb from './CapitalGains';
import PayrollTaxBlurb from './PayrollTax';
import EstateBenefitsBlurb from './EstateBenefits';
import ACATaxBlurb from './ACATax';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbs extends Component {
  render() {
    return (
      <ul styleName="tax-blurbs">
        <IncomeBlurb />
        <CapitalGainsBlurb />
        <PayrollTaxBlurb />
        <EstateBenefitsBlurb />
        <ACATaxBlurb />
      </ul>
    );
  }
}
