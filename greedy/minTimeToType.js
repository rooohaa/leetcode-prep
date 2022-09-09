var minTimeToType = function (word) {
  let curr = 'a'
  let seconds = 0

  for (let i = 0; i < word.length; i++) {
    let char = word[i]

    let pos1 = curr.charCodeAt() - 96
    let pos2 = char.charCodeAt() - 96

    let clockwise = Math.abs(pos1 - pos2)
    let counterClockwise = Math.min(26 - pos1 + pos2, 26 - pos2 + pos1)

    seconds += Math.min(clockwise, counterClockwise)
    curr = char
  }

  seconds += word.length

  return seconds
}

console.log(minTimeToType('nsvrbb'))
