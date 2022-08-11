/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0
  let y = 0

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i]

    if (move === 'R') {
      x += 1
    } else if (move === 'L') {
      x -= 1
    } else if (move === 'U') {
      y += 1
    } else if (move === 'D') {
      y -= 1
    }
  }

  return x === 0 && y === 0
}
