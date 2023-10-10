(async () => {
  let dataSet;
  async function getData() {
    const url =
      'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
    const res = await fetch(url);
    const data = await res.json();
    dataSet = data;
    return dataSet;
  }

  await getData();
  const monthlyVariance = dataSet.monthlyVariance;
  const allYears = monthlyVariance.map((data) => data.year);
  let years = new Set(allYears);
  years = [...years];

  console.log(dataSet)

  const width = 1400;
  const height = 800;
  const padding = 60;
  let x;
  let y;
  const body = d3.select('body');
  body.append('svg').attr('id', 'svg');
  const svg = d3.select('svg');

  let colorScale = d3
    .scaleThreshold()
    // .domain([-1,5, -0.5, -0.1, 0.5, 1, 1.5])
    .domain([-1.25, -0.75, -0.25, 0.25, 0.75, 1.25])
    .range([
      'steelblue',
      'lightsteelblue',
      'lightcyan',
      'wheat',
      'orange',
      'salmon',
      'crimson',
    ]);

  let colorLabels = ['-1.5', '-1', '-0.5', '0', '0.5', '1', '1.5'];

  function drawCanvas() {
    svg.attr('width', width).attr('height', height);
    // .style('background', 'lightgray');
  }

  function generateScales() {
    x = d3
      .scaleLinear()
      .domain([d3.min(years), d3.max(years)])
      .range([padding, width - padding]);
    y = d3
      .scaleBand()
      .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      .range([padding, height - padding]);
  }

  function drawCells() {
    svg
      .append('g')
      .selectAll('rect')
      .data(dataSet.monthlyVariance)
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('x', (d) => x(d.year))
      .attr('y', (d) => y(d.month - 1))
      .attr('width', 5)
      .attr('height', y.bandwidth())
      .attr('fill', function (d) {
        return colorScale(d.variance);
      });
  }
  // console.log((width - 2 * padding) / (d3.max(years) - d3.min(years)))

  function drawAxes() {
    let xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));
        xAxis.ticks(Math.round((d3.max(years) - d3.min(years)) / 10));

    svg
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height - padding})`);


    const yAxis = d3
      .axisLeft(y)
      .tickFormat((d) => d3.timeFormat('%B')(new Date(0, d, 1)))
      .tickPadding(3);
    svg.append('g').call(yAxis).attr('transform', `translate(${padding},0)`);
  }

  drawCanvas();
  generateScales();
  drawAxes();
  drawCells();
})();
