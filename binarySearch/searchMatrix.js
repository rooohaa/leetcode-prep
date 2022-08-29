/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const rowIdx = Math.floor(mid / cols);
    const colIdx = Math.floor(mid % cols);

    const midElem = matrix[rowIdx][colIdx];

    if (midElem === target) {
      return true;
    }

    if (midElem > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
