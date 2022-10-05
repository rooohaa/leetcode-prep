var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};
