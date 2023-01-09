/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let curr = s;

  while (curr.length > k) {
    curr = divide(curr, k);
  }

  return curr;
};

function divide(str, size) {
  let arr = [];

  for (let i = 0; i < str.length; i += size) {
    let chunk = str.slice(i, i + size);
    arr.push(chunk);
  }

  let digitSums = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
      .split('')
      .map(Number)
      .reduce((acc, elem) => (acc += elem), 0);

    digitSums.push(sum);
  }

  return digitSums.join('');
}

console.log(divide('11111222223', 3));
