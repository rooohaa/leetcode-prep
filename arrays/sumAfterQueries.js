var sumEvenAfterQueries = function (nums, queries) {
  let sum = 0;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [value, index] = queries[i];

    if (nums[index] % 2 === 0) {
      sum -= nums[index];
    }

    nums[index] += value;

    if (nums[index] % 2 === 0) {
      sum += nums[index];
    }

    res.push(sum);
  }

  return res;
};

console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);
