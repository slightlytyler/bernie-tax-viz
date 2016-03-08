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

  colors = [
    colors.capitalGains,
    colors.payroll,
    colors.aca,
    colors.taxableIncome
  ];

  colorsFn = idx => this.colors[idx];

  render() {
    return (
      <div styleName="person-viz">
        <BarChart
          title="the plans compared"
          data={this.props.barData}
          width={700}
          height={550}
          colors={this.colorsFn}
          yAxisClassName="hide"
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
    const acaTax = acaTaxSelector(state);
    const aggregatedTaxes = [
      ordinaryIncomeTax,
      capitalGainsTax,
      payrollTax,
      acaTax,
    ];

    return {
      barData: [
        {
          name: 'Capital Gains',
          values: [
            { x: 'Current', y: capitalGainsTax.current },
            { x: 'Sanders', y: capitalGainsTax.sanders },
          ],
        },
        {
          name: 'Payroll Tax',
          values: [
            { x: 'Current', y: payrollTax.current },
            { x: 'Sanders', y: payrollTax.sanders },
          ],
        },
        {
          name: 'ACA Tax',
          values: [
            { x: 'Current', y: acaTax.current },
            { x: 'Sanders', y: acaTax.sanders },
          ],
        },
        {
          name: 'Taxable Income',
          values: [
            { x: 'Current', y: ordinaryIncomeTax.current },
            { x: 'Sanders', y: ordinaryIncomeTax.sanders },
          ],
        },
      ],
    };
  },
)(PersonViz);
