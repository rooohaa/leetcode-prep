var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const leftPlot = flowerbed[i - 1] || 0;
      const rightPlot = flowerbed[i + 1] || 0;

      if (leftPlot === 0 && rightPlot === 0) {
        flowerbed[i] = 1;
        count += 1;

        if (count >= n) {
          return true
        }
      }
    }
  }

  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
