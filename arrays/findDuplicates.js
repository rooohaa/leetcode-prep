// You must write an algorithm that runs in O(n) time and uses only constant extra space.
// when find a number i, flip the number at position i-1 to negative.
// if the number at position i-1 is already negative, i is the number that occurs twice.

var findDuplicates = function (nums) {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) {
      // duplicate found
      ans.push(Math.abs(nums[i]));
    } else {
      nums[idx] = -nums[idx];
    }
  }

  return ans;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
