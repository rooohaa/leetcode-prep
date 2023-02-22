/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) {
    return [];
  }

  const matrix = [];
  let k = 0;

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(original[k++]);
    }

    matrix.push(row);
  }

  return matrix;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
