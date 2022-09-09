var greatestLetter = function (s) {
  const letters = []
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let upper = char.toUpperCase()
    let lower = char.toLowerCase()

    if (set.has(upper) && char === lower) {
      letters.push(char.toLowerCase())
    } else if (set.has(lower) && char === upper) {
      letters.push(char.toLowerCase())
    }

    set.add(char)
  }

  if (letters.length === 0) {
    return ''
  }

  let greatest = letters[0]

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i]
    let pos = letter.charCodeAt() - 96

    if (pos > greatest.charCodeAt() - 96) {
      greatest = letter
    }
  }

  return greatest.toUpperCase()
}

console.log(greatestLetter('AbCdEfGhIjK'))
