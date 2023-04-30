/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  function calcPoints(points) {
    let totalPoints = 0

    for (let i = 0; i < points.length; i++) {
      let point = points[i]
      let prev = points[i - 1]
      let prevPrev = points[i - 2]

      if (prev === 10 || prevPrev === 10) {
        totalPoints += point * 2
      } else {
        totalPoints += point
      }
    }

    return totalPoints
  }

  let player1Points = calcPoints(player1)
  let player2Points = calcPoints(player2)

  if (player1Points > player2Points) {
    return 1
  } else if (player1Points < player2Points) {
    return 2
  } else {
    return 0
  }
}

console.log(isWinner([4, 10, 7, 9], [6, 5, 2, 3]))
