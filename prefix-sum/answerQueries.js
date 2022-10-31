function answerQueries(arr, queries, limit) {
  const prefix = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    prefix.push(sum);
  }

  const res = [];

  for (let i = 0; i < queries.length; i++) {
    const [j, k] = queries[i];
    const curr_sum = prefix[k] - prefix[j] + arr[j];

    res.push(curr_sum < limit);
  }

  return res;
}

console.log(
  answerQueries(
    [1, 6, 3, 2, 7, 2],
    [
      [0, 3],
      [2, 5],
      [2, 4],
    ],
    13
  )
);
