function steamrollArray(arr) {
  // adds the arry argument into an empty array
  const flat = [].concat(...arr);
  // if one element is an array recurse the function with the flattened version else return the flat array
  flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
