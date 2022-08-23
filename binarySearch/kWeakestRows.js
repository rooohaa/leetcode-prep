/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldiers = [];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    soldiers.push({ idx: i, count: countSoldiers(row) });
  }

  return soldiers
    .sort((a, b) => a.count - b.count)
    .map((el) => el.idx)
    .filter((el, i) => i + 1 <= k);
};

function countSoldiers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
