/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  const arr = [];
  let sum = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
    sum += arr[i];
  }

  let target = sum / n;

  for (let i = 0; i < arr.length / 2; i++) {
    ans += target - arr[i];
  }

  return ans;
};

console.log(minOperations(6))
