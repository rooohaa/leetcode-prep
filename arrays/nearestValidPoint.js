/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minDistance = Number.MAX_VALUE;
  let foundIndex = null;

  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];

    // if valid point
    if (x === a || y === b) {
      const distance = Math.abs(x - a) + Math.abs(y - b);

      if (distance < minDistance) {
        minDistance = distance;
        foundIndex = i;
      }
    }
  }

  return foundIndex ?? -1;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
