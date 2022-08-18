// HashMap + Bucket sort
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const res = [];
  const counts = new Array(nums.length).fill('');

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  for (let num in map) {
    let freq = map[num];

    if (counts[freq] && counts[freq].length) {
      counts[freq].push(num);
    } else {
      counts[freq] = [num];
    }
  }

  for (let i = counts.length - 1; i >= 0; i -= 1) {
    const currNums = counts[i];
    let currLength = currNums.length;
    let j = 0;

    while (currLength && currLength > 0) {
      res.push(currNums[j]);
      j += 1;
      currLength -= 1;

      if (res.length === k) {
        return res;
      }
    }
  }
};

console.log(topKFrequent([1], 1));
