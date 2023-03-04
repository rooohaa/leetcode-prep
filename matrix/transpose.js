/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  function generateMatrix(m, n) {
    const mat = [];

    for (let i = 0; i < n; i++) {
      const row = [];

      for (let j = 0; j < m; j++) {
        row.push(null);
      }

      mat.push(row);
    }

    return mat;
  }

  const transposed = generateMatrix(matrix.length, matrix[0].length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const curr = matrix[i][j];

      transposed[j][i] = curr;
    }
  }

  return transposed;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
