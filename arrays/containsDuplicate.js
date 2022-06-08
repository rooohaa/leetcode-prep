// Time complexity O(n)
// Space complexity O(n)
// Using set for O(1) item access -> has(item) => boolean;
// Can be solved with hashmap too

function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }

    set.add(num);
  }

  return false;
}

console.log(containsDuplicate([[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]]));
