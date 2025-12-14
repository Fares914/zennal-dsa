export function fibonacciMemo(
  n: number,
  memo: Map<number, number> = new Map(),
): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (memo.has(n)) {
    return memo.get(n)!;
  }
  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}
