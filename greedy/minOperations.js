/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let num = nums[i];
    let next = nums[i + 1];

    if (next <= num) {
      let diff = num - next + 1;
      nums[i + 1] += diff;
      ans += diff;
    }
  }

  return ans;
};

console.log(minOperations([1, 1, 1]));
