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
      ranksMap[rank] += 1

      if ranksMap[rank] == 3 or ranksMap[rank] == 2:
        best_hand = max(best_hand, ranksMap[rank])
    else: 
      ranksMap[rank] = 1

  for suit in suits:
    if suit in suitsMap:
      suitsMap[suit] += 1

      if suitsMap[suit] == 5:
        best_hand = 5
    else: 
      suitsMap[suit] = 1

  return resultMap[best_hand]

print(bestHand([13,2,3,1,9], ["a","a","a","a","a"]))
