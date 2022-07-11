function reversePrefix(word, ch) {
  let prefix = ''

  for (let i = 0; i < word.length; i++) {
    let char = word[i]

    if (char === ch) break

    if (prefix !== ch) {
      prefix += char
    }
  }

  if (prefix === word) return word

  prefix += ch
  prefix = prefix.split('').reverse().join('')

  for (let i = prefix.length; i < word.length; i++) {
    prefix += word[i]
  }

  return prefix
}

console.log(reversePrefix('abcd', 'z'))
