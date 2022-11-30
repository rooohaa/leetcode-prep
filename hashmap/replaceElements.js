/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
  const hm = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    hm[num] = i
  }

  for (let i = 0; i < operations.length; i++) {
    let [a, b] = operations[i]
    let idx = hm[a]

    delete hm[a]

    hm[b] = idx
    nums[idx] = b
  }

  return nums
}

// console.log(
//   arrayChange(
//     [1, 2, 4, 6],
//     [
//       [1, 3],
//       [4, 7],
//       [6, 1],
//     ]
//   )
// )

console.log(
  arrayChange(
    [1, 2],
    [
      [1, 3],
      [2, 1],
      [3, 2],
    ]
  )
)
