// Time Complexity O(n)
// Space Complexity O(1)

function findMaxConsecutiveOnes(nums) {
  let counter = 0;
  let max = counter;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter += 1;
    } else {
      counter = 0;
    }

    max = Math.max(max, counter);
  }

  return max;
}
