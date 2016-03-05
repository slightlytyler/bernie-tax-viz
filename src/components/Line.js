import React, { Component, PropTypes } from 'react';

export default class Line extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    strokeWidth: PropTypes.number,
  };

  static defaultProps = {
    stroke: 'blue',
    fill: 'none',
    strokeWidth: 3,
  };

  render() {
    const { path, stroke, fill, strokeWidth } = this.props;

    return (
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    );
  }
}
