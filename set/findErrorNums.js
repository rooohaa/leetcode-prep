function findErrorNums(nums) {
  const set = new Set()
  const numbers = new Set()
  let dup = undefined
  let missing = undefined

  for (let i = 0; i < nums.length; i++) {
    numbers.add(i + 1)
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (set.has(num)) {
      dup = num
    }

    set.add(num)
  }

  numbers.forEach((num) => {
    if (!set.has(num)) {
      missing = num
    }
  })

  return [dup, missing]
}

console.log(findErrorNums([1, 2, 2, 4]))
