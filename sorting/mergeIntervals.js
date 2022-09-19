// Sorting Interval problem
// O(n logn)

function merge(intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const lastEl = res[res.length - 1];

    if (start <= lastEl[1]) {
      lastEl[1] = Math.max(lastEl[1], end);
    } else {
      res.push([start, end]);
    }
  }

  return res;
}

console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ])
);
