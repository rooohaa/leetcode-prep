var validMountainArray = function (arr) {
  let i = 0;
  let N = arr.length;

  // walk up
  while (i + 1 < N && arr[i] < arr[i + 1]) {
    i += 1;
  }

  // peak can't be first or last element
  if (i === 0 || i === N - 1) {
    return false;
  }

  // walk down
  while (i + 1 < N && arr[i] > arr[i + 1]) {
    i += 1;
  }

  return i === N - 1;
};

console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0]));
