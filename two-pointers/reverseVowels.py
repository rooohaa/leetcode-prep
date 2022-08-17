def reverseVowels(s):
  left = 0
  right = len(s) - 1
  vowels = {'a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U'}
  letters = list(s)

  while left < right:
    if letters[left] in vowels and letters[right] in vowels:
      letters[left], letters[right] = letters[right], letters[left] 
      left += 1
      right -=1
    elif letters[left] not in vowels:
      left += 1
    elif letters[right] not in vowels:
      right -=1
  
  return  ''.join(letters)
    

print(reverseVowels('leetcode'))
