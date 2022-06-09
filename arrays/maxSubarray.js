// Time Complexity O(n)
// Keep summing numbers on each iteration and if sum is negative reset sum to 0.
// Update maxSum

function maxSubArray(nums) {
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (sum < 0) {
      sum = 0;
    }

    sum += num;
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
