/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let letters = Array.from('abcdefghijklmnopqrstuvwxyz');
  let ans = [];

  if (n % 2 === 0) {
    for (let i = 0; i < n - 1; i++) {
      ans.push(letters[0]);
    }
    ans.push(letters[1]);
  } else {
    for (let i = 0; i < n; i++) {
      ans.push(letters[0]);
    }
  }

  return ans.join('');
};

console.log(generateTheString(7));
