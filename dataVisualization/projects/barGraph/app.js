// https://stackoverflow.com/questions/72389096/how-to-store-the-json-data-from-fetch-api-request-into-a-global-variable-javas
(async () => {
  let dataSet;
  async function getData() {
    const url =
      'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
    const res = await fetch(url);
    const data = await res.json();
    dataSet = data.data;
    return dataSet;
  }

  await getData();

  let heightScale;
  let xScale;
  let xAxisScale;
  let yAxisScale;

  let width = 800;
  let height = 600;
  let padding = 40;

  let svg = d3.select('svg');

  let drawCanvas = () => {
    svg.attr('width', width);
    svg.attr('height', height);
  };

  let generateScales = () => {
    // y scale
    heightScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataSet, (item) => {
          return item[1];
        }),
      ])
      .range([0, height - 2 * padding]);

    xScale = d3
      .scaleLinear()
      .domain([0, dataSet.length - 1])
      .range([padding, width - padding]);

    // turn dates from the dates to actual date objects
    let datesArray = dataSet.map((item) => {
      return new Date(item[0]);
    });
    console.log(datesArray)

    xAxisScale = d3
      .scaleTime()
      .domain([d3.min(datesArray), d3.max(datesArray)])
      .range([padding, width - padding]);

    yAxisScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataSet, (item) => {
          return item[1];
        }),
      ])
      .range([height - padding, padding]);
  };

  let drawBars = () => {
    let tooltip = d3
      .select('body')
      .append('div')
      .attr('id', 'tooltip')
      .style('visibility', 'hidden')
      .style('width', 'auto')
      .style('height', 'auto');

    svg
      .selectAll('rect')
      .data(dataSet)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', (width - 2 * padding) / dataSet.length)
      .attr('data-date', (item) => {
        return item[0];
      })
      .attr('data-gdp', (item) => {
        return item[1];
      })
      .attr('height', (item) => {
        return heightScale(item[1]);
      })
      .attr('x', (item, index) => {
        return xScale(index);
      })
      .attr('y', (item) => {
        return height - padding - heightScale(item[1]);
      })
      .on('mouseover', (item) => {
        tooltip.transition().style('visibility', 'visible');

        tooltip.text(item[0]);

        document.querySelector('#tooltip').setAttribute('data-date', item[0]);
      })
      .on('mouseout', (item) => {
        tooltip.transition().style('visibility', 'hidden');
      });
  };

  let generateAxes = () => {
    let xAxis = d3.axisBottom(xAxisScale);
    let yAxis = d3.axisLeft(yAxisScale);

    svg
      .append('g')
      .call(xAxis)
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height - padding})`);

    svg
      .append('g')
      .call(yAxis)
      .attr('id', 'y-axis')
      .attr('transform', `translate(${padding},0)`);
  };
  drawCanvas();
  generateScales();
  drawBars();
  generateAxes();
})();
