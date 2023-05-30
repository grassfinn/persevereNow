function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var mltple = max;

  for (let i = max; i >= min; i--) {
    if (mltple % i !== 0) {
      mltple += max;
      i = max;
    }
  }

  return mltple;
}

smallestCommons([2, 10]);
