var frequencySort = function (nums) {
  const hm = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (hm[num]) {
      hm[num] += 1
    } else {
      hm[num] = 1
    }
  }

  return nums.sort((a, b) => compare(a, b, hm))
}

function compare(a, b, freq) {
  if (freq[a] > freq[b]) {
    return 1
  } else if (freq[a] < freq[b]) {
    return -1
  } else {
    return b - a
  }
}
