// Constant space
// Time complexity O(n)

function singleNumber(nums) {
  let mask = 0

  for (let num of nums) {
    mask ^= num
  }

  return mask
}

console.log(singleNumber([4, 1, 2, 1, 2]))
