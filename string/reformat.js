/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const letters = []
  const digits = []

  for (let i = 0; i < s.length; i++) {
    let curr = s[i]

    if (!isNaN(curr)) {
      digits.push(curr)
    } else {
      letters.push(curr)
    }
  }

  const len = Math.max(letters.length, digits.length)
  const start = len === letters.length ? 'letter' : 'digit'
  const diff = Math.abs(letters.length - digits.length)

  if (diff > 1) {
    return ''
  }

  const res = []

  for (let i = 0; i < len; i++) {
    if (start === 'letter') {
      if (letters[i]) {
        res.push(letters[i])
      }

      if (digits[i]) {
        res.push(digits[i])
      }
    } else {
      if (digits[i]) {
        res.push(digits[i])
      }

      if (letters[i]) {
        res.push(letters[i])
      }
    }
  }

  return res.join('')
}

console.log(reformat('covid2019'))
