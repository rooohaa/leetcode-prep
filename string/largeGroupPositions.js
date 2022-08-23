var largeGroupPositions = function (s) {
  const res = [];
  let char = s[0];
  let count = 1;
  let idx = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === char) {
      count += 1;
    } else {
      char = s[i];
      count = 1;
      idx = i;
    }

    if (count >= 3 && s[i + 1] !== char) {
      res.push([idx, i]);
    }
  }

  return res;
};

// console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
console.log(largeGroupPositions('abbxxxxzzy'));
