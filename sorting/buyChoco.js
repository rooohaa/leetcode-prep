/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b)

  if (prices[0] > money) return money

  let firstPrice = null

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i]

    if (!firstPrice && price < money) {
      firstPrice = price
    } else if (firstPrice && price < money) {
      let leftOver = money - (firstPrice + price)

      if (leftOver >= 0) {
        return leftOver
      }
    }
  }

  return money
}

console.log(buyChoco([1, 2, 2], 3))
