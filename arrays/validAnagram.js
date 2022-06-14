// Time complexity O(3n) -> O(n)
// Use hashmap to store all occurences of letter and their count
// Finally compare two hashmaps

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map1 = {};
  let map2 = {};

  for (let char of s) {
    if (map1[char] !== undefined) {
      map1[char] += 1;
    } else {
      map1[char] = 1;
    }
  }

  for (let char of t) {
    if (map2[char] !== undefined) {
      map2[char] += 1;
    } else {
      map2[char] = 1;
    }
  }

  for (let key in map1) {
    if (map2[key] === undefined) {
      return false;
    }

    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
