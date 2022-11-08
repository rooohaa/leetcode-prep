def countDistinctIntegers(nums):
  ans = nums.copy()

  for num in nums:
    reversed = reverse(num)
    ans.append(reversed)
    
  return len(set(ans))


def reverse(num):
  return int(str(num)[::-1])


print(countDistinctIntegers([1, 13, 10, 12, 31]))
