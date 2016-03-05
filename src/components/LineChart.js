import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import DataSeries from 'components/DataSeries';

export default class LineChart extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    width: 600,
    height: 300,
  };

  render() {
    const { width, height, data } = this.props;
    const xScale = d3.scale.ordinal()
      .domain(data.xValues)
      .rangePoints([0, width])
    ;
    const yScale = d3.scale.linear()
      .range([height, 10])
      .domain([data.yMin, data.yMax])
    ;

    return (
      <svg width={width} height={height}>
        <DataSeries
          xScale={xScale}
          yScale={yScale}
          data={data}
          width={width}
          height={height}
        />
      </svg>
    );
  }
}
