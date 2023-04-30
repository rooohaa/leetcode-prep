/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let max = Math.max(...nums)
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += max
    max += 1
  }

  return sum
}

console.log(maximizeSum([1, 2, 3, 4, 5], 3))
