import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import colors from 'styles/colors';

export default class CasesItem extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mobileLabel: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  handleClick = () => this.props.handleClick(this.props.value);

  render() {
    const labelColor = this.props.active ? 'white' : colors.bernieBlue;
    const backgroundColor = this.props.active ? colors.bernieBlue : 'white';

    return (
      <div>
        <div className="desktop-only">
          <RaisedButton
            label={this.props.label}
            backgroundColor={backgroundColor}
            style={{ height: '2em' }}
            labelColor={labelColor}
            labelStyle={{ fontSize: '1em', fontWeight: 700 }}
            onClick={this.handleClick}
          />
        </div>
        <div className="mobile-only">
          <RaisedButton
            label={this.props.mobileLabel}
            backgroundColor={backgroundColor}
            style={{ width: '100%', height: '3em', minWidth: 0 }}
            labelColor={labelColor}
            labelStyle={{ fontSize: '1em', fontWeight: 700 }}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
