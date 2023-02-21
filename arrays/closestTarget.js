/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  const arr = [...words, ...words, ...words];
  let left = startIndex + words.length;
  let right = startIndex + words.length;
  let steps = 0;
  let isFound = false;

  while (left > 0 && right < arr.length - 1) {
    if (arr[left] === target || arr[right] === target) {
      isFound = true;
      break;
    }

    left -= 1;
    right += 1;
    steps += 1;
  }

  return isFound ? steps : -1;
};

console.log(
  closetTarget(
    [
      'hsdqinnoha',
      'mqhskgeqzr',
      'zemkwvqrww',
      'zemkwvqrww',
      'daljcrktje',
      'fghofclnwp',
      'djwdworyka',
      'cxfpybanhd',
      'fghofclnwp',
      'fghofclnwp',
    ],
    'zemkwvqrww',
    8
  )
);
