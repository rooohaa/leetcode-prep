/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const count = new Array(26).fill(0);

    for (let k = 0; k < word.length; k++) {
      let currIdx = word[k].charCodeAt() - 'a'.charCodeAt();
      count[currIdx] += 1;
    }

    let key = count.join(',');

    if (map[key]) {
      map[key].push(word);
    } else {
      map[key] = [word];
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
