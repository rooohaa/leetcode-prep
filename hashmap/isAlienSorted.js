var isAlienSorted = function (words, order) {
  const orderIdx = {}

  for (let i = 0; i < order.length; i++) {
    orderIdx[order[i]] = i
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i]
    const w2 = words[i + 1]

    for (let j = 0; j < w1.length; j++) {
      const char1 = w1[j]
      const char2 = w2[j]

      if (j === w2.length) {
        return false
      }

      if (char1 !== char2) {
        if (orderIdx[char2] < orderIdx[char1]) {
          return false
        }
        break
      }
    }
  }

  return true
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
