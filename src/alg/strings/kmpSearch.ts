export function kmpSearch(text: string, pattern: string): number[] {
  if (!pattern || !text || pattern.length > text.length) {
    return [];
  }
  const n = text.length;
  const m = pattern.length;
  const lps = buildLPS(pattern);
  const matches: number[] = [];
  let i = 0;
  let j = 0;
  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    if (j === m) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return matches;
}

function buildLPS(pattern: string): number[] {
  const m = pattern.length;
  const lps: number[] = new Array(m).fill(0);
  let len = 0;
  let i = 1;
  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
