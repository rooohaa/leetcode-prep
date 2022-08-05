def containsNearbyDuplicate(nums, k):
  hm = {}
  
  for i, num in enumerate(nums):
    if num in hm and abs(i - hm[num]) <= k:
      return True
    hm[num] = i

  return False
  