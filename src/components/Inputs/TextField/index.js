import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/lib/text-field';
import colors from 'styles/colors';

export default class InputsTextField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    for: PropTypes.string,
    type: PropTypes.string,
    step: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
  };

  handleChange = e => this.props.handleChange(this.props.for, e.target.value);

  render() {
    const { label, value, type, step } = this.props;

    return (
      <TextField
        value={value}
        type={type}
        step={step}
        onChange={this.handleChange}
        floatingLabelText={label}
        floatingLabelStyle={{
          top: 0,
          color: colors.gray3,
          lineHeight: '1em',
          whiteSpace: 'nowrap',
          transform: 'perspective(.1em) scale(0.75) translate3d(.1em, -1.25em, 0px)',
        }}
        style={{
          height: '1em',
          fontSize: '1.25em',
        }}
        inputStyle={{
          marginTop: 0,
          color: colors.black,
        }}
        underlineStyle={{ bottom: '-.5em' }}
        underlineFocusStyle={{ borderColor: colors.bernieBlue }}
        fullWidth
      />
    );
  }
}
