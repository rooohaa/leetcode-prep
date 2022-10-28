var diagonalSum = function (mat) {
  let sum = 0;
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    const currRow = mat[i];

    // primary diagonal
    sum += currRow[i];

    // secondary diagonal
    sum += currRow[currRow.length - i - 1];
  }

  const mid = Math.floor(n / 2);

  return n % 2 === 0 ? sum : sum - mat[mid][mid];
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// );
