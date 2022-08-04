def isPalindrome(s):
  # Normalize str
  res = ''.join(ch for ch in s if ch.isalnum()).lower()

  left = 0
  right = len(res) - 1

  while left < right:
    if res[left] != res[right]:
      return False

    left += 1
    right -= 1

  return True

print(isPalindrome('A man, a plan, a canal: Panama')) 
