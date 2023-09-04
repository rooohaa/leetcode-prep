/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time O(n) | Space O(n)
 */
var rotate = function (nums, k) {
  let arr = new Array(nums.length).fill(null)

  for (let i = 0; i < nums.length; i++) {
    if (i + k >= nums.length) {
      let idx = (i + k) % nums.length
      arr[idx] = nums[i]
    } else {
      arr[i + k] = nums[i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i]
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
