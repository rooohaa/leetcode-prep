/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let squared = mid ** 2

    if (squared === x) {
      return mid
    }

    if (squared > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left - 1
}

console.log(mySqrt(625))
