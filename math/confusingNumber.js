// Time O(n), Space O(n)

/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  let map = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  }
  let digits = n.toString().split("")
  let rotated = [...digits].reverse()

  for (let i = 0; i < rotated.length; i++) {
    if (map[rotated[i]] === undefined) {
      return false
    }

    rotated[i] = map[rotated[i]]
  }

  if (rotated.length !== digits.length) {
    return false
  }

  if (rotated.join("") === digits.join("")) {
    return false
  }

  return true
}

console.log(confusingNumber(89))
