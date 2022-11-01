var findWinners = function (matches) {
  const winners = {};
  const losers = {};

  for (let i = 0; i < matches.length; i++) {
    const [winner, loser] = matches[i];

    if (winners[winner]) {
      winners[winner] += 1;
    } else {
      winners[winner] = 1;
    }

    if (losers[loser]) {
      losers[loser] += 1;
    } else {
      losers[loser] = 1;
    }
  }

  const ans1 = [];

  for (let key in winners) {
    if (!losers[key]) {
      ans1.push(+key);
    }
  }

  const ans2 = [];

  for (let key in losers) {
    if (losers[key] === 1) {
      ans2.push(+key);
    }
  }

  return [ans1, ans2];
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
