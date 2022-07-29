def findClosestNumber(nums):
  cur_num = nums[0]
  min_diff = abs(nums[0])

  for num in nums:
    diff = abs(num)

    if diff < min_diff:
      min_diff = diff
      cur_num = num
    
    if diff == min_diff and num > cur_num:
      cur_num = num
  return cur_num


# print(findClosestNumber([-4, -2, 1, 4, 8]))
print(findClosestNumber([2, -1, 1]))
