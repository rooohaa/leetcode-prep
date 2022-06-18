// Time Complexity O(logn) Binary Search
// solution: use binary search, if target is not found the insert position of target will be left pointer


function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 2));
