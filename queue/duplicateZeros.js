/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const queue = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      queue.push(0);
      queue.push(0);
    } else {
      queue.push(arr[i]);
    }

    const first = queue.shift();
    arr[i] = first;
  }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
