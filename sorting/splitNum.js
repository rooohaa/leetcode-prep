/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const digits = num
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => a - b);

  const first = [];
  const second = [];

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      first.push(digits[i]);
    } else {
      second.push(digits[i]);
    }
  }

  return +first.join('') + +second.join('');
};

console.log(splitNum(4325));
