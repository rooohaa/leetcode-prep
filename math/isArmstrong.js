/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
  let digits = n.toString().split("").map(Number)
  let len = digits.length

  let sum = digits.reduce((acc, el) => {
    return acc + el ** len
  }, 0)

  return sum === n
}

console.log(isArmstrong(153))
