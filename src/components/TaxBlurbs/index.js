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
          savings={125}
          inputs={[
            { label: 'Input A' },
            { label: 'Input B' },
            { label: 'Input C' },
          ]}
        />
        <Item
          name="Tax Blurb 2"
          savings={-53}
          inputs={[
            { label: 'Input D' },
          ]}
        />
        <Item
          name="Tax Blurb 3"
          savings={25}
          inputs={[
            { label: 'Input E' },
            { label: 'Input F' },
          ]}
        />
      </ul>
    );
  }
}
