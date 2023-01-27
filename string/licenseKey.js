/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let str = s.toUpperCase().replaceAll('-', '');
  let res = [];
  let count = 0;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    let curr = str[i];
    count += 1;
    res.push(curr);

    if (i !== 0 && count === k) {
      res.push('-');
      count = 0;
    }
  }

  return res.reverse().join('');
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(licenseKeyFormatting('2-5g-3-J', 2));
