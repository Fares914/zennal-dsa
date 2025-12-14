export function boyerMoore(text: string, pattern: string): number[] {
  if (!pattern || !text || pattern.length > text.length) {
    return [];
  }
  const n = text.length;
  const m = pattern.length;
  const matches: number[] = [];

  const badCharTable = buildBadCharTable(pattern);
  let i = 0;
  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }
    if (j < 0) {
      matches.push(i);
      i += m;
    } else {
      const badCharPos = badCharTable.get(text.charCodeAt(i + j)) ?? -1;
      const shift = Math.max(1, j - badCharPos);
      i += shift;
    }
  }
  return matches;
}

function buildBadCharTable(pattern: string): Map<number, number> {
  const table = new Map<number, number>();
  for (let i = 0; i < pattern.length - 1; i++) {
    table.set(pattern.charCodeAt(i), i);
  }
  return table;
}
