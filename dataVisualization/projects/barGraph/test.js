// https://www.youtube.com/watch?v=sTOHoueLVJE
// https://www.youtube.com/watch?v=fw1tQOv2U14&ab_channel=DataVizDad
const w = 660;

const h = 400;

const svg = d3
  .select('#container')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .append('g')
  .attr('transform', `translate(200,20)`);

d3.csv('bog_bodies.csv').then((data) => {
  data.forEach((d) => {
    d.total = Number(d.total);
  });

  //sort

  data.sort((a, b) => d3.ascending(a.total, b.total));

  // x & y data scales
  const x = d3
    .scaleLinear()
    .range([0, w - 30])
    .domain([0, d3.max(data, (d) => d.total)]);

  const y = d3
    .scaleBand()
    .range([h - 50, 0])
    .domain(data.map((d) => d.bog_body_type));

  // verticle Grid lines
  svg
    .selectAll('line.vertical-grid')
    .data(x.ticks(5))
    .enter()
    .append('line')
    .attr('class', 'vertical-grid')
    .attr('x1', (d) => x(d))
    .attr('y1', 0)
    .attr('x2', (d) => x(d))
    .attr('y2', h)
    .style('stroke', 'gray')
    .style('stroke-width', 0.5)
    .style('stroke-dasharray', '3 3');
  // bars
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('y', (d) => y(d.bog_body_type))
    .attr('height', y.bandwidth())
    .attr('x', 0)
    .attr('width', (d) => x(d.total))
    // color
    .style('fill', 'skyblue');

  // axis
  const xAxis = d3
    .axisBottom(x)
    // labels on the x axis
    .ticks(5)
    // vertical height of the ticks
    .tickSize(0);
  const yAxis = d3.axisLeft(y).tickSize(0).tickPadding(0);

  // adding to the chart

  svg
    .append('g')
    .attr('class', 'x axis')
    .style('font-size', '10px')
    .attr('transform', `translate(0,${h - 50})`)
    .call(xAxis)
    // remove domain
    .call((g) => g.select('.domain').remove());

  svg
    .append('g')
    .attr('class', 'y axis')
    .style('font-size', '8px')
    .call(yAxis)
    .selectAll('path')
    .style('stroke-width', '1.75px');

  // select tick text
  svg.selectAll('.y.axis .tick text').text((d) => d.toUpperCase());

  // Add Total label
  svg
    .append('text')
    .attr(
      'transform',
      'translate(' + w / 2 + ',' + (h) + ')'
    )
    .style('text-anchor', 'middle')
    .style('font-size', '10px')
    .style('fill', 'black')
    .style('font-family', 'sans-serif')
    .attr('dy', '1em')
    .text('Total');

  // Add the chart title
  svg
    .append('text')
    .attr('x', 0)
    .attr('y', 0)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .style('font-family', 'sans-serif')
    .text('Bog Mummies Are the Most Frequently Observed Preservation State');

  // Add the chart data source
  svg
    .append('text')
    .attr(
      'transform',
      'translate(' +
        (335) +
        ',' +
        (h- 10) +
        ')'
    )
    .style('text-anchor', 'start')
    .style('font-size', '8px')
    .style('fill', 'lightgray')
    .style('font-family', 'sans-serif')
    .html(
      "<a href='https://www.cambridge.org/core/journals/antiquity/article/bogs-bones-and-bodies-the-deposition-of-human-remains-in-northern-european-mires-9000-bcad-1900/B90A16A211894CB87906A7BCFC0B2FC7#supplementary-materials'>Source: Bogs, Bones and Bodies - Published by Cambridge Press</a>"
    );
});
