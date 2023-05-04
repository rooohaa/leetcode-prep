/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function (nums) {
  let numbers = new Set(nums)
  let min = Math.min(...nums)
  let len = nums.length

  for (let i = min; i <= min + len - 1; i++) {
    if (!numbers.has(i)) {
      return false
    }   
  }

  return true
}

console.log(isConsecutive([1, 3, 4, 2]))
