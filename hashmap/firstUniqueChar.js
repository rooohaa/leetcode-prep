// Time complexity : O(N) since we go through the string of length N two times.
// Space complexity : O(1) because English alphabet contains 26 letters.

var firstUniqChar = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (map[char]) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (map[char] === 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('loveleetcode'))
