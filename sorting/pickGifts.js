/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k > 0) {
    gifts.sort((a, b) => b - a);
 
    const sqrt = Math.sqrt(gifts[0]);
    gifts[0] = Math.round(sqrt);

    k -= 1;
  }

  return gifts.reduce((acc, el) => acc + el, 0);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
