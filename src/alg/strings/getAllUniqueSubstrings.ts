export function getAllUniqueSubstrings(s: string): string[] {
  const substrings = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      substrings.add(s.substring(i, j));
    }
  }
  return Array.from(substrings);
}
