/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  let res = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const queryFreq = s(query);
    let ans = 0;

    for (let k = 0; k < words.length; k++) {
      if (queryFreq < s(words[k])) {
        ans += 1;
      }
    }

    res.push(ans);
  }

  return res;
};

function s(str) {
  if (!str) {
    return undefined;
  }

  let minChar = str[0];
  let minCharCode = str[0].charCodeAt();

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < minCharCode) {
      minCharCode = str[i].charCodeAt();
      minChar = str[i];
    }
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === minChar) {
      count += 1;
    }
  }

  return count;
}

console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']));

// console.log(numSmallerByFrequency(['cbd'], ['zaaaz']));
