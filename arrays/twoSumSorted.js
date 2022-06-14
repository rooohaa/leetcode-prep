// This solution has Space Complexity of O(1) and Time Complexity O(n)
// Two pointers pattern and because of we know that array is sorted we can move out pointer in right way

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
