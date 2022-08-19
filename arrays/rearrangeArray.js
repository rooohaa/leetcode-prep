/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const pos = [],
    neg = [],
    res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > 0) {
      pos.push(num);
    } else {
      neg.push(num);
    }
  }

  for (let i = 0; i < nums.length / 2; i += 1) {
    res.push(pos[i]);
    res.push(neg[i]);
  }

  return res;
};
