/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let ans = []
  let map = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }

  let size = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    let curr = s[i]

    size += 1

    if (map[curr] > end) {
      end = map[curr]
    }

    if (i === end) {
      ans.push(size)
      size = 0
    } 
  }

  return ans
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))
