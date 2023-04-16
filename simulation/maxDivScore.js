/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let maxDivScore = 0
  let map = {}

  for (let divisor of divisors) {
    let score = 0

    for (let num of nums) {
      if (num % divisor === 0) score++
    }

    map[divisor] = score
    maxDivScore = Math.max(maxDivScore, score)
  }

  let res = null

  for (let divisor in map) {
    let divScore = map[divisor]

    if (divScore === maxDivScore && !res) {
      res = divisor
    } else if (divisor === maxDivScore && res) {
      res = Math.min(res, divisor)
    }
  }

  return res
}

console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]))
