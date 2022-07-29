def canBeTypedWords(text, brokenLetters):
  broken = set(brokenLetters)
  words = text.split(' ')
  count = len(words)
  
  for word in words:
    for letter in word:
      if letter in broken:
        count -= 1
        break
  return count


print(canBeTypedWords('hello world', 'ad'))
      