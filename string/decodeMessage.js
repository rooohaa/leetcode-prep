function decodeMessage(key, message) {
  const alph = 'abcdefghijklmnopqrstuvwxyz'
  const keyMap = {}

  for (const char of key) {
    if (char !== ' ' && keyMap[char] === undefined) {
      keyMap[char] = true
    }
  }

  const substitutionMap = {}

  Object.keys(keyMap).forEach((key, idx) => {
    substitutionMap[key] = alph[idx]
  })

  let result = ''

  for (const ch of message) {
    if (ch === ' ') {
      result += ' '
    } else {
      result += substitutionMap[ch]
    }
  }

  return result
}

console.log(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv'
  )
)
