def mostFrequent(nums, key):
  hm = {}

  for idx, num in enumerate(nums):
    if num == key and idx + 1 < len(nums):
      target = nums[idx + 1]

      if target in hm:
        hm[target] += 1
      else:
        hm[target] = 1

  max_freq = max(list(hm.values()))

  for target in hm:
    if hm[target] == max_freq:
      return target



# print(mostFrequent([1, 100, 200, 1, 100], 1))
# print(mostFrequent([2, 2, 2, 2, 3], 2))
print(mostFrequent([1, 1], 1))
