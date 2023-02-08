function shortestToChar(s: string, c: string): number[] {
  const ans: number[] = [];

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 || right < s.length - 1) {
      if (s[left] === c) {
        ans.push(Math.abs(left - i));
        break;
      }

      if (s[right] === c) {
        ans.push(Math.abs(right - i));
        break;
      }

      if (right < s.length - 1) {
        right += 1;
      }

      if (left > 0) {
        left -= 1;
      }
    }
  }

  return ans;
}

console.log(shortestToChar('loveleetcode', 'e'));
