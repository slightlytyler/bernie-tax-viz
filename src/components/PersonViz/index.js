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
    colors.taxableIncome,
    colors.capitalGains,
    colors.payroll,
    colors.estate,
    colors.aca,
    colors['positive-green'],
    colors['negative-red'],
  ];

  colorsFn = idx => this.colors[idx];

  colorAccessor = (series, idx) => (
    idx === 5 && series.x === 1
      ? idx + 1
      : idx
  );

  render() {
    return (
      <div styleName="person-viz">
        <BarChart
          data={this.props.barData}
          width={700}
          height={700}
          colors={this.colorsFn}
          colorAccessor={this.colorAccessor}
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
  totalSavingsSelector,
} from 'reducers/inputs';

export default connect(
  state => {
    const ordinaryIncomeTax = ordinaryIncomeTaxSelector(state);
    const capitalGainsTax = capitalGainsTaxSelector(state);
    const payrollTax = payrollTaxSelector(state);
    const estateTax = estateTaxSelector(state);
    const acaTax = acaTaxSelector(state);
    const aggregatedTaxes = [
      ordinaryIncomeTax,
      capitalGainsTax,
      payrollTax,
      estateTax,
      acaTax,
    ];
    const totalCurrent = aggregatedTaxes.reduce((a, b) => (a.current ? a.current : a) + b.current);
    const totalSanders = aggregatedTaxes.reduce((a, b) => (a.sanders ? a.sanders : a) + b.sanders);
    const totalSavings = totalSavingsSelector(state);
    const positiveTotalSavings = totalSavings >= 0;

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
        {
          name: 'Savings',
          values: [
            { x: 1, y: positiveTotalSavings ? 0 : Math.abs(totalCurrent - totalSanders) },
            { x: 2, y: positiveTotalSavings ? Math.abs(totalSavings) : 0 },
          ],
        },
      ],
    };
  },
)(PersonViz);
