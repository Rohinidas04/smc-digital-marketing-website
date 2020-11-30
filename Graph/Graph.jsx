import React, { useState, useEffect, useRef } from 'react';
import { scaleLinear, scaleBand, scaleTime } from 'd3-scale';
import { max } from 'd3-array';
import { select, axisBottom, axisLeft, values } from 'd3';
import { svg, wrapper, axisLine, grid } from './Graph.module.scss';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      // console.log(entries)
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return dimensions;
};

function make_y_gridlines(height) {
  return axisLeft(scaleLinear().range([height, 0])).ticks(12);
}

const Graph = () => {
  const [data, setData] = useState([20, 30]);

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    generateGraph();
  }, [data, dimensions]);

  const generateGraph = () => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const xScale = scaleBand()
      .domain([0, 1])
      .range([0, dimensions.width])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 50]).range([dimensions.height, 0]);

    const tickLabels = ['messages sent', 'messages recieved'];

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((d, i) => tickLabels[i]);

    const yAxis = axisLeft(yScale);

    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      .attr('class', `${axisLine}`)
      .call(xAxis);

    svg
      .select('.y-axis')
      .style(
        'transform',
        `translateX(${dimensions.width - dimensions.width * 0.95}px)`
      )
      .attr('class', `${axisLine}`)
      .call(yAxis);

    svg
      .append('g')
      .attr('class', `${grid}`)
      .call(
        make_y_gridlines(dimensions.height)
          .tickSize(-dimensions.width)
          .tickFormat('')
      );

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (value, index) => xScale(index))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', (value) => dimensions.height - yScale(value))
      .attr('fill', '#808DA4');
  };

  return (
    <div ref={wrapperRef} className={wrapper}>
      <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
  );
};

export default Graph;
