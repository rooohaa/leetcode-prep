function pivotIndex(nums) {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let rightSum = sum - (leftSum + num);

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += num;
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
