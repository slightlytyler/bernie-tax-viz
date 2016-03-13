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
          top: 0,
          color: colors.gray3,
          lineHeight: '1em',
          whiteSpace: 'nowrap',
          transform: 'perspective(.1em) scale(0.75) translate3d(.1em, -1.25em, 0px)',
        }}
        style={{
          position: 'relative',
          height: '1em',
          marginBottom: '-14px',
          fontSize: '1.25em',
        }}
        labelStyle={{
          top: 'calc(0 - 14px)',
          fontSize: '1em',
          lineHeight: '1em',
        }}
        iconStyle={{
          top: '-.75em',
        }}
        underlineStyle={{ bottom: '-.5em' }}
        underlineFocusStyle={{ borderColor: colors.bernieBlue }}
        fullWidth
      >
        {
          options.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              primaryText={option.label}
              style={{
                fontSize: '1.5em',
                lineHeight: '1.5em',
              }}
            />
          ))
        }
        </SelectField>
    );
  }
}
