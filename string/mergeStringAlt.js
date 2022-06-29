function mergeAlternately(word1, word2) {
  let res = ''

  if (word1.length < word2.length) {
    for (let i = 0; i < word1.length; i++) {
      let str = `${word1[i]}${word2[i]}`
  
      res += str
    }
  } else {
    for (let i = 0; i < word2.length; i++) {
      let str = `${word1[i]}${word2[i]}`
  
      res += str
    }
  }

  if (word2.length > word1.length) {
    for (let i = word1.length; i < word2.length; i++) {
      res += word2[i]
    }
  } else {
    for (let i = word2.length; i < word1.length; i++) {
      res += word1[i]
    }
  }

  return res
}

console.log(mergeAlternately('abcd', 'pq'))
