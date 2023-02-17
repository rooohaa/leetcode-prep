/**
 * @param {string[]} logs
 * @return {number}
 */

var minOperations = function (logs) {
  let depth = 0;

  for (let i = 0; i < logs.length; i++) {
    let log = logs[i];

    // go to x folder
    if (log !== './' && log !== '../') {
      depth += 1;
    }
    // go back to parent folder
    else if (log === '../' && depth > 0) {
      depth -= 1;
    }
  }

  return depth;
};

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']));
