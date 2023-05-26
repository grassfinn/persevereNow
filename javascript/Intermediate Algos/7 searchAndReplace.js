function myReplace(str, before, after) {
  const regex = /[A-Z]/;
  const addCapital = after[0].toUpperCase() + after.slice(1);
  const addLower = after[0].toLowerCase() + after.slice(1);

  if (regex.test(before[0])) {
    return str.replace(before, addCapital);
  }
  return str.replace(before, addLower);
}

console.log(myReplace('Let us go to the store', 'store', 'mall'));
