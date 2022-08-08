def reverseOnlyLetters(s):
  left = 0
  right = len(s) - 1

  letters = list(s)
  
  while left < right:
    if letters[left].isalpha() and letters[right].isalpha():
      letters[left], letters[right] = letters[right], letters[left]
      
      left += 1
      right -= 1
        
    if not s[left].isalpha():
      left += 1
        
    if not s[right].isalpha():
      right -= 1

  return ''.join(letters)

print(reverseOnlyLetters('a-bC-dEf-ghIj'))
