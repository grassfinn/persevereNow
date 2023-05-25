function destroyer(arr) {
  const args = Object.values(arguments);
  const destroy = args.slice(1);
  //   filter the items that are NOT inside the destroy array
  const newArr = arr.filter((item) => {
    return !destroy.includes(item);
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
