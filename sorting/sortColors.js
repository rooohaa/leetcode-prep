var sortColors = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  const zeros = map['0'];
  const ones = map['1'];
  const twos = map['2'];

  let idx = 0;

  for (let i = 0; i < zeros; i++) {
    nums[idx] = 0;
    idx += 1;
  }

  for (let i = 0; i < ones; i++) {
    nums[idx] = 1;
    idx += 1;
  }

  for (let i = 0; i < twos; i++) {
    nums[idx] = 2;
    idx += 1;
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
