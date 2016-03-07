import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import colors from 'styles/colors';

export default class CustomTextField extends Component {
  render() {
    return (
      <TextField
        {...this.props}
        style={{ width: '20em', marginRight: '2em', fontSize: '1.5em' }}
        inputStyle={{ color: colors.white }}
        floatingLabelStyle={{ whiteSpace: 'nowrap', color: colors.white }}
        underlineFocusStyle={{ borderColor: 'white' }}
      />
    );
  }
}
