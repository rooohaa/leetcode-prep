// Time complexity: O(n)
// Finding optimal solution on each iteration

function maxProfit(prices) {
  let maxProf = 0;
  let currentMinPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    let profit = price - currentMinPrice;

    maxProf = Math.max(maxProf, profit);
    currentMinPrice = Math.min(currentMinPrice, price);
  }

  return maxProf;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
