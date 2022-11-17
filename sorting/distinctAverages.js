/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b)

  let set = new Set()
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let average = (nums[left] + nums[right]) / 2
    set.add(average)

    left += 1
    right -= 1
  }

  return set.size
}

console.log(distinctAverages([4, 1, 4, 0, 3, 5]))
