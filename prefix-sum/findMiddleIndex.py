def findMiddleIndex(nums):
  sum = 0
  left_sum = 0

  for num in nums:
    sum += num
  
  for i, num in enumerate(nums):
    right_sum = sum - num - left_sum

    if left_sum == right_sum:
      return i
    
    left_sum += num

  return -1

print(findMiddleIndex([1, 7, 3, 6, 5, 6]))
