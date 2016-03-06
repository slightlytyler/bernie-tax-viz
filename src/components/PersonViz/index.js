import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { BarChart } from 'react-d3';

import colors from 'styles/colors';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class PersonViz extends Component {
  barData = [
    {
      name: 'Taxable Income',
      color: colors.taxableIncome,
      values: [
        { x: 1, y: 91 },
        { x: 2, y: 150 }
      ],
    },
    {
      name: 'Capital Gains',
      values: [
        { x: 1, y: 91 },
        { x: 2, y: 150 }
      ],
    },
    {
      name: 'Payroll Tax',
      values: [
        { x: 1, y: 91 },
        { x: 2, y: 150 }
      ],
    },
    {
      name: 'Estate Benefits',
      values: [
        { x: 1, y: 91 },
        { x: 2, y: 150 }
      ],
    },
    {
      name: 'ACA Tax',
      values: [
        { x: 1, y: 91 },
        { x: 2, y: 150 }
      ],
    },
  ];

  render() {
    return (
      <div styleName="person-viz">
        <BarChart
          data={this.barData}
          width={500}
          height={200}
          colors={idx => (
            [
              colors.taxableIncome,
              colors.capitalGains,
              colors.payroll,
              colors.estate,
              colors.aca
            ][idx]
          )}
          colorAccessor={(series, idx) => idx}
        />
      </div>
    );
  }
}
