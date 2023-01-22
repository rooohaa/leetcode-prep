/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
  let left = 0
  let right = 0

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      return nums1[left]
    }

    if (nums1[left] > nums2[right]) {
      right += 1;
    } else {
      left += 1;
    }
  }

  return -1;
};

console.log(getCommon([2, 3, 4, 5], [11, 12, 13, 14]))