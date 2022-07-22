var findMaxAverage = function (nums, k) {
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let maxAverage = sum

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]
    sum += nums[i]
    maxAverage = Math.max(maxAverage, sum)
  }

  return maxAverage / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
