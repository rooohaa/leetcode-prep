// Space complexity O(n)
// Time Complexity O(n logn)

var minSetSize = function (arr) {
  const map = {};
  const half = arr.length / 2;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let currLen = 0;

  for (let i = 0; i < entries.length; i++) {
    const [value, count] = entries[i];
    currLen += count;
    res.push(value);

    if (currLen >= half) {
      break;
    }
  }

  return res.length;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
