function sortSentence(s) {
  const words = s.split(' ')
  const sorted = words.sort((a, b) => {
    let idx1 = a[a.length - 1]
    let idx2 = b[b.length - 1]

    return idx1 - idx2
  })
  return sorted
    .map((word) => {
      return word.slice(0, -1)
    })
    .join(' ')
}

console.log(sortSentence('s2 sentence4 This1 a3'))
