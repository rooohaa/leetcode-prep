var waysToSplitArray = function (nums) {
  let ans = 0;
  let prefix = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefix.push(sum);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    let leftSum = prefix[i];
    let rightSum = prefix[prefix.length - 1] - prefix[i];

    if (leftSum >= rightSum) {
      ans += 1;
    }
  }

  return ans;
};

console.log(waysToSplitArray([10, 4, -8, 7]));
