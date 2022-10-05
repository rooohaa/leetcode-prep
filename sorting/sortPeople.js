var sortPeople = function (names, heights) {
  const map = {};
  const N = names.length;

  for (let i = 0; i < N; i++) {
    const name = names[i];
    const height = heights[i];

    map[height] = name;
  }
  
  return Object.values(map).reverse()
};

// console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));
console.log(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150]));
