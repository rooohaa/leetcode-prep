var findRestaurant = function (list1, list2) {
  const map = {};

  for (let i = 0; i < list1.length; i++) {
    const item = list1[i];

    if (map[item]) {
      map[item].push(i);
    } else {
      map[item] = [i];
    }
  }

  for (let i = 0; i < list2.length; i++) {
    const item = list2[i];

    if (map[item]) {
      map[item].push(i);
    }
  }

  for (let key in map) {
    if (map[key].length > 1) {
      map[key] = map[key].reduce((acc, el) => (acc += el), 0);
    } else {
      delete map[key];
    }
  }

  const minSum = Math.min(...Object.values(map));
  const res = [];

  for (let key in map) {
    if (map[key] === minSum) {
      res.push(key);
    }
  }

  return res;
};

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
);
