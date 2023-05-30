function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const twoPi = 2 * Math.PI;

  const solution = arr.map((item) => {
    const a = Math.pow(earthRadius + item.avgAlt, 3);
    const b = Math.sqrt(a / GM);
    const sum = Math.round(b * twoPi);
    return { name: item.name, orbitalPeriod: sum };
  });
  return solution;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
