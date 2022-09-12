var nextGreatestLetter = function (letters, target) {
  let filteredLetters = letters.filter((l) => {
    return l.charCodeAt() > target.charCodeAt()
  })

  return filteredLetters[0] || letters[0]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
