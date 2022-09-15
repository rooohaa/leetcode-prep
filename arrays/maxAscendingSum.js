var maxAscendingSum = function (nums) {
  let maxSum = 0
  let sum = 0
  let lastNum = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (num <= lastNum) {
      maxSum = Math.max(sum, maxSum)
      sum = 0
    }

    sum += num
    lastNum = num
    maxSum = Math.max(sum, maxSum)
  }

  return maxSum
}

// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))
console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]))
