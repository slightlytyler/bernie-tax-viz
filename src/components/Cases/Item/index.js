import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import colors from 'styles/colors';

export default class CasesItem extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  handleClick = () => this.props.handleClick(this.props.value);

  render() {
    const labelColor = this.props.active ? 'white' : colors.bernieBlue;
    const backgroundColor = this.props.active ? colors.bernieBlue : 'white';

    return (
      <RaisedButton
        label={this.props.label}
        backgroundColor={backgroundColor}
        labelColor={labelColor}
        onClick={this.handleClick}
      />
    );
  }
}
