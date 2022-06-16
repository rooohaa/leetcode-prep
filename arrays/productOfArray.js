// Time complexity O(n)
// Solution: compute prefix products and postfix products then multiply each elem together

function productExceptSelf(nums) {
  let N = nums.length;
  let left = new Array(N).fill('');
  let right = new Array(N).fill('');

  let res = [];

  left[0] = 1;
  right[right.length - 1] = 1;

  for (let i = 1; i < N; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < N; i++) {
    res[i] = left[i] * right[i];
  }

  console.log('Left: ', left)
  console.log('Right: ', right)
  console.log('Result: ', res)

  return res;
}

console.log(productExceptSelf([4, 5, 1, 8, 2]));

// prefix  -> [1, 4, 20, 20, 160]
// postfix -> [1, 2, 16, 16, 80]
