import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbs extends Component {
  static propTypes ={
  };

  render() {
    return (
      <ul styleName="tax-blurbs">
        <Item
          name="Tax Blurb 1"
        />
        <Item
          name="Tax Blurb 2"
        />
        <Item
          name="Tax Blurb 3"
        />
      </ul>
    );
  }
}
