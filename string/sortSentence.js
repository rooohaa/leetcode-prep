function sortSentence(s) {
  const words = s.split(' ')
  const sorted = new Array(words.length)

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let sliced = word.slice(0, word.length - 1)
    let pos = word.charAt(word.length - 1)
  }

  return sorted.join(' ')
}

console.log(sortSentence('is2 sentence4 This1 a3'))
