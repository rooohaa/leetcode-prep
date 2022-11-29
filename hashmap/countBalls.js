/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let hm = {}

  for (let i = lowLimit; i <= highLimit; i++) {
    let num = i
    let sum = 0

    while (num) {
      sum += num % 10
      num = Math.floor(num / 10)
    }

    if (hm[sum] !== undefined) {
      hm[sum] += 1
    } else {
      hm[sum] = 1
    }
  }

  return Math.max(...Object.values(hm))
}

// console.log(countBalls(5, 15))
console.log(countBalls(1, 10))
