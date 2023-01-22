/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = (num) => {
  if (num % 3 !== 0) {
    return []
  }

  let mid = num / 3;

  return [mid - 1, mid, mid + 1]
};


console.log(sumOfThree(33));
console.log(sumOfThree(4683));
