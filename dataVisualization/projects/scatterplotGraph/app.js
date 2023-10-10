// https://codepen.io/freeCodeCamp/pen/bgpXyK?editors=1010
(async () => {
  let data;
  async function getData() {
    const url =
      'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
    const res = await fetch(url);
    const dataSet = await res.json();
    data = dataSet;
    data.map((d) => {
      let parsedTime = d.Time.split(':');
      // transforming the time to proper format
      d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
    });
    return data;
  }

  await getData();

  let width = 800;
  let height = 700;
  let padding = 30;

  let svg = d3.select('svg');

  // drawCanvas
  function drawCanvas() {
    svg.attr('width', width);
    svg.attr('height', height);
    svg.style('background', 'lightgray');
  }
  // generateScales
  function generateScales() {
    let timeFormat = d3.timeFormat('%M:%S');
    let y = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.Time))
      .range([0, height - 1 * padding]);

    let x = d3
      .scaleLinear()
      .domain([
        d3.min(data, (item) => item.Year - 1),
        d3.max(data, (item) => item.Year + 1),
      ])
      .range([padding, width - padding]);


    //   ? https://stackoverflow.com/questions/47993728/create-a-date-object-with-the-year-only
    let datesArray = data.map((date) => new Date(date.Year));
    // console.log(datesArray);

    // look into tickFormat
    let xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));
    let yAxis = d3.axisLeft(y).tickFormat(timeFormat);

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

    var div = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .attr('id', 'tooltip')
      .style('opacity', 0);

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('data-xvalue', (d) => d.Year)
      .attr('data-yvalue', (d) => d.Time)
      .attr('r', 6)
      .attr('cx', (d) => x(d.Year))
      .attr('cy', (d) => y(d.Time))
      .style('fill', (d) => (d.Doping != '' ? 'red' : 'green'))
      .style('opacity', 0.9)
      .on('mouseover', function (d) {
        console.log(d3.event);
        div.style('opacity', 0.9);
        div.attr('data-year', d.Year);
        div
          .html(
            `${d.Name}: ${d.Nationality} <br/> Year: ${
              d.Year
            }, Time: ${timeFormat(d.Time)} <br/> ${d.Doping}`
          )
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY - 28}px`);
      })
      .on('mouseout', function () {
        div.style('opacity', 0);
      });
  }
  // draw dots
  // generateAxes
  // Tooltip

  console.log(data);
  drawCanvas();
  generateScales();
})();
