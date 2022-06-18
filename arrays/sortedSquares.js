// Time and Space complexity is O(n)

function sortedSquares(nums) {
  let left = 0
  let right = nums.length - 1
  let idx = right

  const res = []

  while (left <= right) {
    let rightElem = Math.abs(nums[right] ** 2)
    let leftElem = Math.abs(nums[left] ** 2)

    if (rightElem > leftElem) {
      res[idx] = rightElem
      right -= 1
    } else {
      res[idx] = leftElem
      left += 1
    }

    idx -= 1
  }

  return res
}

console.log(sortedSquares([-7, -3, 2, 3, 11]));
