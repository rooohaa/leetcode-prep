// Time Complexity O(log n)
// Two pointers
// Get middle value check if its equal to target -> if true return middle index
// If middle value > target cut right portion of arr else cut left portion

function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
