/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const res = [];
  const N = nums.length;
  const leftSum = [];
  const rightSum = [];

  let leftS = 0;
  let rightS = 0;

  for (let i = 0; i < N; i++) {
    leftSum.push(leftS);
    rightSum.push(rightS);

    leftS += nums[i];
    rightS += nums[N - 1 - i];
  }

  for (let i = 0; i < N; i++) {
    res.push(Math.abs(leftSum[i] - rightSum[N - 1 - i]));
  }

  return res;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
