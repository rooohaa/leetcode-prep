var findSubarrays = function (nums) {
  const set = new Set()

  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1]

    if (set.has(sum)) {
      return true
    }

    set.add(sum)
  }

  return false
}

console.log(
  findSubarrays([
    77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97,
    72, 54, 15, 33, 77, 78, 8, 21, 47, 99, 48,
  ])
)
