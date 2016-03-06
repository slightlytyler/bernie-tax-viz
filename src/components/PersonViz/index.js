import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { BarChart } from 'react-d3';

import colors from 'styles/colors';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class PersonViz extends Component {
  static propTypes = {
    barData: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div styleName="person-viz">
        <BarChart
          data={this.props.barData}
          width={700}
          height={700}
          colors={idx => (
            [
              colors.taxableIncome,
              colors.capitalGains,
              colors.payroll,
              colors.estate,
              colors.aca,
            ][idx]
          )}
          colorAccessor={(series, idx) => idx}
        />
      </div>
    );
  }
}

import { connect } from 'react-redux';
import {
  ordinaryIncomeTaxSelector,
  capitalGainsTaxSelector,
  payrollTaxSelector,
  estateTaxSelector,
  acaTaxSelector,
} from 'reducers/inputs';

export default connect(
  state => {
    const ordinaryIncomeTax = ordinaryIncomeTaxSelector(state);
    const capitalGainsTax = capitalGainsTaxSelector(state);
    const payrollTax = payrollTaxSelector(state);
    const estateTax = estateTaxSelector(state);
    const acaTax = acaTaxSelector(state);

    return {
      barData: [
        {
          name: 'Taxable Income',
          values: [
            { x: 1, y: ordinaryIncomeTax.current },
            { x: 2, y: ordinaryIncomeTax.sanders },
          ],
        },
        {
          name: 'Capital Gains',
          values: [
            { x: 1, y: capitalGainsTax.current },
            { x: 2, y: capitalGainsTax.sanders },
          ],
        },
        {
          name: 'Payroll Tax',
          values: [
            { x: 1, y: payrollTax.current },
            { x: 2, y: payrollTax.sanders },
          ],
        },
        {
          name: 'Estate Benefits',
          values: [
            { x: 1, y: estateTax.current },
            { x: 2, y: estateTax.sanders },
          ],
        },
        {
          name: 'ACA Tax',
          values: [
            { x: 1, y: acaTax.current },
            { x: 2, y: acaTax.sanders },
          ],
        },
      ],
    };
  },
)(PersonViz);
