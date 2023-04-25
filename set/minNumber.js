/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let nums = [...nums1, ...nums2]

  let min = null

  for (let num of nums) {
    if (set1.has(num) && set2.has(num)) {
      if (!min) {
        min = num
      } else {
        min = Math.min(min, num)
      }
    }
  }

  let min1 = Math.min(...nums1)
  let min2 = Math.min(...nums2)

  let num1 = parseInt(`${min1}${min2}`)
  let num2 = parseInt(`${min2}${min1}`)
  let res = Math.min(num1, num2)

  return min ? Math.min(min, res) : res
}

console.log(minNumber([4, 1, 3], [5, 7]))
