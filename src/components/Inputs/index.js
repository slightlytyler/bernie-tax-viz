import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import Paper from 'material-ui/lib/paper';
import TextField from './TextField';
import SelectField from './SelectField';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Inputs extends Component {
  render() {
    return (
      <section styleName="inputs">
        <Paper zDepth={3}>
          <header styleName="header">Can I ask you some questions?</header>
          <ul styleName="list">
            <li styleName="item">
              <TextField
                type="number"
                label="How much will you make this year?"
              />
            </li>
            <li styleName="item flush">
              <SelectField
                options={[
                  { value: 'married', label: 'Married' },
                  { value: 'single', label: 'Single' },
                ]}
                label="Are you married or sinlge?"
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="How many dependants will you claim this year?"
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="What's your anticipated yearly health spending?"
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="How much capital gains will you realize this year?"
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="What is your expected lifetime estate benefit?"
              />
            </li>
          </ul>
        </Paper>
      </section>
    );
  }
}
