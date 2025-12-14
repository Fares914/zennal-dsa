export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }
  const n = s.length;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLen = 2;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLen = len;
      }
    }
  }
  return s.substring(start, start + maxLen);
}
