/**
 * @param {number[]} nums
 * @return {number}
 */
// Sorting solution O(n logn)
var longestConsecutive = function (nums) {
  const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  let len = 1;
  let maxLen = Number.MIN_VALUE;

  for (let i = 0; i < sorted.length; i++) {
    let nextElem = sorted[i + 1];

    if (nextElem !== undefined && nextElem - sorted[i] === 1) {
      len += 1;
    } else {
      maxLen = Math.max(maxLen, len);
      len = 1;
    }
  }

  return maxLen;
};

// HashSet solution O(n) time & space
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // Check if current number is the start of sequence

    if (!numsSet.has(num - 1)) {
      let len = 0;

      while (numsSet.has(num + len)) {
        len += 1;
      }

      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
