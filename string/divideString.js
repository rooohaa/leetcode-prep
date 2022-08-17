var divideString = function (s, k, fill) {
  const res = [];
  let count = 1;

  for (let i = 0; i < s.length; i += k) {
    let str = s.slice(i, k * count);
    count += 1;
    res.push(str);
  }

  return res.map((str) => {
    if (str.length == k) {
      return str;
    }

    let currLength = str.length;

    while (currLength < k) {
      str += fill;
      currLength += 1;
    }

    return str;
  });
};

console.log(divideString('abcdefghij', 3, 'x'));
