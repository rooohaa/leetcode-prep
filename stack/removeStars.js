/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    let curr = s[i]

    if (curr === '*') {
      stack.pop()
    } else {
      stack.push(curr)
    }
  }

  return stack.join('')
}

console.log(removeStars('leet**cod*e'))
