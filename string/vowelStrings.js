/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let count = 0
  let vowels = new Set(['a', 'e', 'i', 'o', 'u'])

  const isVowelString = (str) =>
    vowels.has(str[0]) && vowels.has(str[str.length - 1])

  for (let i = left; i <= right; i += 1) {
    let word = words[i]

    if (isVowelString(word)) {
      count += 1
    }
  }

  return count
}

console.log(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4))
