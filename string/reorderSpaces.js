/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaces = 0
  let words = text.trim().split(' ').filter(Boolean)
  let wordsCount = words.length

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      spaces += 1
    }
  }

  let count = Math.floor(spaces / (wordsCount - 1))
  let remainCount = spaces % (wordsCount - 1)
  let res = []

  if (wordsCount === 1) {
    for (let i = 0; i < spaces; i++) {
      words.push('')
    }
    return words.join('')
  }

  for (let i = 0; i < words.length; i++) {
    let curr = words[i]

    res.push(curr)

    if (i < words.length - 1) {
      for (let k = 0; k < count; k++) {
        res.push(' ')
      }
    }
  }

  for (let i = 0; i < remainCount; i++) {
    res.push(' ')
  }

  return res.join('')
}

// console.log(reorderSpaces('  this   is  a sentence '))
// console.log(reorderSpaces(' practice   makes   perfect'))
console.log(reorderSpaces('  hello'))
