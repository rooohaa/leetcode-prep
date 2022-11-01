def largestUniqueNumber(nums):
  hm = {}
  
  for num in nums:
    hm[num] = hm.get(num, 0) + 1
  
  ans = -1

  for num in hm:
    freq = hm[num]
      
    if freq == 1 and num > ans:
      ans = num
  
  return ans

print(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))
