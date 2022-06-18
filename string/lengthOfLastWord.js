// Time complexity O(n)
// Space complexity O(n)
// Solution: split words from string and update lastWord iteratively if word is not empty
// return lastWord length

function lengthOfLastWord(s) {
  let words = s.split(' ')
  let lastWord = undefined

  for (let word of words) {
    if (!!word) {
      lastWord = word
    }
  }

  return lastWord.length
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));
