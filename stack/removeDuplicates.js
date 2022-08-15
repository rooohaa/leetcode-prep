var removeDuplicates = function (s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    const lastElem = stack[stack.length - 1]

    if (stack.length === 0) {
      stack.push(letter)
    } else {
      if (lastElem === letter) {
        stack.pop()
      } else {
        stack.push(letter)
      }
    }
  }

  return stack.join('')
}

console.log(removeDuplicates('abbaca'))
