def firstPalindrome(words) -> str:
  for word in words:
    if word == word[::-1]:
      return word
  return ""

print(firstPalindrome(["abc","car","ada","racecar","cool"]))
