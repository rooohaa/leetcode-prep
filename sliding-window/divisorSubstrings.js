var divisorSubstrings = function (num, k) {
  const window = [];
  const str = '' + num;
  let res = 0;

  for (let i = 0; i < k; i++) {
    window.push(str[i]);
  }

  if (isDivisor(window, num)) {
    res += 1;
  }

  for (let i = k; i < str.length; i++) {
    const curr = str[i];

    window.push(curr);
    window.shift();

    if (isDivisor(window, num)) {
      res += 1;
    }
  }

  return res;
};

function isDivisor(arr, num) {
  return num % parseInt(arr.join('')) === 0;
}

console.log(divisorSubstrings(240, 2));
