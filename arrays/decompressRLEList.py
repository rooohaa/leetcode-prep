def decompress_list(nums):
  res = []

  for i in range(0, len(nums) - 1, 2):
    freq = nums[i]
    val = nums[i + 1]

    sub = []

    for i in range(0, freq):
      sub.append(val)
    
    res.extend(sub)
  
  return res


print(decompress_list([1, 2, 3, 4])) # -> [2, 4, 4, 4]
print(decompress_list([1, 1, 2, 3])) # -> [1, 3, 3]
