/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = (nums) => {
  const elementSum = nums.reduce((acc, curr) => acc + curr, 0);
  const digitSum = nums.reduce((acc, curr) => {
    let sum = 0;

    while (curr) {
      sum += curr % 10;
      curr = Math.floor(curr / 10);
    }

    return acc + sum
  }, 0);

  return Math.abs(elementSum - digitSum);
};

console.log(differenceOfSum([1, 15, 6, 3]))
console.log(differenceOfSum([1, 2, 3, 4]))
