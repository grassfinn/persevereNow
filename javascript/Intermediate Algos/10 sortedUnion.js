function uniteUnique(arr) {
  const solution = [];

  const args = [...arguments].flat();

  for (let i = 0; i < args.length; i++) {
    const currentValue = args[i];
    if (!solution.includes(currentValue)) {
      solution.push(currentValue);
    }
  }
  return solution;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
