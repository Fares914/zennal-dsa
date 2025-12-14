export function hasUniqueCharacters(s: string): boolean {
  const seen = new Set<string>();
  for (const char of s) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}
