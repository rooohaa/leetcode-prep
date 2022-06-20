// Time & Space complexity O(n)

function canConstruct(r, m) {
  const map1 = {};
  const map2 = {};

  for (let c of r) {
    if (map1[c] !== undefined) {
      map1[c] += 1;
    } else {
      map1[c] = 1;
    }
  }

  for (let c of m) {
    if (map2[c] !== undefined) {
      map2[c] += 1;
    } else {
      map2[c] = 1;
    }
  }

  for (let key in map1) {
    if (map2[key] === undefined) {
      return false;
    }

    if (map2[key] < map1[key]) {
      return false;
    }
  }

  return true;
}
