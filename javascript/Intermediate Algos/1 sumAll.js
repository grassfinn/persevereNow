//  Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
