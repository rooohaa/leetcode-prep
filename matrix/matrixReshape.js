/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }

  function flatMatrix(matrix) {
    let array = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        array.push(matrix[i][j]);
      }
    }

    return array;
  }

  let arr = flatMatrix(mat);
  let matrix = [];
  let k = 0;

  for (let i = 0; i < r; i++) {
    let row = [];

    for (let j = 0; j < c; j++) {
      row.push(arr[k++]);
    }

    matrix.push(row);
  }

  return matrix;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
