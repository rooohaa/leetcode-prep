// Space O(1), Time O(n)

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  let map = {}
  let position = 0
  let time = 0

  for (let i = 0; i < keyboard.length; i++) {
    let letter = keyboard[i]
    map[letter] = i
  }

  for (let i = 0; i < word.length; i++) {
    let letter = word[i]

    time += Math.abs(map[letter] - position)
    position = map[letter]
  }

  return time
}

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"))
