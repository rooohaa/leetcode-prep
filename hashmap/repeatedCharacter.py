def repeatedCharacter(s: str) -> str:
  table = {}

  for char in s:
    if char in table:
      return char
      
    table[char] = 1
  
print(repeatedCharacter("abccbaacz"))
