/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const map = {};

  for (const [id, val] of nums1) {
    map[id] = val;
  }

  for (const [id, val] of nums2) {
    if (map[id] !== undefined) {
      map[id] += val;
    } else {
      map[id] = val;
    }
  }

  return Object.entries(map).map(([id, val]) => {
    return [+id, val];
  });
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
