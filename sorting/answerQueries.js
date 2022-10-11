// Sorting, prefix sum, binary search

var answerQueries = function (nums, queries) {
  const sorted = nums.sort((a, b) => a - b);
  const res = [];

  const prefSums = [];
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
    prefSums.push(sum);
  }

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const count = search(prefSums, query);

    res.push(count);
  }

  return res;
};

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle + 1;
    }

    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

console.log(answerQueries([4, 2, 5, 1, 6, 13], [3, 10, 21, 2]));
