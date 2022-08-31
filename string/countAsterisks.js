var countAsterisks = function (s) {
  let count = 0;
  let isBetweenPair = false;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!isBetweenPair && char === '*') {
      count += 1;
    } else if (!isBetweenPair && char === '|') {
      isBetweenPair = true;
    } else if (isBetweenPair && char === '|') {
      isBetweenPair = false;
    }
  }

  return count;
};

console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'));
