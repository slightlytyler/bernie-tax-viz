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
    colors.taxableIncome,
    colors['positive-green'],
    colors['negative-red'],
  ];

  colorsFn = idx => this.colors[idx];

  colorAccessor = (series, idx) => (
    idx === (this.props.barData.length - 1) && series.x === 'Current'
      ? idx + 1
      : idx
  );

  render() {
    return (
      <div styleName="person-viz">
        <BarChart
          title="the plans compared"
          data={this.props.barData}
          width={700}
          height={550}
          colors={this.colorsFn}
          colorAccessor={this.colorAccessor}
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
        {
          name: 'Savings',
          values: [
            { x: 'Current', y: positiveTotalSavings ? 0 : Math.abs(totalCurrent - totalSanders) },
            { x: 'Sanders', y: positiveTotalSavings ? Math.abs(totalSavings) : 0 },
          ],
        },
      ],
    };
  },
)(PersonViz);
