export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  function isValid(segment: string): boolean {
    if (segment.length === 0 || segment.length > 3) return false;
    if (segment[0] === "0" && segment.length > 1) return false;
    return parseInt(segment, 10) <= 255;
  }
  function backtrack(index: number, current: string[]): void {
    if (current.length === 4) {
      if (index === s.length) {
        result.push(current.join("."));
      }
      return;
    }
    if (index === s.length) {
      return;
    }

    for (let i = 1; i <= 3 && index + i <= s.length; i++) {
      const segment = s.substring(index, index + i);
      if (isValid(segment)) {
        current.push(segment);
        backtrack(index + i, current);
        current.pop();
      }
    }
  }
  backtrack(0, []);
  return result;
}
