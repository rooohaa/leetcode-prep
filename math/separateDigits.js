/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const ans = [];

  for (let num of nums) {
    const strNum = num.toString();

    for (let digit of strNum) {
      ans.push(+digit);
    }
  }

  return ans;
};

console.log(separateDigits([13, 25, 83, 77]));
