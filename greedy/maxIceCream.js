/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let sorted = costs.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sorted.length; i++) {
    let curr_cost = sorted[i];

    if (curr_cost <= coins) {
      coins -= curr_cost;
      count += 1;
    }
  }

  return count;
};

console.log(maxIceCream([1, 3, 2, 4, 1], 7));
