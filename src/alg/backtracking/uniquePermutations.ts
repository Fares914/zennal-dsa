export function uniquePermutations(s: string): string[] {
  const result: string[] = [];
  const chars = s.split("").sort();
  const used = Array(chars.length).fill(false);
  function backtrack(current: string): void {
    if (current.length === chars.length) {
      result.push(current);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;

      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) {
        continue;
      }
      used[i] = true;
      backtrack(current + chars[i]);
      used[i] = false;
    }
  }
  backtrack("");
  return result;
}
