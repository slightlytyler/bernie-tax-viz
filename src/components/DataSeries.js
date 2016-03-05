import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import Line from 'components/Line';

export default class DataSeries extends Component {
  static propTypes = {
    colors: PropTypes.func,
    data: PropTypes.object,
    interpolationType: PropTypes.string,
    xScale: PropTypes.func,
    yScale: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    interpolationType: 'cardinal',
    colors: d3.scale.category10(),
  };

  render() {
    const { data, colors, xScale, yScale, interpolationType } = this.props;
    const line = d3.svg.line()
      .interpolate(interpolationType)
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
    ;

    return (
      <g>
        {
          data.points.map((series, id) => (
            <Line
              path={line(series)}
              stroke={colors(id)}
              key={id}
            />
          ))
        }
      </g>
    );
  }
}
