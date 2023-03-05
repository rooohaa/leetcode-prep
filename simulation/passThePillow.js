/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let index = 1;
  let forwards = true;

  while (time > 0) {
    if (index === n) {
      forwards = false;
    }

    if (index === 1) {
      forwards = true;
    }

    if (forwards) {
      index += 1;
    } else {
      index -= 1;
    }

    time -= 1;
  }

  return index;
};

console.log(passThePillow(18, 38));
