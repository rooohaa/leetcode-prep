/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {}

  for (let i = 0; i < s.length; i++) {
    let curr = s[i]

    if (map[curr] !== undefined) {
      map[curr] += 1
    } else {
      map[curr] = 1
    }
  }

  let chars = Object.entries(map).sort((a, b) => b[1] - a[1])
  let res = []

  for (let i = 0; i < chars.length; i++) {
    let [char, count] = chars[i]

    for (let j = 0; j < count; j++) {
      res.push(char)
    }
  }

  return res.join('')
}

console.log(frequencySort('loveleetcode'))
