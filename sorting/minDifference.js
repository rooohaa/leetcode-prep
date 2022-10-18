// Sorting + Sliding Window 
// O (n logn)

var minimumDifference = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  const sorted = nums.sort((a, b) => a - b);
  let res = sorted[k - 1] - sorted[0];

  for (let i = k; i < sorted.length; i++) {
    res = Math.min(res, nums[i] - nums[i - k + 1]);
  }

  return res;
};

// console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
);
