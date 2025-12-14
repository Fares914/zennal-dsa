export function permutations<T>(arr: T[]): T[][] {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];
  const result: T[][] = [];
  function permute(current: T[], remaining: T[]): void {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = remaining[i];
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute([...current, next], newRemaining);
    }
  }
  permute([], arr);
  return result;
}
