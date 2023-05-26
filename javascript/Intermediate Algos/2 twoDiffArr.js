function diffArray(arr1, arr2) {
  // merge arrays
  const fullArr = [...arr1, ...arr2];
  //   checking the full array for everything that is NOT in it from both of the original arrays
  const difference = fullArr.filter((item) => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
  return difference;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));
