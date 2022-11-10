/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (curr.trim() !== '') {
      str += curr;
    } else {
      arr.push(str);
      str = '';
    }
  }

  if (str.length > 0) {
    arr.push(str);
  }

  return arr.filter(Boolean).reverse().join(' ');
};

console.log(reverseWords('  hello world  '));
