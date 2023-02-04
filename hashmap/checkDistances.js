/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const indexesMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (indexesMap[char]) {
      indexesMap[char].push(i);
    } else {
      indexesMap[char] = [i];
    }
  }

  for (let letter in indexesMap) {
    const dist = distance[letter.charCodeAt() - 97];
    const [x, y] = indexesMap[letter];
    const diff = y - x - 1;

    if (dist !== diff) {
      return false;
    }
  }

  return true;
};

// console.log(
//   checkDistances(
//     'abaccb',
//     [
//       1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0,
//     ]
//   )
// );

console.log(
  checkDistances(
    'abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza',
    [
      49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ]
  )
);
