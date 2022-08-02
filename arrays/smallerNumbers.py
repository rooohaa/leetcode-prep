def smaller_numbers(nums):
  res = []

  for i in range(0, len(nums)):
    count = 0

    for j in range(0, len(nums)):
      if nums[j] < nums[i]:
        count += 1
    
    res.append(count)

  return res

print(smaller_numbers([8, 1, 2, 2, 3])) # -> [4, 0, 1, 1, 3]
print(smaller_numbers([6, 5, 4, 8])) # -> [2, 1, 0, 3]
