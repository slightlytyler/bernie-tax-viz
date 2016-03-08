import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import List from './List';
import Income from './Income';
import CapitalGains from './CapitalGains';
import PayrollTax from './PayrollTax';
import EstateBenefits from './EstateBenefits';
import ACATax from './ACATax';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizCategories extends Component {
  render() {
    return (
      <div styleName="container">
        <List>
          <Income />
          <ACATax />
          <PayrollTax />
          <CapitalGains />
        </List>

        <List>
          <EstateBenefits />
        </List>
      </div>
    );
  }
}
