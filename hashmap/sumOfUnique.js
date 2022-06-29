function sumOfUnique(nums) {
  let map = {}
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    map[num] = map[num] ? map[num] + 1 : 1
  }

  for (let key in map) {
    if (map[key] === 1) sum += Number(key)
  }

  return sum
}

console.log(sumOfUnique([1, 2, 3, 4, 5]))
