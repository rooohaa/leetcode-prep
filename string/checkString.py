def checkString(s: str) -> bool:
	hasA = False
	hasB = False

	for char in s:
		if char == 'a':
			hasA = True
		elif char == 'b':
			hasB = True
		
		if hasB and char == 'a':
			return False
	
	return True

print(checkString('aaabbb'))
