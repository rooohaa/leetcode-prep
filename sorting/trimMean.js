/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);

  // 5% of elements length
  let trimCount = arr.length / 10 / 2;

  // remove 5% elements from start
  const trimArr = arr.slice(trimCount);

  // remove 5% elements from end
  while (trimCount !== 0) {
    trimArr.pop();
    trimCount -= 1;
  }

  let sum = trimArr.reduce((acc, el) => (acc += el), 0);

  return sum / trimArr.length;
};

console.log(
  trimMean([6, 10, 0, 2, 7, 5, 1, 2, 0, 3, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8])
);
