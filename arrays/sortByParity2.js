function sortArrayByParityII(nums) {
  const res = new Array(nums.length).fill('')
  let evenIdx = 0
  let oddIdx = 1

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i]

    if (num % 2 === 0) {
      res[evenIdx] = num
      evenIdx += 2
    } else {
      res[oddIdx] = num
      oddIdx += 2
    }
  }

  return res
}

console.log(sortArrayByParityII([4, 2, 5, 7]))
