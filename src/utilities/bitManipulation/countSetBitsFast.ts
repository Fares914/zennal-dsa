export function countSetBitsFast(n: number): number {
  if (n < 0) {
    throw new Error("Input must be non-negative");
  }
  let count = 0;
  while (n > 0) {
    n &= n - 1;
    count++;
  }
  return count;
}
