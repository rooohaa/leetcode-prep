
// Time O(n), Space O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }

  return set.size === 1 || set.size === 0
}

console.log(canPermutePalindrome("carerac"))
