// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

var detectCapitalUse = function (word) {
  if (word === word.toUpperCase()) return true
  if (word === word.toLowerCase()) return true

  let isCapital = word[0] === word[0].toUpperCase()

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      isCapital = false
    }
  }

  return isCapital
}

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('FlaG'))
