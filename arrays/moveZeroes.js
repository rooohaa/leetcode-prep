// Time Complexity O(n)
// Space Complexity O(1)

function moveZeroes(nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      idx += 1;
    }
  }

  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
