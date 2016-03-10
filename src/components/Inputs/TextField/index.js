import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/lib/text-field';
import colors from 'styles/colors';

export default class InputsTextField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    const { label } = this.props;

    return (
      <TextField
        floatingLabelText={label}
        floatingLabelStyle={{ color: colors.gray3 }}
        style={{ fontSize: '1.25em' }}
        inputStyle={{ color: colors.black }}
        underlineFocusStyle={{ borderColor: colors.bernieBlue }}
        fullWidth
      />
    );
  }
}
