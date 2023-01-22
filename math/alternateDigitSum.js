/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = (n) => {
  let sum = 0
  let sign = n.toString().length % 2 === 0 ? '-' : '+'

  while (n) {
    let digit = n % 10

    if (sign === '+') {
      sum += digit
      sign = '-'
    } else {
      sum += (digit * - 1)
      sign = '+'
    }

    n = Math.floor(n / 10)
  }

  return sum
};

console.log(alternateDigitSum(886996))