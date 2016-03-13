import React, { Component, PropTypes } from 'react';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import colors from 'styles/colors';

export default class InputsSelectField extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
    })),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    for: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  handleChange = (e, index, value) => this.props.handleChange(this.props.for, value);

  render() {
    const { options, label, value } = this.props;

    return (
      <SelectField
        value={value}
        onChange={this.handleChange}
        floatingLabelText={label}
        floatingLabelStyle={{
          color: colors.gray3,
        }}
        labelStyle={{
          color: colors.black,
        }}
        underlineFocusStyle={{ borderColor: colors.bernieBlue }}
        fullWidth
      >
        {
          options.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              primaryText={option.label}
            />
          ))
        }
        </SelectField>
    );
  }
}
