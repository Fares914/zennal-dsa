export function palindromePartitions(s: string): string[][] {
  const result: string[][] = [];
  function isPalindrome(start: number, end: number): boolean {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
  }
  function backtrack(index: number, current: string[]): void {
    if (index === s.length) {
      result.push([...current]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (isPalindrome(index, i)) {
        current.push(s.substring(index, i + 1));
        backtrack(i + 1, current);
        current.pop();
      }
    }
  }
  backtrack(0, []);
  return result;
}
