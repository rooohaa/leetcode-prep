/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  let map = {}
  let ans = []

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    map[num] = i
  }

  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    ans.push(map[num])
  }

  return ans
}

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]))
