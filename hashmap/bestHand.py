def bestHand(ranks, suits) -> str:
  ranksMap = {}
  suitsMap = {}
  resultMap = {
    5: 'Flush',
    3: 'Three of a Kind',
    2: 'Pair',
    1: 'High Card'
  }
  best_hand = 1

  for rank in ranks:
    if rank in ranksMap:
      if ranksMap[rank] == 3 or ranksMap[rank] == 2:
        best_hand = max(best_hand, ranksMap[rank])
      ranksMap[rank] += 1
    else: 
      ranksMap[rank] = 1

  for suit in suits:
    if suit in suitsMap:
      suitsMap[suit] += 1

      if suitsMap[suit] == 5:
        best_hand = 5
    else: 
      suitsMap[suit] = 1
  
  print(ranksMap, suitsMap, best_hand)

  return resultMap[best_hand]

print(bestHand([13,2,3,1,9], ["a","a","a","a","a"]))
