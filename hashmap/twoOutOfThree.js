/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  const map = {}
  const ans = []

  for (let num of nums1) {
    map[num] = new Set(['nums1'])
  }

  for (let num of nums2) {
    if (map[num] !== undefined) {
      map[num].add('nums2')
    } else {
      map[num] = new Set(['nums2'])
    }
  }

  for (let num of nums3) {
    if (map[num] !== undefined) {
      map[num].add('nums3')
    } else {
      map[num] = new Set(['nums3'])
    }
  }

  for (let [key, value] of Object.entries(map)) {
    if (value.size >= 2) {
      ans.push(+key)
    }
  }

  return ans
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))