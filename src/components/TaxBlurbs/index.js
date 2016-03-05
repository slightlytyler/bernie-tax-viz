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
            {
              label: 'Input A',
              handleChange: () => console.log('Update value from input A'),
            },
            {
              label: 'Input B',
              handleChange: () => console.log('Update value from input B'),
            },
            {
              label: 'Input C',
              handleChange: () => console.log('Update value from input C'),
            },
          ]}
        />
        <Item
          name="Tax Blurb 2"
          savings={-53}
          inputs={[
            {
              label: 'Input D',
              handleChange: () => console.log('Update value from input D'),
            },
          ]}
        />
        <Item
          name="Tax Blurb 3"
          savings={25}
          inputs={[
            {
              label: 'Input E',
              handleChange: () => console.log('Update value from input E'),
            },
            {
              label: 'Input F',
              handleChange: () => console.log('Update value from input F'),
            },
          ]}
        />
      </ul>
    );
  }
}
