var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i
    }
  }
  return -1
}

console.log(smallestEqual([4, 3, 2, 1]))
