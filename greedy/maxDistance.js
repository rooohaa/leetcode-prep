var maxDistance = function (colors) {
  let left = 0
  let right = colors.length - 1

  let maxDist = 0

  while (left < right) {
    if (colors[left] === colors[right]) {
      right -= 1
    } else {
      maxDist = Math.max(maxDist, Math.abs(right - left))
      right -= 1
    }
  }

  left = 0
  right = colors.length - 1

  while (left < right) {
    if (colors[left] === colors[right]) {
      left += 1
    } else {
      maxDist = Math.max(maxDist, Math.abs(right - left))
      left += 1
    }
  }

  return maxDist
}
