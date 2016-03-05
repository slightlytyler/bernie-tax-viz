import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import TaxableIncomeBlurb from './TaxableIncome';
import CapitalGainsBlurb from './CapitalGains';
import PayrollTaxBlurb from './PayrollTax';
import EstateBenefitsBlurb from './EstateBenefits';
import ACATaxBlurb from './ACATax';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbs extends Component {
  render() {
    return (
      <ul styleName="tax-blurbs">
        <TaxableIncomeBlurb />
        <CapitalGainsBlurb />
        <PayrollTaxBlurb />
        <EstateBenefitsBlurb />
        <ACATaxBlurb />
      </ul>
    );
  }
}
