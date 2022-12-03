/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count += 1
    }
  }

  let ans = count

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      count += 1
    }

    if (vowels.has(s[i - k])) {
      count -= 1
    }

    ans = Math.max(ans, count)
  }

  return ans
}

console.log(maxVowels('abciiidef', 3))
