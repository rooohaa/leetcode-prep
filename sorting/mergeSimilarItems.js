var mergeSimilarItems = function (items1, items2) {
  const all = [...items1, ...items2];
  const map = {};
  const res = [];

  for (let i = 0; i < all.length; i++) {
    const [value, weight] = all[i];

    if (map[value]) {
      map[value] += weight;
    } else {
      map[value] = weight;
    }
  }

  Object.keys(map).forEach((key) => {
    res.push([+key, map[key]]);
  });

  return res;
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
