export function rabinKarp(
  text: string,
  pattern: string,
  base: number = 256,
  prime: number = 101,
): number[] {
  if (!pattern || !text || pattern.length > text.length) {
    return [];
  }
  const n = text.length;
  const m = pattern.length;
  const matches: number[] = [];

  let patternHash = 0;
  let windowHash = 0;
  let basePower = 1;

  for (let i = 0; i < m - 1; i++) {
    basePower = (basePower * base) % prime;
  }

  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % prime;
    windowHash = (windowHash * base + text.charCodeAt(i)) % prime;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === windowHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        matches.push(i);
      }
    }

    if (i < n - m) {
      windowHash = (windowHash - text.charCodeAt(i) * basePower) % prime;
      windowHash = (windowHash * base + text.charCodeAt(i + m)) % prime;

      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }
  return matches;
}
