var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxVal = 0

  while (left < right) {
    let leftVal = height[left]
    let rightVal = height[right]
    let currentVolume = Math.min(leftVal, rightVal) * (right - left)

    maxVal = Math.max(maxVal, currentVolume)

    if (leftVal <= rightVal) {
      left += 1
    } else {
      right -= 1
    }
  }

  return maxVal
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
