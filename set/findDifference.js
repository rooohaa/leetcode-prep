var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const res1 = new Set()
  const res2 = new Set()

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]

    if (!set2.has(num)) {
      res1.add(num)
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]

    if (!set1.has(num)) {
      res2.add(num)
    }
  }

  return [[...res1], [...res2]]
}

console.log(findDifference([1, 2, 3], [2, 4, 6]))
