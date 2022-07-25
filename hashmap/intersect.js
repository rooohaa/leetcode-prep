var intersect = function (nums1, nums2) {
  const map = new Map()
  const res = []

  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      res.push(num)
      map.set(num, map.get(num) - 1)
    }
  }

  return res
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // -> [4, 9]
console.log(intersect([1, 2, 2, 1], [2, 2])) // -> [2, 2]
