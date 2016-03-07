import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';

export default class CustomTextField extends Component {
  render() {
    return (
      <TextField
        {...this.props}
        style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
        floatingLabelStyle={{ whiteSpace: 'nowrap' }}
        underlineFocusStyle={{ borderColor: 'white' }}
      />
    );
  }
}
