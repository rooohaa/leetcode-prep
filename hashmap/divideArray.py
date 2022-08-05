from collections import Counter

def divideArray(nums):
  hm = Counter(nums)
  
  for num in hm:
    if hm[num] % 2 != 0:
      return False
  return True
  