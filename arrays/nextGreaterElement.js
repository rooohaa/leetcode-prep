// O(n^2) solution

var nextGreaterElement = function (nums1, nums2) {
  const map = {};

  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = i;
  }

  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];

    // Find elem that equals
    if (map[curr] !== undefined) {
      let idx = map[curr];
      let greater = -1;

      while (idx < nums2.length) {
        if (nums2[idx] > curr) {
          greater = nums2[idx];
          break;
        }
        idx += 1;
      }

      res.push(greater);
    }
  }

  return res;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
