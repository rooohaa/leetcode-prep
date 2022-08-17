def uniqueMorseRepresentations(words):
  morse_codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  alph = 'abcdefghijklmnopqrstuvwxyz'
  hm = {}
  hs = set()

  for i in range(0, len(alph)):
    hm[alph[i]] = morse_codes[i]

  for word in words:
    transformed_word = []

    for letter in word:
      transformed_word.append(hm[letter])
    
    hs.add(''.join(transformed_word))

  return len(hs)


print(uniqueMorseRepresentations(["gin","zen","gig","msg"]))
