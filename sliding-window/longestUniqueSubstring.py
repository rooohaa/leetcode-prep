def lengthOfLongestSubstring(s: str) -> int:
  left, right = 0, 0
  hm = {}
  res = 0
  
  while right < len(s):
    r = s[right]
    hm[r] = hm.get(r, 0) + 1
    
    while hm[r] > 1:
      l = s[left]
      hm[l] -= 1
      left += 1
    
    res = max(res, right - left + 1)
    right += 1
    
  return res

print(lengthOfLongestSubstring('pwwkew'))
