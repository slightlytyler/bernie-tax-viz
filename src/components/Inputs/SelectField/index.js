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
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    const { options, label } = this.props;

    return (
      <SelectField
        floatingLabelText={label}
        floatingLabelStyle={{ color: colors.gray3 }}
        style={{ fontSize: '1.25em' }}
        inputStyle={{ color: colors.black }}
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
